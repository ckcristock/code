// create-structure.bat example
@echo off
cd src/app

mkdir core
mkdir core\guards
mkdir core\interceptors
mkdir core\services

mkdir shared
mkdir shared\components
mkdir shared\directives
mkdir shared\pipes

mkdir pages
mkdir pages\dashboard
mkdir pages\inventory

echo Estructura creada correctamente.
pause