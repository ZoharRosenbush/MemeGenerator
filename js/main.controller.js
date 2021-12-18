'use strict';


function onInit() {
    renderGallery()
    initCanvas()
    renderKeywordsSection()
}

function renderKeywordsSection() {
    const keywords = getKeywords()
    var strHtml = ''
    for (const key in keywords) {
        const keywordCount = getKeywordCount(`${key}`)
        strHtml += ` <li><a href="#" style="font-size:${keywordCount}px;" class="${key} keyword" onclick="onKeywordClick('${key}')">${key}</a></li>`
    }
    document.querySelector('.keyword-map').innerHTML = strHtml
}

function onKeywordClick(keyword) {
    increaseKeywordCount(`${keyword}`)
    const keywordCount = getKeywordCount(`${keyword}`)
    const keywordSize = document.querySelector(`.${keyword}`).style.fontSize;
    if (keywordSize !== '') {
        if (keywordCount > 50) return
        document.querySelector(`.${keyword}`).style.fontSize = `${keywordCount}px`
    } else {
        document.querySelector(`.${keyword}`).style.fontSize = `15px`;
    }
    setFilter(keyword)
    renderGallery()
}

function onSetFilter(elInput) {
    setFilter(elInput.value)
    elInput.value = ''
    renderGallery()
}