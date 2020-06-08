
function reset_function(){
  document.location.reload();
}

function solution_function(){
  for(var i=0;i<buttonArr.length-2;i++){
  var check=checkIndex(i);
  if(check==1){
      document.getElementsByTagName("button")[i].style.background= "black";
      count++;
    }
    else{
      document.getElementsByTagName("button")[i].innerHTML="";
      document.getElementsByTagName("button")[i].style.background= "pink";
    }
  }
}

var buttonArr=document.querySelectorAll("button");


// --all index of button that are answer
var allIndex=[0,1,2,4,5,6,7,8,9,10,
              12,13,14,15,16,20,21,22,23,24,
              28,29,30,36,37,38,44,51,53,52,
              67,82,90,104,105,106,118,119,120,121,
              122,132,133,134,135,136,137,138,146,147,
              148,149,150,151,152,153,154,160,161,162,
              163,164,165,166,167,168,169,170,175,174,
              176,177,178,179,180,181,182,183,184,185,
              186,188,189,190,191,192,193,194,195,196,
              197,198,199,200,201,203,204,205,206,207,
              208,209,210,211,212,213,214,215,216,217,
              218,219,220,221,222,223,224
              ];

function checkIndex(a){
  for(var i=0;i<allIndex.length;i++){
    if(a==allIndex[i])
      return 1
  }
  return 0;
}
//--every click in table
var count=0;
buttonArr.forEach((item, i) => {
  buttonArr[i].addEventListener('click',(evt)=>{  var check=checkIndex(i);if(check==1){
      var a= document.getElementsByTagName("button")[i].style.background
      if(a!= "black"){
        document.getElementsByTagName("button")[i].style.background= "black";
        count++;
      }
      if(count==117){
          window.alert("CONGRATULATIONS!!!");
      }
    }
    else{
      document.getElementsByTagName("button")[i].innerHTML="  ";
    }})

});


 document.getElementById("reset").onclick=reset_function;
 document.getElementById("solution").onclick=solution_function;
 // function loadData_function(file){
 //
 //
 // }

 // document.getElementById("loadData").onclick=loadData_function;
