console.log("Hello demo!");

var moment = require('moment');

var date = moment().format('LL');
console.log(date);

// Muestra la fecha en la consola del navegador
document.getElementById("date").textContent = date;
