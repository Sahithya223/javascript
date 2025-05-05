'use strict';

const modal=document.querySelector('.modal');
const showModals=document.querySelectorAll('.show-modal');
const close=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay');
for(let i=0;i<showModals.length;i++)
{
    showModals[i].addEventListener('click',function()
{
    modal.classList.remove('hidden');//here we are removing the hidden class attached to modal class.
    overlay.classList.remove('hidden');
})
}
const closeModal=function()
{
    modal.classList.add('hidden');//here we are adding hidden class attached to the modal class.
    overlay.classList.add('hidden');
}
close.addEventListener('click',closeModal)

overlay.addEventListener('click',closeModal)

document.addEventListener('keydown', function(e)
{
    console.log(e.key);
    if(e.key=='Escape')
    {
        if(!modal.classList.contains('hidden'))
        {
            closeModal();
        }
        
    }
})
