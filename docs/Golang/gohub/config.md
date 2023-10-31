# modify config for strong type hints
```go
package config

import env "bpm/pkg/config"

type Person struct {
	Name    string
	Age     int
	Address *Address
}

func NewPerson() *Person {
	return &Person{
		Name:    "John Doe",
		Age:     env.GetInt("SERVICE_PORT", "9121"),
		Address: NewAddress(),
	}
}






package config

type Address struct {
	Street  string
	City    string
	ZipCode string
}

func NewAddress() *Address {
	return &Address{
		Street:  "123 Main St",
		City:    "Anytown",
		ZipCode: "12345",
	}
}
```