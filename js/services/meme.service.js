'use strict';

// **GLOBALS**//

var gElCanvasHeight;
var gElCanvasWidth;



const gKeyWordCountMap = {
    'funny': 0,
    'cat': 0,
    'baby': 0,
    'dog': 0,
    'politics': 0,
    'sports': 0,
    'film': 0,
    'tv':0,
}

const gImgs = [
    {
        id: 1,
        url: './img/square.images/1.jpg',
        keywords: ['funny', 'politics']
    },
    {
        id: 2,
        url: './img/square.images/2.jpg',
        keywords: ['dog']
    },
    {
        id: 3,
        url: './img/square.images/3.jpg',
        keywords: ['dog', 'baby']
    },
    {
        id: 4,
        url: './img/square.images/4.jpg',
        keywords: ['cat','funny']
    },
    {
        id: 5,
        url: './img/square.images/5.jpg',
        keywords: ['funny', 'baby']
    },
    {
        id: 6,
        url: './img/square.images/6.jpg',
        keywords: ['funny','film']
    },
      {
        id: 7,
        url: './img/square.images/7.jpg',
        keywords: ['funny', 'baby']
    },
    {
        id: 8,
        url: './img/square.images/8.jpg',
        keywords: ['funny', 'film']
    },
    {
        id: 9,
        url: './img/square.images/9.jpg',
        keywords: ['funny', 'baby']
    },
    {
        id: 10,
        url: './img/square.images/10.jpg',
        keywords: ['politics']
    },
    {
        id: 11,
        url: './img/square.images/11.jpg',
        keywords: ['funny', 'sports']
    },
    {
        id: 12,
        url: './img/square.images/12.jpg',
        keywords: ['funny', 'tv']
    },
    {
        id: 13,
        url: './img/square.images/13.jpg',
        keywords: ['film']
    },
    {
        id: 14,
        url: './img/square.images/14.jpg',
        keywords: ['film']
    },
    {
        id: 15,
        url: './img/square.images/15.jpg',
        keywords: ['film']
    },
    {
        id: 16,
        url: './img/square.images/16.jpg',
        keywords: ['funny', 'film']
    },
    {
        id: 17,
        url: './img/square.images/17.jpg',
        keywords: ['funny', 'politics']
    },
    {
        id: 18,
        url: './img/square.images/18.jpg',
        keywords: ['film']
    },

]
const gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Make a meme!',
            font: 'impact',
            size: 90,
            align: 'center',
            color: 'white',
            pos:{
                x:0,
                y:50
            }
        },
        {
            txt: '',
            size: 60,
            font: 'impact',
            align: 'center',
            color: 'white',
            pos:{
                x:0,
                y:300,
                // y: (gElCanvasHeight/2)
            }
        },
        {
            txt: '',
            size: 60,
            align: 'center',
            font: 'impact',
            color: 'white',
            pos:{
                x:0,
                y:450
                // y: gElCanvasHeight-50
            }
        }

    ]
}


// **FUNCTIONS**//

function getMeme() {
    return gMeme
}
function getImg() {
    const memeImg = gImgs.find(img => img.id === gMeme.selectedImgId)
    return memeImg
}
function getImgs() {
    return gImgs
}
function getMemeTxtLines() {
    return gMeme.lines
}
function getCurrSelectedLine(){
    return gMeme.lines[gMeme.selectedLineIdx]
}
function getCurrSelectedLineIdx(){
    return gMeme.selectedLineIdx
}
function setMemeImg(selectedImgId) {
    gMeme.selectedImgId = selectedImgId
}

function updateMemeTxtLine(lineSetting, value) {
    if (lineSetting === 'size') {
        gMeme.lines[gMeme.selectedLineIdx][lineSetting] += value
    } else {
        gMeme.lines[gMeme.selectedLineIdx][lineSetting] = value
    }
}
function updateSelectedLine(gCurrLineIdx) {
    gMeme.selectedLineIdx = gCurrLineIdx
}
 
// function setCanvasSizes(elCanvas){
//     gElCanvasHeight = elCanvas.height
//     gElCanvasWidth = elCanvas.width
// }

// function setTextLinesPos(){

// }
