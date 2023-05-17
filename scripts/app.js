document.addEventListener('DOMContentLoaded', ()=> {
    
    //открытие меню

    const burgerMenu = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-header');

    function OpenMenu() {
        burgerMenu.classList.add('active');     
        mobileMenu.classList.add('active');
        document.querySelector('main.main').classList.add('black');
        document.body.style.overflow=  'hidden';
    }
    function CloseMenu() {
        burgerMenu.classList.remove('active');     
        mobileMenu.classList.remove('active');
        document.querySelector('main.main').classList.remove('black');
        document.body.style.overflow = 'auto';
    }
    if (burgerMenu) {
        burgerMenu.addEventListener('click', (e)=>{
            if (e.target.classList.contains('active')) {
                CloseMenu();
            } else {
                OpenMenu();
            }
        })
    }

    // логика формы 

    let loginPage = document.querySelector('.login-page');

    if (loginPage) {
        let buttonsToggle = document.querySelectorAll('.form-toggle');

        if (buttonsToggle.length != null) {
            buttonsToggle.forEach(function(item){
                item.addEventListener('click', ()=>{
                    let loginPageWrap = document.querySelector('.login-page__wrap');

                    if (loginPageWrap.classList.contains('login-active')) {
                        loginPageWrap.classList.remove('login-active');
                        loginPageWrap.classList.add('signup-active');
                    } else {
                        loginPageWrap.classList.add('login-active');
                        loginPageWrap.classList.remove('signup-active');
                    }
                })
            })
        }
       
    }
})