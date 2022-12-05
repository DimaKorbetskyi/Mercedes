
let offset = 0;

const sliderRow = document.querySelector('.slider_row')

document.querySelector('.v-l').addEventListener('click', ()=>{
    offset -= 300;
    if(offset < -1170){
        offset = -1170
    }
    sliderRow.style.left = offset + 'px'
})

document.querySelector('.v-r').addEventListener('click', () =>{
    offset += 300;
    if (offset > 0){
        offset = 0;
    }
    sliderRow.style.left = offset + 'px'
})

const btnChoice = document.querySelectorAll('.btn_choice'),
    popupBg = document.querySelector('.popup_bg'),
    popupContent = document.querySelector('.popup_content'),
    closePopup = document.querySelector('.close_popup');


btnChoice.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault;
        popupBg.classList.add('active'),
        popupContent.classList.add('active')
    })
})


document.addEventListener('click', (e)=>{
    if (e.target === popupBg || e.target === closePopup){
        popupBg.classList.remove('active'),
        popupContent.classList.remove('active')
    }
})
