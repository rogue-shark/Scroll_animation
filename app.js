const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBoxes)

showBoxes()

function showBoxes(){
    // making height of the scrolling such that the transitions becomes visible wile scrolling
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
       const boxTop = box.getBoundingClientRect().top

       if(boxTop < triggerBottom) {
         box.classList.add('show')
       }
       else {
        box.classList.remove('show')
       }
    })
}