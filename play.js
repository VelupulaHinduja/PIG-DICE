var curscore=0,score=[0,0],active=0,gameplaying=true;
init();
function randomnum(){
    if (gameplaying){
        var x = Math.floor((Math.random()*6)+1);
        if(x==1)
        {
            curscore=0;
            document.querySelector('#current-'+active).textContent="0";
            active=activechange(active);
        }
        else{
            curscore += x;
            document.querySelector('#current-'+active).textContent=curscore;
        }
        document.querySelector('.dice').style.display='block';
        document.querySelector('.dice').src='dice-'+x+'.png';
    }
}
    

document.querySelector('.btn-roll').addEventListener("click",randomnum);

document.querySelector('.btn-hold').addEventListener("click",function(){
    if(gameplaying){
        score[active]+=curscore;
        document.querySelector('#current-'+active).textContent="0";
        document.querySelector('.dice').style.display='none';
        document.querySelector('#score-'+active).textContent=score[active];
        if(score[active]>=100){
            
            document.querySelector('#name-'+active).textContent='WINNER!!!';
            
            document.querySelector('.player-'+active+'-panel').classList.add('winner');
            document.querySelector('.player-'+active+'-panel').classList.remove('active');
            
            gameplaying=false;
        }
        else{
            curscore=0;
            active=activechange(active);
        }
    }
    
    
});
function activechange(active){
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    if(active==0){
        return(1);
    }
    else{
        return(0);
    }
    
}
document.querySelector('.btn-new').addEventListener('click',init);
function init(){
    curscore=0,score=[0,0],active=0;
    gameplaying=true;
    document.getElementById('score-0').textContent="0";
    document.getElementById('score-1').textContent="0";
    document.getElementById('current-0').textContent="0";
    document.getElementById('current-1').textContent="0";
    document.querySelector('.dice').style.display='none';
    document.getElementById('name-0').textContent='Shashi';
    document.getElementById('name-1').textContent='Saketh';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
     document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}