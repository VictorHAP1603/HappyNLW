const database = require('./db.js')
const saveOrphanage = require('./saveOrphanage.js')

database.then(async (db) => {
    // inserir dados da tabela 
    await saveOrphanage(db , {
        lat : "-23.6276278",
        lng: "-46.5191467",
        name: "Lar Das Meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "11970521612",
        images: [

            "https://images.unsplash.com/photo-1597553161987-5993dc9da24e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            
            "https://images.unsplash.com/photo-1570662518230-e097e6620e12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "1"
    });

    // consultar dados
    //const selectOrphanges = await db.all("SELECT * FROM orphanages")
    //console.log(selectOrphanges)

    // consultar somente 1 orfanato, pelo id
})