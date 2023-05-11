const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
    })
}
const form = document.querySelector('form')
const btn = document.querySelector('#liveAlertBtn')
btn.addEventListener('click', () => {
    form.reset()
})
let scrollpos = window.scrollY
const header = document.querySelector(".navbar")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("scrolled", "shadow-sm")
const remove_class_on_scroll = () => header.classList.remove("scrolled", "shadow-sm")

window.addEventListener('scroll', function() {
scrollpos = window.scrollY;

if (scrollpos >= header_height) { add_class_on_scroll() }
else { remove_class_on_scroll() }

console.log(scrollpos)
})

AOS.init({
duration: 800, // values from 0 to 3000, with step 50ms
})