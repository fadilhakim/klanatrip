const express = require('express')
const app = express()


app.use(express.static(__dirname + '/public'));

app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine


const port = 3000

app.get('/', (req, res) => res.render('comingsoon'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))