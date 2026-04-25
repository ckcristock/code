/////////////// npm installations /////////////
npm i --legacy-peer-deps

npm list ng-apexcharts


rmdir /s /q node_modules
del package-lock.json
npm cache clean --force

npm install --save-dev gh-pages
npm run deploy


////////////// ateneo dev environment /////////////
ateneo:
{"npm":"8.19.4","node":"v16.20.2"}


///////// node version manager /////////////////////

nvm list

nvm use 16

///////////////////////////////////////////////////

//////////////// Ejecutar Compodoc (comando ideal) ////////////

Desde la raíz del proyecto:

npx @compodoc/compodoc -p tsconfig.app.json -s


Si no existe tsconfig.app.json, usa:

npx @compodoc/compodoc -p tsconfig.json -s

luego: http://localhost:8080/ - Panel izquierdo - Rutas

//////////////////////////////////////////////////////