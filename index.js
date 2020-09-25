const express = require('express');

const app = express();

// listen to port 3000
const { PORT = 3000 } = process.env;

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public/static')))

const {usersRouter} = require('./routes/users.js')
const {cardsRouter} = require('./routes/cards.js')

app.use('/', usersRouter)

app.use('/', cardsRouter)

app.use(function (req, res) {
  res.status(404).send({ message : "Requested Resource Not Found" });
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
})
