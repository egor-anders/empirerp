window.addEventListener('DOMContentLoaded', () => {

  const navigation = document.querySelector('.main-nav'),
    burger = navigation.querySelector('.main-nav__wrapper'),
    burgerButton = burger.querySelector('.main-nav__toggle'),
    mobileNav = navigation.querySelector('[data-mobile_nav]'),
    logo = document.querySelector('.main-nav__logo');

    
  burgerButton.addEventListener('click', () => {
    if (burger.classList.contains('main-nav--closed')) {
      burger.classList.remove('main-nav--closed');
      burger.classList.add('main-nav--opened');
      document.body.style.overflow = 'hidden';
      mobileNav.classList.remove('visually-hidden');
      navigation.classList.add('mobile-bg');
      logo.classList.add('main-nav__logo--dark');
    } else {
      burger.classList.remove('main-nav--opened');
      navigation.classList.remove('mobile-bg');
      burger.classList.add('main-nav--closed');
      document.body.style.overflow = '';
      mobileNav.classList.add('visually-hidden');
      logo.classList.remove('main-nav__logo--dark');
    }
  });

  AOS.init(
    {
      disable: 'mobile',
      once: true, 
    }
  );
});
