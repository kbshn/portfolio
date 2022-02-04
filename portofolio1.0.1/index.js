const languageSelector = document.getElementById("language-selector") 
const languageSelectorNav = document.getElementById("language-selector-nav") 
const japaneseText = document.getElementsByClassName("japanese-text")
const englishText = document.getElementsByClassName("english-text")

const hamburger = document.getElementById("hamburger-nav")
const popup = document.getElementById("popup")

// languageSelector.addEventListener('change', () => {
//     if (languageSelector.value === "japanese") {
//         japaneseText.classList.replace("hidden", "block")
//         englishText.classList.replace("block", "hidden")
//     } else if (languageSelector.value === "english") {
//         englishText.classList.replace("hidden", "block")
//         japaneseText.classList.replace("block", "hidden")
//     }
// })


        languageSelector.addEventListener('change', () => {
            for (var j = 0; j < japaneseText.length; j++) {
                if (languageSelector.value === "japanese") {
                    japaneseText[j].classList.replace("hidden", "block")
                    englishText[j].classList.replace("block", "hidden")
                }
            }
            for (var y = 0; y < englishText.length; y++) {
                if (languageSelector.value === "english") {
                    englishText[y].classList.replace("hidden", "block")
                    japaneseText[y].classList.replace("block", "hidden")
                }
            }
        })

        languageSelectorNav.addEventListener('change', () => {
            for (var j = 0; j < japaneseText.length; j++) {
                if (languageSelector.value === "japanese") {
                    japaneseText[j].classList.replace("hidden", "block")
                    englishText[j].classList.replace("block", "hidden")
                }
            }
            for (var y = 0; y < englishText.length; y++) {
                if (languageSelector.value === "english") {
                    englishText[y].classList.replace("hidden", "block")
                    japaneseText[y].classList.replace("block", "hidden")
                }
            }
        })


hamburger.addEventListener('click', () => {
    popup.classList.toggle("hidden")
})