const map = L.map('mapid').setView([-24.944796, -54.103673], 16)

const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

let marker

map.on('click', event => {
    const { lat: latitude, lng: longitude} = event.latlng

    document.querySelector('[name=lat]').value = latitude
    document.querySelector('[name=lng]').value = longitude

    marker && map.removeLayer(marker)

    marker = L.marker([latitude, longitude], { icon }).addTo(map)
})


const newImageButton = document.querySelector('#addImageButton')
const selectButtons = [...document.querySelector('.button-select').children]

const addPhotoField = () => {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')

    const newFieldContainer = fieldsContainer[(fieldsContainer.length - 1)].cloneNode(true)

    const input = newFieldContainer.children[0]

    if(input.value == '') return

    input.value = ''
    container.appendChild(newFieldContainer)
}

const deleteField = event => {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = ''
        
        return
    }
    
    span.parentNode.remove()
}

const toggleSelect = event => {
    const clickedButton = event.currentTarget

    selectButtons.forEach(button => button.classList.remove('active'))

    clickedButton.classList.add('active')
    
    const input = document.querySelector('#open_on_weekends')

    input.value = clickedButton.dataset.value
}

newImageButton.addEventListener('click', addPhotoField)

selectButtons.forEach(button => button.addEventListener('click', toggleSelect))

// Form
