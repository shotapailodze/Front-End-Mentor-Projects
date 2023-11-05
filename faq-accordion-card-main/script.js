document.querySelectorAll('.accordion__question').forEach(item => {
    item.addEventListener('click', event => {
        // item.classList.toggle('open')

        if(!item.classList.contains('open')) {
            item.nextElementSibling.classList = 'accordion__collapse collapsing'

            setTimeout(() => {
                item.nextElementSibling.classList = 'accordion__collapse open'
            }, 300)
        } else {
            item.nextElementSibling.classList = 'accordion__collapse collapsing'

            setTimeout(() => {
                item.nextElementSibling.classList = 'accordion__collapse collapse'
            }, 300)
        }
        item.classList.toggle('open')

        // Add 'collapsing' class to acord collapse (sibling)

        // Remove collapsing class and add open class
        // item.nextElementSibling.classList.toggle('open')
    })
})