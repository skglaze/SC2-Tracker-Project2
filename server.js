const express = require('express')
const app = express()
const methodOverride = require('method-override')

const { userRouter } = require('./controllers/user.js')
const { opponentRouter } = require('./controllers/opponent.js')
const { mapRouter } = require('./controllers/map.js')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname + "/public"))

app.set('view engine', 'hbs')

app.use('/', userRouter)
app.use('/', opponentRouter)
app.use('/', mapRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
