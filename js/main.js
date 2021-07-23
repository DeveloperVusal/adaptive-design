document.addEventListener('DOMContentLoaded', function (event) {
    const burgerMenu = document.getElementById('burger-menu')
    const menuExit = document.getElementById('menu-exit')

    if (burgerMenu != null) {
        burgerMenu.addEventListener('click', function(e) {
            const flexs = document.querySelectorAll('.container .sidebar .sticky ul li a .flex')
            const logoWrapper = document.querySelector('.container .sidebar .sticky .logo-wrapper')
            
            for(let i = 0; i < flexs.length; i++) {
                flexs[i].style.width = (window.outerWidth <= 500) ? '90%' : '80%'
                flexs[i].querySelector('.text').style.display = 'inline-block'
                flexs[i].style.justifyContent = 'flex-start'
            }

            
            logoWrapper.style.width = (window.outerWidth <= 500) ? '90%' : '80%'
            logoWrapper.querySelector('.text').style.display = 'inline-block'
            logoWrapper.style.justifyContent = 'flex-start'
            logoWrapper.querySelector('.text').className = logoWrapper.querySelector('.text').className.replace('mt-02', 'mt-05')

            const sideBar = document.querySelector('.container .sidebar')

            sideBar.className += ' fadeSide'

            document.querySelector('.container .sidebar .sticky ul').style.display = 'block'
            
            logoWrapper.style.display = 'flex'
            logoWrapper.querySelector('.text').className = logoWrapper.querySelector('.text').className.replace('mt-06', 'mt-02')

            menuExit.style.display = 'block'
            burgerMenu.style.display = 'none'
        })
    }

    if (menuExit != null) {
        menuExit.addEventListener('click', function(e) {
            const flex = document.querySelectorAll('.container .sidebar .sticky ul li a .flex')
            const logoWrapper = document.querySelector('.container .sidebar .sticky .logo-wrapper')
            
            for(let i = 0; i < flex.length; i++) {
                flex[i].style.width = '50%'
                flex[i].querySelector('.text').style.display = 'none'
                flex[i].style.justifyContent = 'center'
            }
            
            logoWrapper.style.width = '50%'
            logoWrapper.querySelector('.text').style.display = 'none'
            logoWrapper.style.justifyContent = 'center'

            const sideBar = document.querySelector('.container .sidebar')
            sideBar.className = sideBar.className.replace('transition', '')
            sideBar.className = sideBar.className.replace('fadeSide', 'transition')

            console.log('window.outerWidth', window.outerWidth)

            if (window.outerWidth <= 516) {
                document.querySelector('.container .sidebar .sticky ul').style.display = 'none'
                logoWrapper.style.display = 'none'
            }

            menuExit.style.display = 'none'
            burgerMenu.style.display = 'block'
        })
    }

    window.addEventListener('scroll', function() {
        if (window.outerWidth <= 786) {
            if (pageYOffset > 10) {
                document.getElementById('page-h1').style.display = 'none'
                document.querySelector('.container .content .form-search').style.width = '90%'
            } else {
                document.getElementById('page-h1').style.display = 'block'
                document.querySelector('.container .content .form-search').style.width = '100%'
            }
        }
    });
})