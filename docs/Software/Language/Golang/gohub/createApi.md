# Creete API FLOW

## 


```bash
# 1. migration

go rum main.go make migration add_users_table

  # 1.1 fix struct content and name in migration file

go run main.go migrate up

# 2. model

go run main.go make model user

  # 2.1 fix struct content and import package for util (just resave it and it will be ok)

# 3. request 

go run main.go make request user

  # 3.1 fix struct content and edit rules and messages

# 4. policy

go run main.go make policy user

# 5. apicontroller

go run main.go make apicontroller v1/user

    # 5.1 add model struct in controller
    # 5.2 修正 Valdate func 回傳參數只有一個的問題
    # 5.3 Add Field Name

# 6. factory

go run main.go make factory user

# 7. seeder 

go run main.go make seeder user


# 8. route

  # 8.1 add route in route/api.go


```