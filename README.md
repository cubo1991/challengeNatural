# Api de Pokedex para el Challenge de Natural Tech House

Pequeña aplicación que consume datos de [PokeApi](https://pokeapi.co/) con un backend construido con Express que actúa como un BFF e interactúa con un frontend realizado con el framework de Javascript, Next.JS

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Ejecución](#ejecución)


## Instalación

1 - Clonar el repositorio por el método que más le guste

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/6c5c447c-601e-4d38-9a53-7adddb2b26f4)

2- Abrir el repositorio clonado con su editor de código preferido y abra el terminal integrado

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/7b0a1ef0-9451-4a42-8ea1-7c80db1d5da1)

Opcionalmente, puede abrir una consola de comandos en el directorio base del repositorio o en cualquier lado y dirigirse hasta la carpeta en cuestión.

3- Ya en el directorio base, escribir el comando **cd api** para entrar a carpeta del backend e instalar las dependencias del proyecto con el comando **npm install**

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/d15a7bd3-3238-4f93-bccc-1fb68306acc0)
![image](https://github.com/cubo1991/challengeNatural/assets/51756722/862090d3-7ef9-4421-893b-1ce9baed4820)

4- Una vez instalado todo, escriba **cd ..** para volver al directorio padre, y ahí ingresar al front con el comando **cd client** y luego  **npm install** para instalar todo el frontend

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/f8f1f91b-aca9-487d-a06c-21f26524ae82)


5- ¡Listo! Ya tiene todo para poder inicializarlo.


## Ejecución
1- Ya instalado, tiene que volver a la carpeta del backend (recuerde, desde el directorio base debe introducir el comando **cd api**).

2- Ahí introduzca el comando **npm start** y el servidor estará funcionando. Puede probar ingresando a http://localhost:3001/apiDoc/, y además vera los endpoints implementados en el proyecto usando Swagger.

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/ae8edb93-2583-4d57-b414-b9ddde9f94e8)

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/ba50edc0-55e7-4105-93aa-1e2d59f64078)



3- Abra una nueva consola sin cerrar la anterior y navegue hasta el directorio client.

4- Ahí introduzca el comando **npm run build** 

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/b1346388-18c2-4d2b-8b45-efffb2d054e1)


5- Al finalizar, introduzca el comando **npm start** e ingrese a http://localhost:3000. Ya podrá hacer uso de la appweb.

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/d5dd666e-c75a-4d49-9c57-336e249caad7)

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/7d124fc9-b267-4eaa-b7a0-c57d685a083d)




### Con Docker 

Antes que nada, asegurese de tenerlo instalado y funcionando en su equipo.

1- Tiene que volver a la carpeta del backend (recuerde, desde el directorio base debe introducir el comando **cd api**).
2- Ingrese el comando **docker build . -t pokedex-server:latest**

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/1070f75b-0824-4368-b370-c91b142f40dc)

3- Ingrese el comando **npm run start-docker-server** y listo, el server de la aplicación estará corriendo en el puerto 3001. También puede probar con http://localhost:3001/apiDoc/

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/346c6d93-34b9-45cf-b09f-f0eb7627bf73)

4- Vuelva a la carptea del frontend

5- Ingrese el comando **docker build . -t pokedex-front:latest**

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/98e0d3a3-92f0-4e4b-95cc-1ccd8183ed90)


6- Ingrese el comando **npm run start-docker-client** y va a tener funcionando tanto el lado del cliente como el del server.

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/ad5af5f7-3b80-43a4-84a4-4fc819292cfe)


## Testeo

La aplicación contiene test unitarios.

Para ejecutarlos, ejecute **npm test** desde el directorio del server (api)

![image](https://github.com/cubo1991/challengeNatural/assets/51756722/8eaf1b48-5036-4752-8667-3d8740ad7dd2)





Contacto
Proporciona información de contacto para que otros desarrolladores puedan comunicarse contigo en caso de tener preguntas o comentarios sobre el proyecto.

Nombre: [Tu nombre]
Correo electrónico: [Tu correo electrónico]
GitHub: [Tu perfil de GitHub]
