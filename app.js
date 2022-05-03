const slider = document.getElementById('slider1');
let sliderItem = document.querySelectorAll('.itemSlider');
let sliderItemLast = sliderItem[sliderItem.length - 1];
const nav = document.querySelector('nav')


//Nav//
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('activeNav');


    } else {
        nav.classList.remove('activeNav');
    }
})

//Slider header//

slider.insertAdjacentElement('afterbegin', sliderItemLast)
setInterval(function () {
    next();
},10000)

function next() {
    let sliderItemFirst = document.querySelectorAll('.itemSlider')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = "all 1s"
    setTimeout(function () {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderItemFirst);
        slider.style.marginLeft = '-100%';

    }, 1000);
}



//Ver menu//

const verMenu = document.querySelectorAll('.verMenu')
const section1 = document.querySelector('.section1')
const body = document.querySelector('body')
const salir = document.querySelector('.salir')

for (let i = 0; i < 2; i++) {
    verMenu[i].addEventListener('click', function () {
        section1.style.display = 'flex';
        body.style.overflowY = 'hidden';
        salir.style.display = 'block';
    })
}



salir.addEventListener('click', function () {
    section1.style.display = '';
    body.style.overflowY = '';
    salir.style.display = 'none'
})

/*Galeria*/


const imagenes = document.querySelectorAll('.imgGaleria');
const imgBox = document.querySelector('.imgBox');
const imgFull = document.querySelector('.imgFull');
const salirGaleria = document.querySelector('.salirGaleria');
const btnR = document.querySelector('.R');
const btnL = document.querySelector('.L');
let j = 0;

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function () {
        imgBox.style.display = 'flex';
        imgFull.style.display = 'block';
        j = i + 1;
        imgFull.innerHTML = `<img src="img/galeria${j}.jpg" alt="">`
    })
}

salirGaleria.addEventListener('click', function () {
    imgBox.style.display = 'none';
})
btnR.addEventListener('click',nextImage);
btnL.addEventListener('click',prevImage)

function nextImage() {
    
    j+=1;
    if(j==13){
        j=1
    }
    imgFull.innerHTML = `<img src="img/galeria${j}.jpg" alt="">`
    
    
}

function prevImage() {
    
    j-=1;
    if(j<=0){
        j=12
    }
    
    imgFull.innerHTML = `<img src="img/galeria${j}.jpg" alt="">`
    
    
    
}
