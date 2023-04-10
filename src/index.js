const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));

// Configurar el motor de vistas de Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'Partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ventas', (req, res) => {
  // Ejemplo de objetos de venta
  const ventas = [
    { id: 1, producto: 'Camisa', precio: 30 },
    { id: 2, producto: 'Pantalón', precio: 50 },
    { id: 3, producto: 'Zapatos', precio: 80 },
  ];

  // Renderizar la vista de ventas y pasar los objetos de venta como parámetros
  res.render('ventas', { ventas });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})