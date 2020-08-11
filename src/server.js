const { pageLanding, pageStudy, pageGiveClasses} = require('./pages')
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

const { saveClasses} = require("./pages")


server.use(express.static("public"))
.use(express.urlencoded({ extended: true}))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
