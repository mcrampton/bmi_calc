function formatDecimal(num, numPlaces){
	var snum = new String(parseFloat(num))
	var i=z=0; 
	var sout=ch="" 
	while(i<snum.length && ch != '.' ){
		ch = snum.charAt(i++)
		sout+=ch
	}
	while(i<snum.length && z++<numPlaces){
		ch = snum.charAt(i++)
		sout+=ch
	}
	if(snum.indexOf('.')==-1)sout+='.';
	while(z++<numPlaces)sout+='0';
	return sout
}
function setfocus(f){
	f.focus();
	f.select();
}
function makepos(n){
	return (n<0)? -n: n;
}

var strMess= new Array(
	'Underweight',
	'\'Normal\' weight (Grade 0)',
	'Overweight\/\'plump\' (Grade I)',
	'Moderately obese (Grade II)',
	'Severely obese (Grade III)'
);
function calcbmi(){
	var f= document.frmBMI
	var kg=f.txtKG.value
	var m=f.txtMETRE.value;
	var b=idx=0;
	if(!makepos(parseFloat(kg))>0 ){
		alert('Please enter a valid weight')
		setfocus(f.txtKG)
	}else if(!makepos(parseFloat(m))>0){
		alert('Please enter a valid height')
		setfocus(f.txtMETRE)
	}else{
		if(!f.cmbWeight.selectedIndex==0)kg/=2.2046226
		if(!f.cmbHeight.selectedIndex==0)m*=0.0254
		b =  kg / (m * m)
		if(b<20)idx=0
		else if(b<25)idx=1
		else if(b<30)idx=2
		else if(b<40)idx=3
		else idx=4
		f.txtBMI.value=formatDecimal(b,2)
		f.txtmessage.value=strMess[idx]
	}
}
function clearbmi(){
	var f= document.frmBMI
	f.txtKG.value=''
	f.txtMETRE.value=''
	f.txtBMI.value=''
	f.txtmessage.value=''
}