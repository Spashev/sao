# SAO-Laravel

## Установка

-   `composer install`
-   `npm install`
-   `copy .env.example .env`
-   `php artisan key:generate`
-   Создать базу
-   Прописать настройки `.env`:
    -   `DB_CONNECTION`
    -   `SANCTUM_STATEFUL_DOMAINS` (обязательно указать порт, если используется)
-   `php artisan migrate --seed`
