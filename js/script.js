const navLink = [].slice.call(document.querySelectorAll('.header__link'));
navLink.forEach(function(el) {
    el.addEventListener('click', function(evt) {
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
navLinkSkill.forEach(function(el) {
    el.addEventListener('click', function(evt) {
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

portfolioLink.addEventListener('click', () => {
  skill.classList.remove('menu_active')
  contacts.classList.remove('menu_active')
  portfolio.classList.add('menu_active')
})

skillLink.addEventListener('click', () => {
  portfolio.classList.remove('menu_active')
  contacts.classList.remove('menu_active')
  skill.classList.add('menu_active')
})
contactsLink.addEventListener('click', () => {
  portfolio.classList.remove('menu_active')
  skill.classList.remove('menu_active')
  contacts.classList.add('menu_active')
})
