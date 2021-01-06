const express = require('express');

const app = express();
// calling express like a function generates a running express application


app.get('/', (req, res) => {
    res.send({ black: 'adder' })
})
// route handler

const PORT = process.env.PORT || 5000
// if there is an environment variable that has already been defined, use it. If not, use 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))