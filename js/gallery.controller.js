'use strict';


function renderGallery() {
    const images = getImgsForDisplay();
    var strHtmls = images.map((img) => {
        return `<div class="img-container"> <img src="${img.url}" data-imgId="${img.id}" class="gallery-img" onclick="onSelectImg(${img.id})"/> </div>`
    })
    document.querySelector('.gallery').innerHTML = strHtmls.join('');
}

function onSelectImg(imgId) {
    document.querySelector('.meme-generator').style.display = 'flex';
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.keywords-filter').style.display = 'none';
    setMemeImg(imgId);
    resizeCanvas()
    renderMeme();
}

function onDisplayGallery() {
    document.querySelector('.meme-generator').style.display = 'none';
    document.querySelector('.gallery').style.display = 'grid';
    document.querySelector('.keywords-filter').style.display = 'flex';
}

function onToggleMenu() {
    document.body.classList.toggle('menu-open');
}
