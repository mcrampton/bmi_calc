function $() {
var elements = new Array();
for (var i=0;i<arguments.length;i++) {
var element=arguments[i];
if(typeof element==='string') {element=document.getElementById(element);}
if(arguments.length===1) {return element;}
elements.push(element);
}
}

function msystem() {
	
	if (document.getElementById("msm1").checked === true) {
        $('thm').innerHTML = ' (Cms)';
        $('twm').innerHTML = ' (Kgs)';
	    }
	    else if (document.getElementById("msm2").checked === true) {
	        $('thm').innerHTML = ' (inches)';
	        $('twm').innerHTML = ' (lbs)';
	    }
	    else {
	        // DO NOTHING
	        }
	    }
 	
function bmass (){
var measure= document.querySelector('input[name="msm"]:checked').value,
	ms= measure,
	height=$('hm').value,
	weight=$('wm').value,bmi = document.getElementById('bmi'),
	youAre = document.getElementById('youAre');
	
if(height===null || height.length===0 || weight===null || weight.length===0 ){
$('bmi').value="Pl. enter data.";
}else{
$('bmi').value="";
}

      	var you = '';

if(ms==='metric'&&height>0){
	$('bmi').value=Math.round(weight/(height*height/10000)*100)/100 ;
    
if ($('bmi').value < 18.5) {
	you = 'Underweight';
} else if ($('bmi').value > 18.5 && ($('bmi').value < 24.9)) {
	you = 'Normal';
} else if ($('bmi').value > 24.9 && ($('bmi').value < 29.9)) {
	you = 'Overweight';
} else {
	you = 'Obese';
}

youAre.innerHTML = you;
    
}else if(ms==='us'&&height>0){
	$('bmi').value=Math.round(703*weight/(height*height)*100)/100;
}


}
