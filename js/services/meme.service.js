'use strict';

// **GLOBALS**//

var gElCanvasHeight;
var gElCanvasWidth;

var gFilterBy = 'all'

const gKeyWordCountMap = {
    //15 is the smallest value in order to match the font size.
    'all': 30,
    'funny': 15,
    'cat': 20,
    'baby': 15,
    'dog': 30,
    'politics': 15,
    'sports': 20,
    'film': 15,
    'tv': 15,
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
        keywords: ['cat', 'funny']
    },
    {
        id: 5,
        url: './img/square.images/5.jpg',
        keywords: ['funny', 'baby']
    },
    {
        id: 6,
        url: './img/square.images/6.jpg',
        keywords: ['funny', 'film']
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
            height: 0,
            width: 0,
            align: 'center',
            color: 'white',
            pos: {
                x: 0,
                y: 0
            }
        },
        {
            txt: '',
            size: 60,
            height: 0,
            width: 0,
            font: 'impact',
            align: 'center',
            color: 'white',
            pos: {
                x: 0,
                y: 0
            }
        },
        {
            txt: '',
            size: 60,
            height: 0,
            width: 0,
            align: 'center',
            font: 'impact',
            color: 'white',
            pos: {
                x: 0,
                y: 0
            }
        }

    ]
}


// **FUNCTIONS**//

function getKeywords() {
    return gKeyWordCountMap
}

function getKeywordCount(keyword) {
    return gKeyWordCountMap[keyword]
}

function increaseKeywordCount(keyword) {
    gKeyWordCountMap[keyword] += 2
}

function getMeme() {
    return gMeme
}

function getImg() {
    const memeImg = gImgs.find(img => img.id === gMeme.selectedImgId)
    return memeImg
}

function getImgsForDisplay() {
    if (gFilterBy === 'all') return gImgs
    const filteredImgs = gImgs.filter((img) => {
        return img.keywords.includes(`${gFilterBy}`)
    })
    return filteredImgs
}

function setFilter(keyword) {
    gFilterBy = keyword
}

function getMemeTxtLines() {
    return gMeme.lines
}

function getCurrSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getCurrSelectedLineIdx() {
    return gMeme.selectedLineIdx
}

function setMemeImg(selectedImgId) {
    gMeme.selectedImgId = selectedImgId
}

function updateMemeTxtLine(lineSetting, value) {
    if (lineSetting === 'size') {
        gMeme.lines[gMeme.selectedLineIdx][lineSetting] += value
    } else if (lineSetting === 'pos') {
        gMeme.lines[gMeme.selectedLineIdx][lineSetting].y += value
    }
    else {
        gMeme.lines[gMeme.selectedLineIdx][lineSetting] = value
    }
}

function updateSelectedLine(gCurrLineIdx) {
    gMeme.selectedLineIdx = gCurrLineIdx
}

function createNewLine() {
    const newLine = {
        txt: '',
        size: 60,
        height: 0,
        width: 0,
        align: 'center',
        font: 'impact',
        color: 'white',
        pos: {
            x: gElCanvasWidth / 2,
            y: gElCanvasHeight / 2
        }
    }
    gMeme.lines.push(newLine)
}

function removeSelectedLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)

}

function setCanvasSizes(elCanvas) {
    gElCanvasHeight = elCanvas.height
    gElCanvasWidth = elCanvas.width
    setTextLinesPos()
}

function setTextLinesPos() {
    gMeme.lines.forEach((line, index) => {
        line.pos.x = gElCanvasWidth / 2
        switch (index) {
            case 0:
                line.pos.y = 50
                break;
            case 1:
                line.pos.y = gElCanvasHeight / 2
                break;
            case 2:
                line.pos.y = gElCanvasHeight - 50
                break;
        }
    })
}
