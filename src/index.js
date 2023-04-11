const express = require('express')
const { engine } = require('express-handlebars')

const router = require('./routes')

const path = require('path')
const app = express()
const port = 3000

// Static public directory definition
app.use(express.static(path.join(__dirname, 'public')))
app.use('/materialize', express.static(path.join(__dirname, 'materialize')))


// Handlebars engine configuration
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'Partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})