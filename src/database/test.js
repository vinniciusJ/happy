const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    
   /*await saveOrphanage(db, {
        name: 'Lar das meninas',
        about: 'Presta assistência a crianças de 06 à 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        images: [
            '/images/home.jpg',
            '/images/kids1.jpg',
            '/images/kids2.jpg',
            '/images/kids3.jpg',
            '/images/kids4.jpg',
            '/images/kids5.jpg',
            '/images/kids6.jpg',
        ],
        lat: '-24.944796',
        lng: '-54.103673',
        whatsapp: '45988088669',
        instructions: 'Venha como se sentir a vontade de traga muito amor e paciência para dar.',
        opening_hours: 'Horário de visitadas Das 18h até 8h',
        open_on_weekends: '1'
    })*/
    
    
    // deletar dado da tabela

    //await db.run(`DELETE FROM orphanages WHERE id="11"`)

    const selectedOrphanages = await db.all('SELECT * FROM orphanages')
    
    console.log(selectedOrphanages)
})