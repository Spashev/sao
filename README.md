# SAO
Docker-compose for Laravel, with postgresql, reddis, nginx and php-fpm

# Installation
#### To get started, the following steps needs to be taken:
+ Clone the repo.
+ `cd sao` to the project directory.
+ `cp .env.example .env` to use env config file
+ Run `docker-compose up -d` to start the containers.
+ In `sao-php` container install all dependencies with composer `composer install`
+ In `sao-php` container need start migrations and seeds `php artisan migrate --seed`
+ Visit http://localhost to see your Laravel application.
+ Try to connect 127.0.0.1:5432 to access Postgres
+ After starting, note that one directory and one file will be created with name *postgres* and file *data*, this files are Database archives

# Usage:
+ `docker-compose up -d` to start all containers
+ `docker-compose down` to stop all containers
+ If you need to restart after modifying *docker-compose.yml* restart with `docker-compose down` and `docker-compose up -d`

# Images
+ redis:alpine
+ postgres
+ nginx:alpine
+ php7.4-fpm

### Volumes:
- nginx
- php-local.ini
- data(postgres)

# Troubleshooting
## If you need to restart after modifying *Dockerfile* and have Troubleshooting:
+ Verify all containers running: `docker ps -a`
+ Stop all containers and remove: `docker stop $(docker ps -a -q)` and `docker rm $(docker ps -a -q)`
+ Try to start again `docker-compose up -d`


