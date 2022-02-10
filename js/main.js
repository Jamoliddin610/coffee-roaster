let elBtn = document.querySelector('.head__btn');
let elList = document.querySelector('.head__list');

elBtn.addEventListener('click', function(){
    elList.classList.toggle('show');
    elBtn.classList.toggle('active');
})