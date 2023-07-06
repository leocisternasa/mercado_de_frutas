const express = require("express")
const exphbs = require("express-handlebars")
const app = express()
const PORT = 3000

//midelware

app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use("/bootstrapJs", express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/assets", express.static(__dirname + "/assets"))

app.set('view engine', 'handlebars')

const handlebars = exphbs.create({
    layoutsDir: __dirname + '/views',
    partialsDir: __dirname + '/views/partials'
}) 

app.engine('handlebars', handlebars.engine) 

app.get('/', (req, res)=>{
    res.render('home', {
        frutas:['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate']
    })
})

app.listen(PORT, ()=>console.log(`Escuchando en el puerto ${PORT}`))