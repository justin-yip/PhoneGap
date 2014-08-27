function time(){
	document.getElementById("time").innerHTML = clock();
}
function clock(){
	this.date = new Date();
	this.h = date.getHours();
	this.m = date.getMinutes();
	this.s = date.getSeconds();
	if(h<=9){
		h = "0"+h;
	}
	if(m<=9){
		m = "0"+m;
	}
	if(s<=9){
		s = "0"+s;
	}
	return h+":"+m+":"+s;
}