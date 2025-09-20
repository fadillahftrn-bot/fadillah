// console.log('Listening is Listening on port ${port}..');
// });

const http = require('express');
const app = http();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Word!');
}
// res.send('Hello Word!');
// res.json ({
//     name: 'Dilla',
//     emaail : 23,
//     nohp : '087830617650'
// });
res.sendFile('./index.html', { root: __dirname });
);
app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
    //res.send('Hello Word About!');
});
app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname });
    //res.send('Hello Word Contact!');
});
app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`);
});
app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>test</h1>');
});