const coords = [
    +(document.querySelector('[data-lat]').dataset.lat),
    +(document.querySelector('[data-lng]').dataset.lng)
]


const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView(coords, 16)

const icon = L.icon({
    iconUrl: 'images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [180, 2]
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)



L.marker(coords, { icon }).addTo(map)




// Voltando

document.querySelector('.back').addEventListener('click', () => history.back())

// Image Galery

const galeryButtons = [...document.querySelectorAll('.images button')]


const selectImage = event => {
    const selectedButton = event.currentTarget
    const imageContainer = document.querySelector('.orphanage-details > img')

    const [ selectedImage ] = selectedButton.children

    selectedButton.classList.add('active')

    galeryButtons.forEach(button => button != selectedButton && button.classList.remove('active'))

    imageContainer.src = selectedImage.src
}

galeryButtons.forEach(imageButton => imageButton.addEventListener('click', selectImage))

