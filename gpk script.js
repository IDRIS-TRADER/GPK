// Обновление

const logo = document.querySelector('.header-logo')

logo.addEventListener('click', () => {
    window.location.reload()
})


// Меню

const menu = document.querySelector('.header--menu--list--is-active')

window.addEventListener('click', (event) => {
    if (event.target.closest('.header--burger--button') || event.target.closest('.header--menu--list--is-active')) {
        menu.classList.add('menu-active')
    } else {
        menu.classList.remove('menu-active')
    }
})


// Прокрутка

const toTop = document.querySelector('.footer--top')

toTop.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})

// Смена языка

const languages = document.querySelectorAll('.language')
const boll = document.querySelector('.header__columns__second__language--boll')
const root = document.documentElement
const red = document.querySelectorAll('.red')
const blue = document.querySelectorAll('.blue')

languages.forEach((language) => {
    language.addEventListener('click', () => {
        if (language.classList.contains('header__columns__second__language--en')) {
            if (window.innerWidth > 500) {
                boll.style = `
                    left: 48px;
                  `
            } else {
                boll.style = `
                     left: 28px;
                  `
            }

            root.style.setProperty('--color-blue', '#e73b3b')

            red.forEach((red) => {
                red.style = `
                  opacity: 100;
                `
                blue.forEach((blue) => {
                    blue.style = `
                      opacity: 0;
                    `
                })
            })
        } else if (language.classList.contains('header__columns__second__language--ru')) {
            boll.style = `
             left: 0px;
        `
            root.style.setProperty('--color-blue', '#3b5de7')

            blue.forEach((blue) => {
                blue.style = `
                  opacity: 100;
                `
                red.forEach((red) => {
                    red.style = `
                      opacity: 0;
                    `
                })
            })
        }
    })
})

// Якорь

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = window.innerHeight / 2;

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// Смещение элементов

const elements = document.querySelectorAll('.element')


document.addEventListener('mousemove', function (e) {

    const mouseX = e.clientX
    const mouseY = e.clientY

    elements.forEach(element => {
        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const moveX = (centerX - mouseX) * 0.05
        const moveY = (centerY - mouseY) * 0.05

        element.style.transform = `translate(${moveX}px, ${moveY}px)`
    })
})


