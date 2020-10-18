const saveOrphanage = (database, orphanage) => {
    return database.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about, 
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) values (
            "${orphanage.lat}",
            "${orphanage.lng}",
            "${orphanage.name}",
            "${orphanage.about}",
            "${orphanage.whatsapp}",
            "${orphanage.images}",
            "${orphanage.instructions}",
            "${orphanage.opening_hours}",
            "${orphanage.open_on_weekends}"
        );
    `)
}

module.exports = saveOrphanage