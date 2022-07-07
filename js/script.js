import OpenBurger from "./OpenBurger.js"

const menuBurgerButton = document.querySelector('.burger')

// массив с ссылками меню секций
const linksMenu = Array.from(document.querySelectorAll('.menu__link'));
// массив с ссылками меню скции skils
const linksMenuSkill = Array.from(document.querySelectorAll('.skill__link'));

// массив секций 
const sections = Array.from(document.querySelectorAll('section'))

const sectionsSkill = Array.from(document.querySelectorAll('.scill__block'))




const openBurger = new OpenBurger({ menu: 'menu__navigation', buttonMenu: 'burger' })

menuBurgerButton.addEventListener('click', () => {
    openBurger.open()
})
// функция подчёркивания активной ссылки

const toggleMenu = (id) => {
    const section = document.querySelector(`#${id}`)

    if (id.slice(-1) === 'M') {
        sections.forEach((el) => {
            el.classList.remove('menu_active')
        })
        section.classList.add('menu_active')
    } else {
        sectionsSkill.forEach((el) => {
            el.classList.remove('active')
        })
        section.classList.add('active')
    }
}

const underlineActive = (arr, activeSelector) => {
    arr.forEach(function (el) {
        el.addEventListener('click', function (evt) {
            evt.preventDefault();
            arr.forEach((nl) => {
                if (nl !== this) {
                    nl.classList.remove(activeSelector);
                }
            });
            this.classList.add(activeSelector);
            toggleMenu(this.getAttribute('About'))
        }, false);
    });
}

underlineActive(linksMenu, 'link_active')
underlineActive(linksMenuSkill, 'skill_link_active')




