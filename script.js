var ele = document.getElementById("box");

var x= ["400","100","500","200","700","900","1500","1200","900","1200","300","2000","107"];
var y= ["400","100","500","200","700","900","1500","1200","900","1200","300","2000","107"];

ele.addEventListener("mouseover",moveit);

function moveit(){

   var xdistance = ele.offsetLeft;

   var ydistance = ele.offsetTop;
    
   var randomx= (x[Math.floor(Math.random() * x.length)] + "px");

   var randomy = (y[Math.floor(Math.random() *y.length)] +"px");

   var pos = ele.getBoundingClientRect();
   var posytop = pos.top;
   var posxleft = pos.left;
   

   

   if (randomx< (((posxleft + "px") - window.innerWidth)-100 +"px")){

      ele.style.left=randomx;
   

   }else{
     
      ele.style.left=100;

   }

   if(randomy< (((posytop + "px") - window.innerHeight)-100 +"px")){

      ele.style.top=randomy;

   }else{

       ele.style.top=100;
      
   }


  


}