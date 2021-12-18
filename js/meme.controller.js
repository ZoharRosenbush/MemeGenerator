'use strict';
// ***GLOBALS***//

var gElCanvas;
var gCtx;
var gCurrLineIdx = 0;

// **FUNCTIONS**//


function initCanvas() {
    gElCanvas = document.getElementById('meme-canvas');
    gCtx = gElCanvas.getContext('2d');
    setCanvasSizes(gElCanvas)
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme();
    })
}

function onSetLineTxt(elInput) {
    updateMemeTxtLine('txt', elInput.value)
    renderMeme()
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    console.log('the img', img)
}

function loadImageFromInput(ev, onImageReady) {
    var reader = new FileReader()

    reader.onload = (event) => {
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
    }
    reader.readAsDataURL(ev.target.files[0])
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

function onTextLineDown() {
    updateMemeTxtLine('pos', 10)
    renderMeme()
}

function onTextLineUp() {
    updateMemeTxtLine('pos', -10)
    renderMeme()
}

function onSwitchLine() {
    const txtLines = getMemeTxtLines();
    if (gCurrLineIdx < txtLines.length - 1) {
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

function onAddLine() {
    createNewLine()
    const newLineIdx = getMemeTxtLines().length - 1
    gCurrLineIdx = newLineIdx
    updateSelectedLine(gCurrLineIdx)
    drawRect()
    renderMeme()
}

function onRemoveLine() {
    removeSelectedLine()
    renderMeme()
}

function onAlignLeft() {
    updateMemeTxtLine('align', 'left')
    renderMeme();

}

function onAlignRight() {
    updateMemeTxtLine('align', 'right')
    renderMeme();

}

function onAlignCenter() {
    updateMemeTxtLine('align', 'center')
    renderMeme();

}

function onCanvasClick(ev) {
    /// THIS FUNCTION CHECKS IF THE USER PRESSED INSIDE THE LOCATION SPECRUM OF ONE OF THE TEXT LINES.
    const Xcoord = ev.offsetX
    const Ycoord = ev.offsetY
    const memeTxtLines = getMemeTxtLines()
    const foundLineIdx = memeTxtLines.findIndex((line) => {
        if (line.align === 'left') {
            return (Xcoord >= line.pos.x && Xcoord <= line.pos.x + line.width &&
                Ycoord >= line.pos.y - (line.height / 2) && Ycoord <= line.pos.y + (line.height / 2))
        } else if (line.align === 'center') {
            return (Xcoord <= line.pos.x + (line.width / 2) && Xcoord >= line.pos.x - (line.width / 2) &&
                Ycoord >= line.pos.y - (line.height / 2) && Ycoord <= line.pos.y + (line.height / 2))
        } else if (line.align === 'right') {
            return (Xcoord <= line.pos.x && Xcoord >= line.pos.x + line.width &&
                Ycoord >= line.pos.y - (line.height / 2) && Ycoord <= line.pos.y + (line.height / 2))
        }
    })
    if (foundLineIdx > -1) {
        gCurrLineIdx = foundLineIdx
        updateSelectedLine(gCurrLineIdx)
        renderMeme()
        document.querySelector('input').focus()
    }
}

function renderMeme() {
    // resizeCanvas()
    const memeTxtLines = getMemeTxtLines()
    const memeImgData = getImg()
    const memeImg = new Image()
    memeImg.src = memeImgData.url;
    memeImg.onload = () => {
        gCtx.drawImage(memeImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(memeTxtLines)
        drawRect()
    }
}

function drawText(txtLines) {
    txtLines.forEach((txtLine) => {
        if (txtLine.txt !== '') {
            gCtx.textBaseline = 'middle';
            gCtx.textAlign = `${txtLine.align}`;
            gCtx.fillStyle = `${txtLine.color}`;
            gCtx.strokeStyle = 'black';
            gCtx.lineWidth = 4
            const txtMeasures = gCtx.measureText(`${txtLine.txt}`)
            txtLine.width = txtMeasures.width
            txtLine.height = txtMeasures.actualBoundingBoxAscent + txtMeasures.actualBoundingBoxDescent
            gCtx.font = `${txtLine.size}px ${txtLine.font}`;
            gCtx.fillText(txtLine.txt, txtLine.pos.x, txtLine.pos.y, gElCanvas.width - 50);
            gCtx.strokeText(txtLine.txt, txtLine.pos.x, txtLine.pos.y, gElCanvas.width - 50);
        }
    });
}

function drawRect() {
    const selectedLine = getCurrSelectedLine()
    const selectedLineIdx = getCurrSelectedLineIdx()
    gCtx.beginPath()
    gCtx.rect(0, selectedLine.pos.y - 50, gElCanvas.width, 100);
    gCtx.closePath()
    gCtx.lineWidth = 3
    if (selectedLineIdx > 2) gCtx.strokeStyle = 'magenta';
    else gCtx.strokeStyle = 'white';
    gCtx.stroke();
}

function resizeCanvas() {
    var elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
    setCanvasSizes(gElCanvas)
}


