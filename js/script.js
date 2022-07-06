const menu = document.querySelector('.menu__navigation')
const menuBurgerButton = document.querySelector('.burger')

menuBurgerButton.addEventListener('click', () => {
   
        menu.classList.toggle('active');
       
})



const navLink = [].slice.call(document.querySelectorAll('.menu__link'));
navLink.forEach(function (el) {
    el.addEventListener('click', function (evt) {
        evt.preventDefault();
        navLink.forEach((nl) => {
            if (nl !== this) {
                nl.classList.remove('link_active');
            }
        });
        this.classList.add('link_active');
    }, false);
});
const navLinkSkill = [].slice.call(document.querySelectorAll('.skill__link'));
navLinkSkill.forEach(function (el) {
    el.addEventListener('click', function (evt) {
        evt.preventDefault();
        navLinkSkill.forEach((nl) => {
            if (nl !== this) {
                nl.classList.remove('skill_link_active');
            }
        });
        this.classList.add('skill_link_active');
    }, false);
});

const portfolioLink = document.querySelector('#porfolio')
const skillLink = document.querySelector('#skill')
const contactsLink = document.querySelector('#contacts')

const portfolio = document.querySelector('.portfolio')
const skill = document.querySelector('.skill')
const contacts = document.querySelector('.contacts')

const toglemain = (sectionElement) => {
    skill.classList.remove('menu_active')
    contacts.classList.remove('menu_active')
    portfolio.classList.remove('menu_active')
    sectionElement.classList.add('menu_active')
}
portfolioLink.addEventListener('click', () => {
    toglemain(portfolio)
})

skillLink.addEventListener('click', () => {
    toglemain(skill)
})
contactsLink.addEventListener('click', () => {
    toglemain(contacts)

})
