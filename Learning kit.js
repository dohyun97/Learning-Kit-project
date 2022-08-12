function p01Func() {
	document.getElementById("problem").innerHTML="<p>User types two numbers and the output will be their sum</p>";
  document.getElementById("flowchart").setAttribute("src","image/flowchart/flowchart1.jpeg");
  document.getElementById("flowchart").style.display="none";
   document.getElementById("js").setAttribute("src","image/js/js1.jpg");
document.getElementById("js").style.display="none";
document.getElementById("button").setAttribute("onclick","add();");
document.getElementById("program").style.visibility="hidden";
document.getElementsByClassName("inputz")[0].style.display="none";  
document.getElementsByClassName("inputy")[0].style.display="block";	
document.getElementsByClassName("input")[0].style.display="block"; 
document.getElementById("num1").value=""; 
document.getElementById("num2").value=""; 
document.getElementById("output").innerHTML=""; 
document.getElementById("num1").disabled = false;
document.getElementById("button").disabled = false;
document.getElementById("ex_7").style.display="none";
document.getElementById("ex_8").style.display="none";
  /* the following two lines gets the checkboxes that their ID is check1
     and check2, and unchecks them
  */
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}
function add() {
    //precondition: 
    //	num1 represents a Real number. num2 represents a Real number
    //Postcondition:
    //	The sum of num1 and num2 has been outputted    
                              
    var w = parseInt(document.getElementById("num1").value);
    var h = parseInt(document.getElementById("num2").value);
    
       
    var s = w + h;
    
    document.getElementById("output").innerHTML = "sum: " + s;
 
 }

 
/* in Ex3, uncomment the following function and complete it*/


function checkUncheck1(){
  if (document.getElementById("check1").checked==true) {
     // add a getElementById here to get "flowchart" img and 
     document.getElementById("flowchart").style.display="inline";	 

	 
  }
  else {
     // add a getElementById here to get "flowchart" img and 
     // set the display property of its style to "none"	 
	 document.getElementById("flowchart").style.display="none";
	  
  }
}



function checkUncheck2(){
  if (document.getElementById("check2").checked==true) {
     // add a getElementById here to get "js" img and 
     // set the display property of its style to "inline"	 
	 document.getElementById("js").style.display="inline";	
	 
  }
  else {
     // add a getElementById here to get "js" img and 
     // set the display property of its style to "none"	 
	 document.getElementById("js").style.display="none";	 
	  
  }
}
  function checkUncheck3(){
    if (document.getElementById("check3").checked==true) {
       // add a getElementById here to get "js" img and 
       // set the display property of its style to "inline"	 
       document.getElementById("program").style.visibility="visible";	
       
    }
    else {
       // add a getElementById here to get "js" img and 
       // set the display property of its style to "none"	 
       document.getElementById("program").style.visibility="hidden";	 
        
    }
  }


function p02Func() {
	document.getElementById("problem").innerHTML="<p>receive three numbers and store them in memory spaces called a, b, and c as three sides of a triangle and, by using Heron’s formula, calculate and output the area of the triangle. You may need to refresh your memory or learn about Heron’s formula by visiting <a href=https://www.mathopenref.com/heronsformula.html>here</a></p>";
  document.getElementById("flowchart").setAttribute("src","image/flowchart/flowchart2.jpeg");
  document.getElementById("flowchart").style.display="none";
   document.getElementById("js").setAttribute("src","image/js/js2.jpg");
document.getElementById("js").style.display="none";
document.getElementById("button").setAttribute("onclick","area();");
document.getElementById("program").style.visibility="hidden";	
document.getElementsByClassName("inputz")[0].style.display="block"; 
document.getElementsByClassName("inputy")[0].style.display="block";
document.getElementsByClassName("input")[0].style.display="block";	 
document.getElementById("num1").value=""; 
document.getElementById("num2").value=""; 
document.getElementById("num3").value=""; 
document.getElementById("output").innerHTML="";  
document.getElementById("num1").disabled = false;
document.getElementById("button").disabled = false;
document.getElementById("ex_7").style.display="none";
document.getElementById("ex_8").style.display="none";
  
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}

function area() {
    //precondition: 
    //	a,b,c is postive number
    //Postcondition:
    //	Area is output                           
  
    document.getElementById("num1").min="1";
    document.getElementById("num2").min="1";
    document.getElementById("num3").min="1";
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);
   
    var p=(a+b+c)/2;
    var e=p*(p-a)*(p-b)*(p-c);
    var t= Math.sqrt(e);
    var z= t.toFixed(2);
 
    
    document.getElementById("output").innerHTML = "area: " + z;

    
 
 }
 

