const proffys = [
    {name: 'Paulo Henrique',
     avatar: "https://avatars1.githubusercontent.com/u/47150535?s=460&v=4" ,
     whatsapp: '41999927132',
     bio : 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
     subject : 'Química', 
     cost : '60', 
     weekday: [
         0
     ], 
     time_from: [720] , 
     time_to:[1220] }
]

const express = require('express')
const server = express()


function pageLanding(req, res){
    return res.sendFile(__dirname + '/views/index.html')
}

function pageStudy(req, res) {
    return res.sendFile(__dirname + '/views/study.html')
}

function pageGiveClasses(req, res) {
    return res.sendFile(__dirname + '/views/give-classes.html')
}
server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)
