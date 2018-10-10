const express = require('express')
const graphQLHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8000

// allows cross origin requests
app.use(cors()) 
app.use(express.static(path.join(__dirname, "client", "build")))
// app.use(express.json())
// const morgan = require('morgan')
// app.use(morgan('dev'))
// app.use('/home', require('./routes/songRouter'))
// app.use('/home', require('./routes/artistRouter'))

mongoose.connect(`mongodb://${process.env.USER}:${process.env.WORD}@ds129233.mlab.com:29233/music-stream`, {useNewUrlParser: true}, () => console.log('..now connected to "music-stream-full-steack-db".'))
    .catch(err => console.log(err))

app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true
}))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || PORT, () => {
    console.log('..server is now listening on port 8000.')
})