# Contador Microfrontend (MFE Counter)

Esta es una app basada en `microfrontends` desarrollada mediante paquetes federados creados con `Webpack` ( [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/) ). Cada modulo remoto está desarrollado con [React](https://reactjs.org/) y [typescript](https://www.typescriptlang.org/). Cada proyecto cuenta con `prettier` y `husky` como linters y git hook para formatear el código antes de cada commit y los estilos fueron empleados con [Sass](https://sass-lang.com/).

## Estructura
El punto de partida de la aplicación es el proyecto `host-mfe` el cuál es el contenedor principal en donde viven las diferentes apps remotas (siguiendo el concepto de microfrontend). 

La app remota `button-mfe` contiene 2 botones que interactuan con un sistema de estado global basado en `React Context`. Este estado global es exportado de manera federada mediante webpack y es importado tanto en el contenedor principal como en la segunda app remota.

La app remota `result-mfe` contiene un span que muestra el contenido del estado global almacenado mediante `React Context` en la app remota `button-mfe` logrando así una comunicación entre las 3 apps que conforman este proyecto de microforntend.

## Funcionalidad
El objetivo principal de este proyecto es el de aumentar un contador a medida que los usuarios interactuan con un botón dentro del aplicativo y también de resetear dicha cuenta al interactuar con el botón correspondiente para tal fin.

![Imagen de ejemplo](/assets/counter.gif)

## Puesta en marcha
Para realizar la puesta en marcha de esta aplicación tenemos que realizar un par pasos para que todo pueda funcionar correctamente.

### Paso 1.
En una terminal posicionarse sobre el directorio de la app `result-mfe`.
```sh
cd result-mfe # Asumiendo que estamos en el directorio raíz del proyecto
```
Instalar las dependencias de ese proyecto con el comando  
```sh
npm i
```  
y por ultimo iniciar la app con 
```sh
npm start
```

### Paso 2.
En otra terminal diferente a la del paso anterior posicionarse sobre el directorio de la app `button-mfe`.
```sh
cd button-mfe # Asumiendo que estamos en el directorio raíz del proyecto
```
Instalar las dependencias de ese proyecto con el comando  
```sh
npm i
```  
y por ultimo iniciar la app con 
```sh
npm start
```

### Paso 3. 
En otra terminal diferente a la del paso anterior posicionarse sobre el directorio de la app `host-mfe`.
```sh
cd button-mfe # Asumiendo que estamos en el directorio raíz del proyecto
```
Instalar las dependencias de ese proyecto con el comando  
```sh
npm i
```  
y por ultimo iniciar la app con 
```sh
npm start
```

Al terminar de ejecutar los procesos de los 3 pasos, debería abrirse una ventana de su navegador por defecto de manera automática con la app lista para operar. En este momento usted puede interactuar con la app al dar click en los botones `Clik me!` o `Clear`. En caso de que no se abra de manera automática una ventana de su navegador pruebe accediendo manualmente a esta [dirección](http://localhost:3000) en su navegador. 

### Paso 4.
Disfrute desestresandose! al aumentar nuestro contador. Podría intentar aumentar el conteo con su música favorita de fondo 😀🕺💃