function zoomIn() {
    document.getElementById("js").style.width="150%"
}

function zoomOut() {
    document.getElementById("js").style.width="100%"
}
function p03Func() {
	document.getElementById("problem").innerHTML="<p>receive three numerical coefficients of a quadratic equation (store them in memory spaces called a, b, and c) and calculate and output its roots. Write a precondition that assumes coefficients are good enough such that a solution in real number exists. That means your design should not concern cases for which a solution does not exist. If you need to refresh your memory on this topic, this might be a good source: <a href=https://www.mathsisfun.com/algebra/quadratic-equation.htmlrmula>here</a></p>";
  document.getElementById("flowchart").setAttribute("src","image/flowchart/flowchart3.jpeg");
  document.getElementById("flowchart").style.display="none";
   document.getElementById("js").setAttribute("src","image/js/js3.jpg");
document.getElementById("js").style.display="none";
document.getElementById("button").setAttribute("onclick","equation();");
document.getElementById("program").style.visibility="hidden";	 
document.getElementsByClassName("inputz")[0].style.display="block"; 
document.getElementsByClassName("inputy")[0].style.display="block";	
document.getElementsByClassName("input")[0].style.display="block"; 
document.getElementById("num1").value=""; 
document.getElementById("num2").value=""; 
document.getElementById("num3").value=""; 
document.getElementById("output").innerHTML=""; 
document.getElementById("num1").disabled = false;
document.getElementById("button").disabled = false;
document.getElementById("ex_7").style.display="none";
document.getElementById("ex_8").style.display="none";
  
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}
function equation() {
    //precondition: 
    //	a,b,c is real number
    //Postcondition:
    //	The root of quadratic equation is output                            
    
    
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);
    
    var p=Math.pow(b,2)-(4*a*c);
    
    var t= Math.sqrt(p);
    var u=2*a
    var x1=(-b+t)/u;
    var x2= (-b-t)/u;
    
    
    document.getElementById("output").innerHTML = "one root:" + x1.toFixed(2)+"<br>"+"another: " + x2.toFixed(2);
    
 }
 function p04Func() {
	document.getElementById("problem").innerHTML="<p>receive three numerical coefficients of a quadratic equation and determines if it has two distinct real roots, one root, or no roots in real numbers. This page might be a good reference: <a href=https://www.math10.com/en/algebra/quadratic-equation.html</a>here</p>";
  document.getElementById("flowchart").setAttribute("src","image/flowchart/flowchart4.jpg");
  document.getElementById("flowchart").style.display="none";
   document.getElementById("js").setAttribute("src","image/js/js4.jpg");
document.getElementById("js").style.display="none";
document.getElementById("button").setAttribute("onclick","equation2();");
document.getElementById("program").style.visibility="hidden";	 
document.getElementsByClassName("inputz")[0].style.display="block"; 
document.getElementsByClassName("inputy")[0].style.display="block";	
document.getElementsByClassName("input")[0].style.display="block"; 
document.getElementById("num1").value=""; 
document.getElementById("num2").value=""; 
document.getElementById("num3").value=""; 
document.getElementById("output").innerHTML=""; 
document.getElementById("num1").disabled = false;
document.getElementById("button").disabled = false;
document.getElementById("ex_7").style.display="none";
document.getElementById("ex_8").style.display="none";
  
  document.getElementById("check1").checked=false;
  document.getElementById("check2").checked=false;
  document.getElementById("check3").checked=false;
}
function equation2() {
    //precondition: 
    //	a,b,c is real number
    //Postcondition:
    //	determine if it has two roots, one root, or no root                             
 
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var c = parseInt(document.getElementById("num3").value);
    
    var p=b*b;
    var t= 4*a*c;
    
 
       if(p>t){
         document.getElementById("output").innerHTML = "It has two direct roots"; 
       }else if(p<t){
         document.getElementById("output").innerHTML = "It has no root in real number";
       }else {
         document.getElementById("output").innerHTML = "Its roots are identical";
       }
    
     }
     function p05Func() {
        document.getElementById("problem").innerHTML="<p>receive a number and map it to a letter grade based on York standard. You may need to look at this reference: <a href=http://calendars.registrar.yorku.ca/2012-2013/academic/grades/index.htm> here</a> Assume if the grade is 40 to 49, it’s mapped to E.</p>";
      document.getElementById("flowchart").setAttribute("src","image/flowchart/flowchart5.jpg");
      document.getElementById("flowchart").style.display="none";
       document.getElementById("js").setAttribute("src","image/js/js5.jpg");
    document.getElementById("js").style.display="none";
    document.getElementById("button").setAttribute("onclick","mapping();");
    document.getElementById("program").style.visibility="hidden";	 
    document.getElementsByClassName("inputz")[0].style.display="none"; 
    document.getElementsByClassName("inputy")[0].style.display="none";
    document.getElementsByClassName("input")[0].style.display="block";	 
    document.getElementById("num1").value=""; 
    document.getElementById("num2").value=""; 
    document.getElementById("num3").value=""; 
    document.getElementById("output").innerHTML=""; 
    document.getElementById("num1").disabled = false;
    document.getElementById("button").disabled = false;
    document.getElementById("ex_7").style.display="none";
    document.getElementById("ex_8").style.display="none";
      
      document.getElementById("check1").checked=false;
      document.getElementById("check2").checked=false;
      document.getElementById("check3").checked=false;
    }
    function mapping() {
        //precondition: 
        //	a is positive number
        //Postcondition:
        //	output is letter grade                           
     
        document.getElementById("num1").min="0";
        var a = parseInt(document.getElementById("num1").value);   
        
        switch (true){
         case (a>89): 
            answer="A+";
            break;
         case (a>79): 
            answer="A";
            break;
         case(a>74):
             answer="B+";
             break;
         case(a>69):
             answer="B";
             break;
         case (a>64):
              answer="C+";
              break;
         case (a>59):
              answer="C";
              break;
         case (a>54):
              answer="D+";
              break
         case (a>49):
             answer="D";
             break
         case (a>39):
             answer="E";
             break
         default:
             answer="F";   
    
         }   
          document.getElementById("output").innerHTML=answer;
        
         }
         function p06Func() {
            document.getElementById("problem").innerHTML="<p>outputs whether the input is positive or negative until a zero is received. When a zero is received, the button is disabled (so the function cannot be called anymore).</p>";
          document.getElementById("flowchart").setAttribute("src","image/flowchart/flowchart6.jpg");
          document.getElementById("flowchart").style.display="none";
           document.getElementById("js").setAttribute("src","image/js/js6.jpg");
        document.getElementById("js").style.display="none";
        document.getElementById("button").setAttribute("onclick","Problem6();");
        document.getElementById("program").style.visibility="hidden";	 
        document.getElementsByClassName("inputz")[0].style.display="none"; 
        document.getElementsByClassName("inputy")[0].style.display="none";	
        document.getElementsByClassName("input")[0].style.display="block"; 
        document.getElementById("num1").value=""; 
        document.getElementById("num2").value=""; 
        document.getElementById("num3").value=""; 
        document.getElementById("output").innerHTML=""; 
        document.getElementById("num1").disabled = false;
        document.getElementById("button").disabled = false;
        document.getElementById("ex_7").style.display="none";
        document.getElementById("ex_8").style.display="none";
          
          document.getElementById("check1").checked=false;
          document.getElementById("check2").checked=false;
          document.getElementById("check3").checked=false;
        }
        function Problem6() {
            //precondition: 
            //	a is real number
            //Postcondition:
            //	outputs whether the input is positive or negative until a zero is received. When a zero is received, the button is disabled and cannot type input.                        
         
             
            var a = parseFloat(document.getElementById("num1").value);   
            
            if(a<0){
                answer="Negative";
            }else if (a>0){
                answer="Positive";
            }else{
                answer="Program ended";
                document.getElementById("num1").setAttribute("disabled","true");
                document.getElementById("button").setAttribute("disabled","true");
            }
         
            
               document.getElementById("output").innerHTML=answer;
            
             }
         
             function p07Func() {
                document.getElementById("problem").innerHTML="<p>continue receiving numbers and output if they are positive or negative until a zero is entered. When a zero is entered, the program should output how many positive and how many negative numbers have been entered, then it stops.</p>";
              document.getElementById("flowchart").setAttribute("src","image/flowchart/flowchart7.jpg");
              document.getElementById("flowchart").style.display="none";
               document.getElementById("js").setAttribute("src","image/js/js7.jpg");
            document.getElementById("js").style.display="none";
            document.getElementById("button").setAttribute("onclick","Problem7();");
            document.getElementById("program").style.visibility="hidden";	 
            document.getElementsByClassName("inputz")[0].style.display="none"; 
            document.getElementsByClassName("inputy")[0].style.display="none";	 
            document.getElementsByClassName("input")[0].style.display="block";
            document.getElementById("num1").value=""; 
            document.getElementById("num2").value=""; 
            document.getElementById("num3").value=""; 
            document.getElementById("output").innerHTML=""; 
            document.getElementById("num1").disabled = false;
            document.getElementById("button").disabled = false;
            document.getElementById("ex_7").style.display="none";
            document.getElementById("ex_8").style.display="none";
            document.getElementById("positives_counter").innerHTML="0"; 
            document.getElementById("negatives_counter").innerHTML="0";
              document.getElementById("check1").checked=false;
              document.getElementById("check2").checked=false;
              document.getElementById("check3").checked=false;
            }       
            function Problem7() {
                //precondition: 
                //	a is real number
                //Postcondition:
                //	output is how many positive and how many negative numbers have been entered,  it stops  when 0 is enetered.                         
             
                 
                var a = parseFloat(document.getElementById("num1").value);   
                
                if(a<0){
                    document.getElementById("output").innerHTML="Negative";
                    var ncount= parseFloat(document.getElementById("negatives_counter").innerHTML);
                    ncount=ncount+1;
                    document.getElementById("negatives_counter").innerHTML=ncount;
                }else if (a>0){
                    document.getElementById("output").innerHTML="Positive";
                    var pcount= parseFloat(document.getElementById("positives_counter").innerHTML);
                    pcount=pcount+1;
                    document.getElementById("positives_counter").innerHTML=pcount;
                }else{
                    document.getElementById("output").innerHTML="Program ended";
                    document.getElementById("num1").setAttribute("disabled","true");
                    document.getElementById("button").setAttribute("disabled","true");
                    document.getElementById("ex_7").style.display= "inline";
                }
            
            
                
                 }
