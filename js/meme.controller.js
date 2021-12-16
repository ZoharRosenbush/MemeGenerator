'use strict';
// ***GLOBALS***//

var gElCanvas;
var gCtx;
var gCurrLineIdx = 0;

// **FUNCTIONS**//


function onInit() {
    gElCanvas = document.getElementById('meme-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderMeme()
    renderGallery();
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme();
    })

    // setCanvasSizesInfo()
    // renderCanvas();
}

// function setCanvasSizesInfo() {
//     setCanvasSizes(gElCanvas)

// }

function onSetLineTxt(elInput) {
    updateMemeTxtLine('txt', elInput.value)
    renderMeme()
}

function onChangeColor(elInput) {
    updateMemeTxtLine('color', elInput.value)
    renderMeme()

}
function onChangeFontSize(value) {
    updateMemeTxtLine('size', value)
    renderMeme();

}
function onChangeFont(value) {
    updateMemeTxtLine('font', value);
    renderMeme();



}

function onSwitchLine() {
    if (gCurrLineIdx < 2) { //// DO this check dynamicly
        gCurrLineIdx += 1

    } else {
        gCurrLineIdx = 0
    }
    const elTxtInput = document.querySelector('[name="txt-line"]')
    elTxtInput.value = ''

    updateSelectedLine(gCurrLineIdx)
    renderMeme()
    // renderCanvas();
}

// function renderCanvas() {
//     drawRect()


// }
function clearCanvas() {

}

function renderMeme() {
    const memeTxtLines = getMemeTxtLines()
    const memeImgData = getImg()
    const memeImg = new Image()
    memeImg.src = memeImgData.url;
    memeImg.onload = () => {
        gCtx.drawImage(memeImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(memeTxtLines)
        // renderCanvas()
        drawRect()
    }
}

function drawText(txtLines) {
    txtLines.forEach((txtLine) => {
        if (txtLine.txt !== '') {
            gCtx.textBaseline = 'middle';
            gCtx.textAlign = 'center';

            gCtx.fillStyle = `${txtLine.color}`;
            gCtx.strokeStyle = 'black';
            gCtx.lineWidth = 4

            gCtx.font = `${txtLine.size}px ${txtLine.font}`;
            gCtx.fillText(txtLine.txt, gElCanvas.width / 2, txtLine.pos.y, gElCanvas.width - 50);
            gCtx.strokeText(txtLine.txt, gElCanvas.width / 2, txtLine.pos.y, gElCanvas.width - 50);
        }
    });

}
function drawRect() {
    const currSelectedLine = getCurrSelectedLine()
    gCtx.beginPath()
    gCtx.rect(0, currSelectedLine.pos.y - 50, gElCanvas.width, 100);
    gCtx.closePath()
    gCtx.lineWidth = 3
    gCtx.strokeStyle = 'white';
    gCtx.stroke();
}
function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
}


