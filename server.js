const express = require('express');
const app = express();

app.get('/run-script', (req, res) => {
  // Coloca aquí el código que deseas ejecutar y enviar como respuesta
  console.log("Hello demo!");
  var moment = require('moment');
  var date = moment().format('LL');
  res.send(date); // Envía la fecha como respuesta
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
