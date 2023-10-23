# Golang DI 對比 Laravel 範例


```php
<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use App\Models\User;
use Illuminate\View\View;
 
class UserController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        protected UserRepository $users,
    ) {}
 
    /**
     * Show the profile for the given user.
     */
    public function show(string $id): View
    {
        $user = $this->users->find($id);
 
        return view('user.profile', ['user' => $user]);
    }
}
```




轉換如下：

**repository/user_repository.go**
```go
package repository

type User struct {
	ID   string
	Name string
}

type UserRepository struct{}

func (r *UserRepository) Find(id string) *User {
	// 实际应用中，这里可能会从数据库中查询用户信息
	return &User{ID: id, Name: "John Doe"}
}
```

**controller/user_controller.go**
```go
package controller

import (
	"fmt"
	"your_project/repository"  // 导入repository包
)

type UserController struct {
	users *repository.UserRepository
}

func NewUserController(users *repository.UserRepository) *UserController {
	return &UserController{users: users}
}

func (c *UserController) Show(id string) {
	user := c.users.Find(id)
	fmt.Printf("User: %+v\n", user)
}
```

**main.go**
```go
package main

import (
	"your_project/controller"
	"your_project/repository"
)

func main() {
	usersRepo := &repository.UserRepository{}
	userController := controller.NewUserController(usersRepo)
	userController.Show("1")
}
```

在这个示例中，将`UserRepository`定义在`repository`包内，`UserController`定义在`controller`包内，然后在`main.go`文件中导入这两个包并使用它们。请注意将`your_project`替换为实际的项目路径。



要为上面的`UserController`和`UserRepository`编写测试用例，你可以使用Go的内置`testing`包。以下是一些基本的测试用例示例：

### 1. UserRepository测试

```go
package repository

import (
	"testing"
)

func TestFindUser(t *testing.T) {
	repo := &UserRepository{}
	user := repo.Find("1")
	if user == nil {
		t.Error("Expected a user, got nil")
	}
	if user.ID != "1" || user.Name != "John Doe" {
		t.Errorf("Expected user with ID '1' and Name 'John Doe', got %+v", user)
	}
}
```

这个测试用例测试了`UserRepository`的`Find`方法，确保它返回了正确的用户对象。

### 2. UserController测试

对于`UserController`的测试，我们需要创建一个`UserRepository`的模拟版本，这样我们就可以在不依赖实际`UserRepository`行为的情况下测试`UserController`。

```go
package controller

import (
	"testing"
	"your_project/repository"
)

type MockUserRepository struct{}

func (m *MockUserRepository) Find(id string) *repository.User {
	return &repository.User{ID: "1", Name: "John Doe"}
}

func TestShowUser(t *testing.T) {
	mockRepo := &MockUserRepository{}
	controller := NewUserController(mockRepo)
	// 你可能需要一个方式来捕捉或比较controller方法的输出
	controller.Show("1")
}
```

在这个测试用例中，我们创建了一个`MockUserRepository`来模拟`UserRepository`的行为，并用它来创建`UserController`的实例。然后我们调用`Show`方法。在这个简单的例子中，`Show`方法只是打印用户信息，所以你可能需要找到一种方法来捕捉或比较输出，以确保方法的行为是正确的。



## 依赖注入框架 wire

`wire` 是由 Google 开发的一种 Go 语言依赖注入框架。它可以在编译时解析和注入依赖关系，从而提高运行时性能并减少启动时间。使用 `wire` 来处理依赖注入可以使代码更加清晰，并且可以自动生成依赖注入的代码，避免了手动编写繁琐的初始化代码。

对于你提供的 `UserController` 和 `UserRepository` 的例子，使用 `wire` 是完全合适的。以下是如何使用 `wire` 来注入依赖的基本步骤：

### 1. 安装 Wire
首先，你需要安装 `wire` 工具：
```sh
go install github.com/google/wire/cmd/wire@latest
```

### 2. 创建 Wire 文件
在你的项目中创建一个名为 `wire.go` 的文件，并编写如下内容：

```go
// +build wireinject

package main

import (
	"your_project/controller"
	"your_project/repository"
	"github.com/google/wire"
)

func InitializeUserController() *controller.UserController {
	wire.Build(repository.NewUserRepository, controller.NewUserController)
	return nil
}
```

在这个文件中，我们定义了一个 `InitializeUserController` 函数，它使用 `wire.Build` 来声明依赖关系。`NewUserRepository` 和 `NewUserController` 函数需要被定义在对应的包中，并返回对应的实例。

### 3. 定义构造函数
在 `repository` 和 `controller` 包中，分别定义构造函数：

**repository/user_repository.go**
```go
package repository

// ... (其他代码保持不变)

func NewUserRepository() *UserRepository {
	return &UserRepository{}
}
```

**controller/user_controller.go**
```go
package controller

// ... (其他代码保持不变)

func NewUserController(users *repository.UserRepository) *UserController {
	return &UserController{users: users}
}
```

### 4. 生成 Wire 代码
在终端运行以下命令生成 `wire_gen.go` 文件：

```sh
wire
```

### 5. 使用生成的代码
现在你可以在 `main.go` 中使用 `InitializeUserController` 函数来获取 `UserController` 的实例了：

```go
package main

import "fmt"

func main() {
	userController := InitializeUserController()
	user := userController.Show("1")
	fmt.Printf("User: %+v\n", user)
}
```

通过使用 `wire`，你可以减少手动编写依赖注入代码的工作量，同时保持代码的清晰和可维护性。
