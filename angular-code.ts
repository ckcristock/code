/////////////// npm installations /////////////
npm i --legacy-peer-deps

npm list ng-apexcharts


rmdir /s /q node_modules
del package-lock.json
npm cache clean --force

npm install --save-dev gh-pages
npm run deploy


//////////////