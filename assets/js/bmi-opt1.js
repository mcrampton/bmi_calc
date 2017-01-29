function $() {
var elements = new Array();
for (var i=0;i<arguments.length;i++) {
var element=arguments[i];
if(typeof element==='string') element=document.getElementById(element);
if(arguments.length===1) return element;
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
	var measure= document.querySelector('input[name="msm"]:checked').value;
	
	//arguments[i];
	//if (document.getElementById("msm1").checked === true) {
	//	  measure-type = document.getElementById('msm1').value;
	//  };
	//if (document.getElementById("msm1").checked === true) {
	//	  measure-type = document.getElementById('msm2').value;
	//  };

var ms= measure,
	height=$('hm').value,
	weight=$('wm').value;
if(height===null || height.length===0 || weight===null || weight.length===0 ){
$('bmi').value="Pl. enter data.";
}else{
$('bmi').value="";
}
if(ms==='metric'&&height>0){
	$('bmi').value=Math.round(weight/(height*height/10000)*100)/100+" kg/m2 " ;
}else if(ms==='us'&&height>0){
	$('bmi').value=Math.round(703*weight/(height*height)*100)/100+" lbs/m2 " ;
}
}