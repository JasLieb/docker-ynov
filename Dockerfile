FROM ubuntu:20.04
FROM nginx
FROM postgres:9.4

COPY ./www/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 80/tcp 

EXPOSE 5432
EXPOSE 5432/tcp 

EXPOSE 5433
EXPOSE 5433/tcp 