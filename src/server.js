require('dotenv').config(); // Carga las variables de entorno
const express = require('express');
const app = require('./app');
const connectDatabase = require('./database');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDatabase();

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
