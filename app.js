let btn = document.querySelector('.modal-btn')
let overlay = document.querySelector('.modal-overlay')
let closeBtn = document.querySelector('.close-btn')

btn.addEventListener('click', () => {
  overlay.classList.add('open-modal')
})

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('open-modal')
  })





