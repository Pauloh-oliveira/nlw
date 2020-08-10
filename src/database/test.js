const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {

    proffyValue = {
        name: 'Paulo Henrique',
        avatar: "https://avatars1.githubusercontent.com/u/47150535?s=460&v=4" ,
        whatsapp: '4199999999',
        bio : 'Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.', 
    }

    classValue = {
        subject : 1, 
        cost : '60', 
    }

    classScheduleValues = [
        {
            weekday : 1,
            time_from: 720,
            time_to : 1220
        },

        {
            weekday : 0,
            time_from: 720,
            time_to : 1220
        }
    ]
        
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys =  await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* FROM proffys JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.* FROM class_schedule WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "720"
    `)

    console.log(selectClassesSchedules)
})