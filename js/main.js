const header = document.querySelector('.header')
const btnCv = document.getElementById('download-cv')
const spans = document.querySelectorAll('.progress-bar span')
const btnHamburgusa = document.getElementById('btn_hamburguesa')
const navBar = document.getElementById('nav-bar')
const links = document.querySelectorAll('#links')

console.log(links)

let scrollLast = 0
window.addEventListener('scroll', () => {

    let scrollDown = document.documentElement.scrollTop;
    if (scrollDown > scrollLast) {
        header.style.background = 'rgb(1, 172, 252)'
    } else {
        header.style.background = 'transparent'
    }
})

btnCv.addEventListener('click', () => {
    window.location.href = 'https://drive.google.com/uc?id=1ri3QarfQPjAKKrvbVDn6ZXA-5xC8smSS&export=download'
})

spans.forEach((span) => {
    let spanInner = span.style.width = span.dataset.width
    span.innerHTML = spanInner
})

btnHamburgusa.addEventListener('click', () => {
    navBar.classList.toggle('active')
})
