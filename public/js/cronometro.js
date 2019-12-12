var intervalo;

function tempo(op,hr,min,sg) {
	if (op == 1) {
		document.getElementById('parar').style.display = "block";
		document.getElementById('comeca').style.display = "none";
	}
	if (op == 2) {
		document.getElementById('pausar').style.display = "nome";
		document.getElementById('recomecar').style.display = "block";
	}
	
	var s = parseInt(sg);
	var m = parseInt(min);
	var h = parseInt(hr);


	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById("hora").innerHTML = "0" + h + "h"; else document.getElementById("hora").innerHTML = h + "h";
		if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + "s"; else document.getElementById("segundo").innerHTML = s + "s";
		if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + "m"; else document.getElementById("minuto").innerHTML = m + "m";		
		s++;
	},1000);
}

function recomecar() {

	var hr = document.getElementById('hora').firstChild.data
	var min = document.getElementById('minuto').firstChild.data
	var seg = document.getElementById('segundo').firstChild.data

	document.getElementById('pausar').style.display = "block";
	document.getElementById('recomecar').style.display = "none";

	tempo(0,hr,min,seg);
}

function pausar() {
	window.clearInterval(intervalo);
	//document.getElementById('pausar').innerHTML += document.getElementById('hora').firstChild.data + "" + document.getElementById('minuto').firstChild.data + "" + document.getElementById('segundo').firstChild.data + "<br>";
	document.getElementById('pausar').style.display = "none";
	document.getElementById('recomecar').style.display = "block";
}

function parar() {
	window.clearInterval(intervalo);
	document.getElementById('parar').style.display = "none";
	document.getElementById('comeca').style.display = "block";
}

function volta() {
	document.getElementById('voltas').innerHTML += document.getElementById('hora').firstChild.data + "" + document.getElementById('minuto').firstChild.data + "" + document.getElementById('segundo').firstChild.data + "<br>";
}

function limpa() {
	document.getElementById('voltas').innerHTML = "";
}
window.onload=tempo(0,0,0,1);
