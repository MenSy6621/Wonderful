var swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    autoplay: {
        delay: 15000,
        disableOnInteraction: false
},
    slidesPerGroup: 1,
    grabCursor: true,
    });
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