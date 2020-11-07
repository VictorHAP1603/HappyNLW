const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// get values of lat and lng from html
const marker = document.querySelector('.map-container span')

lat = marker.dataset.lat;
lng = marker.dataset.lng;

// create map 

const map = L.map('mapid', options).setView([lat, lng], 16);  

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


// add icon 
L.marker([lat, lng], {icon})
.addTo(map)



// img gallery
function selectImg(event) {
    const button = event.currentTarget

    // remover todas as classes active
    const buttons = document.querySelectorAll('.images button')
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    // selecionar a imagem clicada
    const img = button.children[0].getAttribute('src');
    
    //atualizar o container de imagem
    const imgContainer = document.querySelector('.orphanage-details > img').setAttribute('src', img);

    // adicionar a classe .active pra esse botao
    button.classList.add('active')
}
