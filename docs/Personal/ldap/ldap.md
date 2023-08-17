# 架設LDAP 練習環境


詢問gpt

```
docker run \
    -d \
    -p 389:389 \
    -p 636:636 \
    -v /usr/local/ldap:/usr/local/ldap \
    -v /data/openldap/ldap:/var/lib/ldap \
    -v /data/openldap/slapd.d:/etc/ldap/slapd.d \
    --env LDAP_ORGANISATION="imysh" \
    --env LDAP_DOMAIN="imysh.com" \
    --env LDAP_ADMIN_PASSWORD="123456" \
    --name openldap \
    --hostname openldap-host\
    --network bridge \
    osixia/openldap

docker run \
    -p 8081:80 \
    --privileged \
    --name phpldapadmin \
    --env PHPLDAPADMIN_HTTPS=false \
    --env PHPLDAPADMIN_LDAP_HOSTS=192.168.x.xxx  \
    --detach osixia/phpldapadmin

docker run --name keycloak_test -d -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=changeME quay.io/keycloak/keycloak:latest start-dev

加上 grafana 寫成 docker-compose file


```

base on gpt 回答並修改


```
version: "3"

services:
  openldap:
    image: osixia/openldap
    container_name: openldap
    environment:
      LDAP_ORGANISATION: "imysh"
      LDAP_DOMAIN: "imysh.com"
      LDAP_ADMIN_PASSWORD: "123456"
    ports:
      - "389:389"
      - "636:636"
    volumes:
      - "./data/usr/local/ldap:/usr/local/ldap"
      - "./data/openldap/ldap:/var/lib/ldap"
      - "./data/openldap/slapd.d:/etc/ldap/slapd.d"
    networks:
      - bridge

  phpldapadmin:
    image: osixia/phpldapadmin
    container_name: phpldapadmin
    environment:
      PHPLDAPADMIN_HTTPS: "false"
      PHPLDAPADMIN_LDAP_HOSTS: "openldap"
    ports:
      - "8081:80"
    privileged: true
    networks:
      - bridge

  # keycloak_test:
  #   image: quay.io/keycloak/keycloak:latest
  #   container_name: keycloak_test
  #   environment:
  #     KEYCLOAK_ADMIN: "admin"
  #     KEYCLOAK_ADMIN_PASSWORD: "changeME"
  #   ports:
  #     - "8080:8080"
  #   networks:
  #     - bridge
  #   command: start-dev

  # grafana:
  #   image: grafana/grafana:latest
  #   container_name: grafana
  #   ports:
  #     - "3000:3000"
  #   networks:
  #     - bridge

networks:
  bridge:
    driver: bridge

```


goto ip:8081
登入使用 cn=admin,dc=imysh,dc=com  /  123456