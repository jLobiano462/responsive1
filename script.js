const toggleMenu = document.getElementById('toggle')
const projectImages = [
  'images/freq_gen.png',
  'images/quantum_numbers.png',
  'images/variance_easy.png'
]

const projectToggler = document.querySelectorAll('input[name = "project-image"]')
const popup = document.querySelector('.pop')
const exitPop = document.querySelector('.exit')
const imageProj = document.querySelector('.imageProj')


toggleMenu.addEventListener('click',()=>{
  popup.classList.add('show')
})

exitPop.addEventListener('click', ()=>{
  popup.classList.remove('show')
})


projectToggler.forEach((item)=>{
    item.addEventListener('change',function(){
      projIm(item.value)
    })
  })


const projIm = (it)=>{
  let val = parseInt(it)
  imageProj.src = projectImages[it]
}
