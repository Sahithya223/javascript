'use strict';
let currentScore0=document.querySelector('#current--0');
let currentScore1=document.getElementById('current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
let score1=document.querySelector('#score--0');
let score2=document.getElementById('score--1');
const dice=document.querySelector('.dice');
dice.classList.add('hidden');
const rollDice=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const newGame=document.querySelector('.btn--new');
let currentScore=0;
let activePlayer=0;
let scores=[0,0];
score1.textContent=0;
score2.textContent=0;
let playing=true;
rollDice.addEventListener('click', function()
{
  if(playing)
  {
  //generate randon number between 1 to 6;
  const i=Math.trunc(Math.random()*6)+1;
  console.log(i);
  //remove the hidden class
  dice.classList.remove('hidden');
  //based on the random number we need to select dice-img
  dice.src=`dice-${i}.png`;
  if(i!==1)
  {
    currentScore=currentScore+i;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
  }
  else{
    //switch to next player
    swithPlayer();
  }
  }
   
   
})
btnHold.addEventListener('click',function()
{
  //add current score to score of the active player.
  //if score is greater than or equals to 100 declare the player as winner.
  //
  scores[activePlayer]+=currentScore;
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
  if(scores[activePlayer]>=10)
  {
    //finish the game
    playing=false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }
  else{
    swithPlayer();
  }
 
})
function swithPlayer()
{
 
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer= activePlayer==0?1:0;
    currentScore=0;
    player0.classList.toggle('player--active');//toggle method checks if that class presents removes it, if not present adds the class.
    player1.classList.toggle('player--active');
 
}
newGame.addEventListener('click',function()
{
  dice.classList.add('hidden');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  document.getElementById(`current--${activePlayer}`).textContent=0;
  document.querySelector(`.player--0`).classList.add('player--active');
  playing=true;
  activePlayer=0;
  currentScore=0;
  score1.textContent=0;
  score2.textContent=0;
  scores=[0,0];
 

})