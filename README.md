# docker-ynov
A project developped during Docker classes at Ynov Campus Toulouse

## Initiation

- Install Docker 
- Start nginx container with port 80
- Serve a static .html file
- [Optionaly work] Serve a static second .html file

### Elements added 

- `nginx.conf` nginx configuration
- `www/` static folder

## 1st TP

- Start postgres container with port 5432
- Start second postgres container with port 5433
- Create a table into the second postgres database and dump the db

- [Optionaly work] Encapsulate previous containers into a docker-compose .yml file

### Elements added 

- `dump.sql` second postgres database generated file
- [Optionaly work] `docker-compose.yml` docker compose file
- [Optionaly work] `db.env` postgres databases environnement files