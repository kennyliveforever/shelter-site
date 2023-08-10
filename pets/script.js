function hide() {
    let burger = document.body.querySelector('.burger')
    let menu = document.body.querySelector('.menu')
    let header = document.body.querySelector('.headerBlock')
    let shadow = document.body.querySelector('.shadow')
    if (burger.style.transform == 'unset') {
        window.onscroll = function () {
            window.scrollTo(0, 0);
        }
        burger.style.transform = 'rotate(90deg)'
        header.style.width = '320px'
        header.style.marginRight = '0'
        menu.style.transform = 'translate(-100%)'
        shadow.style.display = 'block'
    } else {
        window.onscroll = true
        burger.style.transform = 'unset'
        header.style.width = ''
        header.style.marginRight = ''
        menu.style.transform = 'translate(50%)'
        shadow.style.display = 'none'
    }
}