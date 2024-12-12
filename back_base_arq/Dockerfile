# Usar la imagen oficial de Node.js
FROM node:20

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto en el que la app escuchará
EXPOSE 3030

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]
