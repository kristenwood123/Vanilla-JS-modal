let btn = document.querySelector('.modal-btn')
let overlay = document.querySelector('.modal-overlay')
let closeBtn = document.querySelector('.close-btn')

btn.addEventListener('click', () => {
  overlay.className += ' open-modal'
})


  closeBtn.addEventListener('click', () => {
    if(overlay.classList.contains('open-modal')) {
      overlay.classList.remove('open-modal')
    }
  })





