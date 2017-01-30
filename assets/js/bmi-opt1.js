function $() {
var elements = new Array();
for (var i=0;i<arguments.length;i++) {
var element=arguments[i];
if(typeof element==='string') {element=document.getElementById(element);}
if(arguments.length===1) {return element;}
elements.push(element);
}
}
var metrichunit = document.getElementById( 'hi' ),
	metricwunit = document.getElementById( 'wi' );
;
window.onload = function() {
metrichunit.style.display = 'none';
metricwunit.style.display = 'none';
}
function msystem() {
	
	if (document.getElementById("msm1").checked === true) {
        $('thm').innerHTML = ' (Cms)';
        $('twm').innerHTML = ' (Kgs)';
		metrichunit.style.display = 'none';
		metricwunit.style.display = 'none';
	}
	    else if (document.getElementById("msm2").checked === true) {
	        $('thm').innerHTML = ' inches';
	        $('twm').innerHTML = ' lbs';
			metrichunit.style.display = 'block';
			metricwunit.style.display = 'block';
	    }
	}
 	
function bmass (){
var measure= document.querySelector('input[name="msm"]:checked').value,
	ms= measure,
	height=$('hm').value,
	heightunit=$('hi').value,
	weight=$('wm').value,
	weightunit=$('wi').value,
	bmi = document.getElementById('bmi'),
	youAre = document.getElementById('youAre');
	
if(height===null || height.length===0 || weight===null || weight.length===0 ){
$('bmi').textContent="Pl. enter data.";
}else{
$('bmi').textContent="";
}
var you = '';
if((ms==='metric'&&height>0) || (ms==='us'&&height>0)) {
    yourResult.innerHTML = 'Your BMI is:';
}
var heighttotalimperial = height*12 + +heightunit,
	weighttotalimperial = weight*14 + +weightunit;
	//heighttotal = height*100 + +heightunit,
	
if(ms==='metric'&&height>0){
	//$('bmi').textContent=Math.round(weighttotal/(heighttotal*heighttotal/10000)*100)/100 ;  
	$('bmi').textContent=Math.round(weight/(height*height/10000)*100)/100 ;  
}else if(ms==='us'&&height>0){
	$('bmi').textContent=Math.round(703*weighttotalimperial/(heighttotalimperial*heighttotalimperial)*100)/100;
}
if ($('bmi').textContent < 18.5) {
	you = 'You are below the recommended weight for your height and should not be attempting to lose weight. A healthy BMI range is between 18.5-25. We recommend that you consult your GP.</p>';
} else if ($('bmi').textContent > 18.5 && ($('bmi').textContent < 24.9)) {
	you = 'You are a normal weight range for your height. However it is still important to eat healthily.';
} else if ($('bmi').textContent > 24.9 && ($('bmi').textContent < 29.9)) {
	you = 'You are within the overweight range and your health will benefit if you lost a little weight. You certaintly don\'t want to put on any weight. Look at the BMI chart to see your ideal weight range for your height.';
} else {
	you = 'You are classified as obese and your health will greatly benefit if you were able to lose weight. Being obese means that you are at increased risk of diet related diseases such as diabetes and heart disease. Look at the BMI chart to see your ideal weight range for your height. We recommend that you visit your GP to discuss losing weight safely through getting more active and a health balanced diet.';
}
youAre.innerHTML = you;
}
