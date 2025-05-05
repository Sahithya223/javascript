'use strict';
let secretNumber= Math.trunc(Math.random()*20)+1;

let score=20;
let highScore=0;
    console.log(score, typeof score);
document.querySelector('.check').addEventListener('click',function()
{
  
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if(!guess)
    {
      document.querySelector('.message').textContent='⛔ No Number';
    }
    else if(guess==secretNumber)
        {
            document.querySelector('body').style.backgroundColor='green';
            document.querySelector('.number').style.width='30rem';
            document.querySelector('.message').textContent='🎉 Correct Number!';
            document.querySelector('.number').textContent=secretNumber;
            if(highScore<score)
            {
                highScore=score;
                document.querySelector('.highscore').textContent=highScore;
                console.log(highScore);
               
            }
           
        } 
    else if(guess>0)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent=guess>secretNumber?'Number is too High':'Number is too low.';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='You Lost the game!';
            document.querySelector('body').style.backgroundColor='Red';
            document.querySelector('.score').textContent=0;
        }
    
    }
   
})
document.querySelector('.again').addEventListener('click',function()
{
    score=20;
    secretNumber= Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    document.querySelector('.message').textContent='Start guessing';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
})