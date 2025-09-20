const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3001;

// Gunakan EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Third-party Middleware
app.use(expressLayouts);
app.set('layout', 'layout/main-layout');

// Data dummy
const mahasiswa = [
  { nama: 'Ade', email: 'ade@gmail.com' },
  { nama: 'Asep', email: 'asep@gmail.com' },
  { nama: 'Agus', email: 'agus@gmail.com' },
];

// Routing
app.get('/', (req, res) => {
  res.render('index', {
    nama: 'Dilla',
    title: 'Halaman Home',
    mahasiswa,
  });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Halaman About' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Halaman Contact' });
});

// Middleware 404
app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
