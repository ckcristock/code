//////////////////// 2️⃣ Construir la imagen docker /////////////////////

Desde el root del proyecto:

docker build -t ateneo-angular .


///////////////////// 3️⃣ Ejecutarlo /////////////////////
docker run -p 4200:4200 ateneo-angular


Abres:

http://localhost:4200