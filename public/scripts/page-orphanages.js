const map = L.map('mapid').setView([-24.9447569, -54.10863], 16)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [180, 2]
})

// Orphanages

const orphanages = document.querySelectorAll('.orphanages span')

const addMarker = ({ id, name, lat, lng }) => {    
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`
        ${name}
        <a href="orphanage?id=${id}" class="choosed-orphanage">
            <img src="/images/arrow-white.svg"/>
        </a>`
    )    
    console.log(lat, lng)
    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

orphanages.forEach(orphanage => addMarker(orphanage.dataset))