function p08Func() {
                    document.getElementById("problem").innerHTML="<p>continue receiving numbers and output if they are divisible by 6 or not until a zero is entered. When a zero is entered, the program should output how many of the entered numbers were divisible by 6, then it stops. </p>";
                  document.getElementById("flowchart").setAttribute("src","image/flowchart/flowchart8.jpg");
                  document.getElementById("flowchart").style.display="none";
                   document.getElementById("js").setAttribute("src","image/js/js8.jpg");
                document.getElementById("js").style.display="none";
                document.getElementById("button").setAttribute("onclick","Problem8();");
                document.getElementById("program").style.visibility="hidden";	 
                document.getElementsByClassName("inputz")[0].style.display="none"; 
                document.getElementsByClassName("inputy")[0].style.display="none";	 
                document.getElementsByClassName("input")[0].style.display="block";
                document.getElementById("num1").value=""; 
                document.getElementById("num2").value=""; 
                document.getElementById("num3").value=""; 
                document.getElementById("output").innerHTML=""; 
                document.getElementById("num1").disabled = false;
                document.getElementById("button").disabled = false;
                document.getElementById("ex_7").style.display="none";
                document.getElementById("ex_8").style.display="none"; 
                document.getElementById("divBy6").innerHTML="0";
                  document.getElementById("check1").checked=false;
                  document.getElementById("check2").checked=false;
                  document.getElementById("check3").checked=false;
                }       
function Problem8() {
                    //precondition: 
                    //	a is real number
                    //Postcondition:
                    //	output is how many of the entered numbers were divisible by 6, It stops when 0 is entered.                          
                 
                    var a = parseFloat(document.getElementById("num1").value);   
                    
                    if((a!=0)&&(a%6==0)){
                        document.getElementById("output").innerHTML="This is divisible by 6 ";
                        var count= parseFloat(document.getElementById("divBy6").innerHTML);
                        count=count+1;
                        document.getElementById("divBy6").innerHTML=count;
                    }else {
                        document.getElementById("output").innerHTML="This is not divisible by 6";
                        
                    }
                    if (a==0){
                        document.getElementById("output").innerHTML="Program ended";
                        document.getElementById("num1").setAttribute("disabled","true");
                        document.getElementById("button").setAttribute("disabled","true");
                        document.getElementById("ex_8").style.display= "inline";
                    }
                 
                
                       
                    
                }