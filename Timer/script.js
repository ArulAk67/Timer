
const hours=document.getElementsByClassName("hours");
const minutes=document.getElementsByClassName("minutes");
const seconds=document.getElementsByClassName("seconds");
var x = document.getElementById("myAudio"); 
var time=0;
var fix=0;
function stop()
{
  fix=1;
  
}
function Timer()
{
   if(time<0||fix==1){
    x.pause();
    return;}

    const h=Math.floor((time/60/60 )%24);
    const m=Math.floor((time/60)%60);
    const s=Math.floor(time%60);    
    hours[0].innerHTML=h<10?"0"+h:h;
    minutes[0].innerHTML=m<10?"0"+m:m;
    seconds[0].innerHTML=s<10?"0"+s:s;
    time--;
}
function start()
{
  document.getElementById("user_input").style.display='none';
  document.getElementById("timer").style.display='block';
  x.play();
var hour=parseInt(document.getElementById("h").value);
var min=parseInt(document.getElementById("m").value);
var sec=parseInt(document.getElementById("s").value);
 time=hour*60*60+min*60+sec;
   setInterval(Timer,1000);

  
   return;
}