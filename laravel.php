<?php
///////////////////////////// clear ///////////////////////////

php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan event:clear
php artisan optimize:clear

# Re-crear cachés (uso recomendado en producción)
php artisan config:cache
php artisan route:cache
php artisan view:cache


/////////////////////////////////////////////////////