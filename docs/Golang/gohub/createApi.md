# Creete API FLOW

## 


```bash
# 1. migration

go rum main.go make migration add_users_table

# 2. request 

go run main.go make request user

# 3. policy

go run main.go make policy user

# 4. apicontroller

go run main.go make apicontroller v1/user

# 5. factory

go run main.go make factory user

# 6. seeder 

go run main.go make seeder user


```