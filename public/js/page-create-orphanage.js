// create map
const map = L.map('mapid').setView([-23.6368927, -46.5191467], 15);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

// create and add marker

// L.marker([-23.6368927,-46.5191467], {icon})
// .addTo(map)


// create and add marker 

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
})


// add field of photos

function addFieldPhoto() {
    // pegar container de fotos #images
    const container = document.querySelector('#images');
    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o input anterior esta vazio
    const input = newFieldContainer.children[0];
    if (input.value == '') {
        return
    }
    //limpar o campo antes de adicionar
    input.value = '';
    // adicionar o clone ao container de #images

    if (fieldsContainer.length <= 5) {
        container.appendChild(newFieldContainer)
    } else {
        // alert('Você atingiu o imite máximo de fotos!')
    }
}

function removeFieldPhoto(e) {
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length != 1) {
        e.parentNode.remove();
    }

    e.parentNode.children[0].value = '';    

}


// select yes or no

function onWeekEnd(event) {
    // retirar a class .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })

    // pegar o botao clicado  // colorcar a class .active
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o input hidden   // verificar sim ou nao

    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value;
    
}   

// function validate(event) {

//     // validar se lat e lng estao preenchidos
//     event.preventDefault();
// }