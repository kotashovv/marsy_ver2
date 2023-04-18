document.addEventListener('DOMContentLoaded', ()=> {
    
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