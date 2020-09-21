const express = require('express');
// listen to port 3000
const { PORT = 3000 } = process.env;

const app = express();

const path = require('path')

app.use(express.static(path.join(__dirname + '/public')))

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
    console.log(`App listening at port ${PORT}`)
})
