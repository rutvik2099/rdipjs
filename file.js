function cls(val) {
            document.getElementById("display").value = val;
        }


        function math(val) {
            document.getElementById("display").value += val;
        }

	function add(a,b){
				var x= document.getElementById("display").value
				var y=  document.getElementById("display").value
				sum=Number(x)+Number(y);
				return sum ;
				
				document.getElementById("display").value += add;
				

	}


	function sub(a,b){
				var x= document.getElementById("display").value
				var y=  document.getElementById("display").value
				sub=Number(x)-Number(y);
				return sub ;
				document.getElementById("display").value += sub;
				
	}



	function mul(a,b){
				var x= document.getElementById("display").value
				var y=  document.getElementById("display").value
				mul=Number(x)*Number(y);
				document.getElementById("display").value += mul;
				return mul ;
				

	}


	function div(a,b){
				var x= document.getElementById("display").value
				var y=  document.getElementById("display").value
				div=Number(x)/Number(y);
				return div ;
				document.getElementById("display").value += div;

	}








        function equal() {
            try {
                cls(eval(document.getElementById("display").value))
            } catch (equal) {
                cls('Error')
            }
        }

        function back() {
            var exp = document.form.textview.value;
            document.form.textview.value = exp.substring(0, exp.length - 1);
        }

        function del() {
            var value = document.getElementById("display").value;
            document.getElementById("display").value = value.substr(0, value.length - 1);
        }

        function sqrt() {
            var x = document.getElementById("display").value;
            document.getElementById("display").value = Math.sqrt(x);
		return Math.sqrt(x);
        }

        function power() {
            var x = document.getElementById("display").value;
            document.getElementById("display").value = Math.pow(x, 2);
		return Math.pow(x, 2);
        }

     function Percentage(percent, num){
    		return (percent / 100) * num;
	}


	function abs() {
            var x = document.getElementById("display").value;
            document.getElementById("display").value = Math.abs(x);
		return Math.abs(x);
        }






function validateform(){  
var name=document.myform.name.value;  
var mail=document.myform.mail.value; 
var no= document.myform.no.value; 
var x=document.myform.mail.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");

if (name==null || name==""){  
  alert("Name can't be blank");  
  return false; 

}

function all(name){
   var letters = /^[A-Za-z]+$/;
   if(name.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("Name cannot start with digit");
     return false;
     }
  }
  






 
if(mail==null || mail==""){  
  alert("Mail can't be blank");  
  return false;  
  } 

if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address including '@' and '.' symbols");  
  return false;  
  }  







 if(no==null || no==""){  
  alert("Phone Number can't be blank");  
  return false;  
  } 

if(no.length!=10){ 
alert("Phone Number must be a 10 digit number");  
  return false;  

}

var y = document.myform.no.value;

if(isNaN(y)||y.indexOf(" ")!=-1)
           {
              alert("Enter numeric value & alphabets are not allowed")
              return false; 
           }
         
        

 
} 







function myFun()
		{var str = document.getElementById('txtbox').value;
		var result = checkPalindrome(str);
		}
		
function checkPalindrome(str)
		{
			var orignalStr;
			 str = str.toLowerCase();
			orignalStr = str;
			
			
			str = str.split(''); //split the string 
			str = str.reverse(); //reverse the order of the string
			str = str.join(''); //after join the reverse order array values
			
			var reverseStr = str;
			
	
			// to check how to find the palindrom			
			if(orignalStr == reverseStr){
				alert('The Entered string is Palindrome'); // return "Palindrome" if true

				return true ;
			}else{
				alert('The Entered string is Not Palindrome');
				return false ;
			}
		}






function compare (a,b) {
var a = document.getElementById('word1').value;
var b = document.getElementById('word2').value;

  y = a.split("").sort();
  z = b.split("").sort();
  for (i=0; i<y.length; i++) {
    if(y.length===z.length) {
      if (y[i]===z[i]){
        alert(a + " and " + b + " are anagrams!");
	return true ;
        break;
      }
      else {
        alert(a + " and " + b + " are not anagrams.");
	return false ;
        break;
      }
    }
    else {
      alert(a + " has a different amount of letters than " + b);
    }
    break;
  }
}





















