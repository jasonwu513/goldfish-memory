# Vaultwarden

Vaultwarden is a password manager which is a fork of Bitwarden_rs. It is a server application that can be used to store and manage passwords and other sensitive information. It is a self-hosted password manager that allows you to store and manage your passwords securely.

docker-compose.yml
```yaml
version: "3"
services:
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: vaultwarden
    restart: unless-stopped
    ports:
     - 9445:80 #map any custom port to use (replace 9445 not 80)
    volumes:
     - ./bitwarden:/data:rw
    environment:
#     - ROCKET_TLS={certs="/ssl/certs/certs.pem",key="/ssl/private/key.pem"}  // Environment variable is specific to the Rocket web server
     - ADMIN_TOKEN=${ADMIN_TOKEN}
     - WEBSOCKET_ENABLED=true
     - SIGNUPS_ALLOWED=false
     - SMTP_HOST=${SMTP_HOST}
     - SMTP_FROM=${SMTP_FROM}
     - SMTP_PORT=${SMTP_PORT}
     - SMTP_SSL=${SMTP_SSL}
     - SMTP_USERNAME=${SMTP_USERNAME}
     - SMTP_PASSWORD=${SMTP_PASSWORD}
     - DOMAIN=${DOMAIN}

#uncomment below network part if you are using Nginx Proxy Manager, or you can remove the same
#networks:
#  default:
#    external:
#      name: nginx-proxy-network
```