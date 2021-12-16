'use strict';


function renderGallery() {
    const images = getImgs();
    var strHtmls = images.map((img) => {
        return `<div class="img-container"> <img src="${img.url}" data-imgId="${img.id}" class="gallery-img" onclick="onSelectImg(${img.id})"/> </div>`
    })
    document.querySelector('.gallery').innerHTML = strHtmls.join('');

}


function onSelectImg(imgId) {
    const elMemeGen = document.querySelector('.meme-generator')
    elMemeGen.style.display = 'flex';
    const elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'none';
    setMemeImg(imgId);
    renderMeme();


}
function onDisplayGallery() {
    const elMemeGen = document.querySelector('.meme-generator')
    elMemeGen.style.display = 'none';
    const elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'grid';


    // console.log ('displaying gallery');
    // var hiddenEls = document.querySelectorAll('.hide')
    // console.log (hiddenEls)
    // hiddenEls.forEach((element) => { 

    //     element.setAttribute []

    // });



}


function onToggleMenu(){
    document.body.classList.toggle('menu-open');
}
