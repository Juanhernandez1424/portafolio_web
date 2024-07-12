const header = document.querySelector('.header')
const btnCv = document.getElementById('download-cv')
const btnHamburgusa = document.getElementById('btn_hamburguesa')
const navBar = document.getElementById('nav-bar')
const links = document.querySelectorAll('#links')
const skills = document.getElementById('skills')
const proyectos = document.getElementById('proyectos')

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

btnHamburgusa.addEventListener('click', () => {
    navBar.classList.toggle('active')
})


const habilidades = [
    {
        nombre: 'HTML',
        porcentaje: '90%',
        valor: '90',
    },
    {
        nombre: 'CSS',
        porcentaje: '70%',
        valor: '70',
    },
    {
        nombre: 'JavaScript',
        porcentaje: '60%',
        valor: '60',
    },
    {
        nombre: 'Angular',
        porcentaje: '30%',
        valor: '30',
    },
    {
        nombre: 'SQL Server',
        porcentaje: '50%',
        valor: '50',
    },
    {
        nombre: 'Git - GitHub',
        porcentaje: '50%',
        valor: '50',
    },
    {
        nombre: 'Azure Devops',
        porcentaje: '50%',
        valor: '50',
    },
    {
        nombre: 'Historias de Usuario',
        porcentaje: '90%',
        valor: '90',
    },
    {
        nombre: 'Pruebas Funcionales',
        porcentaje: '100%',
        valor: '100',
    },
    {
        nombre: 'Pruebas Automatización',
        porcentaje: '60%',
        valor: '60',
    },
]

function mostrarSkills(skill) {
    let divSkill = document.createElement('div')
    divSkill.classList.add('progress')
    divSkill.innerHTML =
        `<h4>${skill.nombre}</h4>
            <div class="progress-bar">
              <span data-width="${skill.porcentaje}">${skill.valor}<sup>%</sup></span>
            </div>`
    skills.append(divSkill)
}

habilidades.forEach(skill => {
    mostrarSkills(skill)
})

const listaProyectos = [
    {
        img: 'img/proyecto-delifast.PNG',
        tecnologia: 'HTML, CSS y JAVASCRIPT',
        nombre: 'Delifast',
        descripcion: 'Página reponsiva para un sitio web de comidas rápidas'
    },
    {
        img: 'img/proyecto-global-music.PNG',
        tecnologia: 'Angular',
        nombre: 'GlobalMusic',
        descripcion: 'Página E-Commerce reponsiva para un sitio web de instrumentos musicales'
    },
]

function mostrarProyectos(proyecto) {
    let divProyecto = document.createElement('div')
    divProyecto.classList.add('proyecto')
    divProyecto.innerHTML =
        `<div class="proyecto-img">
            <img src="${proyecto.img}" alt="proyecto-${proyecto.nombre}" />
        </div>
        <div class="proyecto-info">
            <div class="info-tecnologia">
              <h3>${proyecto.tecnologia}</h3>
            </div>
            <div class="info-nombre">
              <h4>${proyecto.nombre}</h4>
            </div>
            <div class="info-descripcion">
              <p>${proyecto.descripcion}</p>
            </div>
        </div>`
    proyectos.append(divProyecto)
}

listaProyectos.forEach(proyecto => {
    mostrarProyectos(proyecto)
})

document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.progress-bar span')
    spans.forEach((span) => {
        let spanInner = span.style.width = span.dataset.width
        span.innerHTML = spanInner
    })
})
