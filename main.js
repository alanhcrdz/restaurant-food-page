


let indexOfImages = 0,
    images = document.querySelectorAll('#slider .intro'),
    time = 10000,
    max = images.length;



setInterval(() => {
    nextSlide()
}, time);

function nextSlide() {
    images[indexOfImages]
        .classList.remove('selected')
    indexOfImages++


    if (indexOfImages >= max) {
        indexOfImages = 0
    }
    
    //adicionar uma classe da imagem, através do índice
    images[indexOfImages]
        .classList.add('selected');
    //console.log(indexOfImages)
}


function prevSlide() {
    images[indexOfImages]
        .classList.remove('selected')
    indexOfImages--

    if (indexOfImages < 0) {
        indexOfImages = 2;
    }

    //adicionar uma classe da imagem, através do índice
    images[indexOfImages]
        .classList.add('selected');

}

// code for slide items of menu

let items = document.querySelectorAll('.item'),
    indexOfItems = 0,
    maxItem = items.length;


function nextItem() {
    items[indexOfItems]
        .classList.remove('selected')
    indexOfItems++;

    if (indexOfItems >= maxItem) {
        indexOfItems = 0;
    }

    items[indexOfItems]
        .classList.add('selected');

}
function prevItem() {
    items[indexOfItems]
        .classList.remove('selected')
    indexOfItems--


    if (indexOfItems < 0) {
        indexOfItems = 2;
    }

    //adicionar uma classe da imagem, através do índice
    items[indexOfItems]
        .classList.add('selected');

}





