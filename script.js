const toggleMenu = document.getElementById('toggle')
const projectImages = [
  'images/freq_gen.PNG',
  'images/quantum_numbers.PNG',
  'images/variance_easy.PNG',
  'images/bmi_calc.PNG',
  'images/notePDF.PNG',
  'images/weather.PNG'
]

const projectToggler = document.querySelectorAll('input[name = "project-image"]')
const popup = document.querySelector('.pop')
const exitPop = document.querySelector('.exit')
const imageProj = document.querySelector('.imageProj')


toggleMenu.addEventListener('click',()=>{
  popup.classList.add('show')
  if (popup.classList.contains('hide')){
    popup.classList.remove('hide')
  }
})

exitPop.addEventListener('click', ()=>{
  popup.classList.add('hide')
  if (popup.classList.contains('show')){
    popup.classList.remove('show')
}
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

let count = 0
const slideShow = ()=>{
  imageProj.src = projectImages[count]
  count += 1
  if (count === projectImages.length){
    count = 0
  }
}

setInterval(()=>{
  slideShow()
},2000)
