var intervalo;

function tempo(op,hr,min,seg) {
	if (op == 1) {
		document.getElementById('comeca').innerHTML = "<button class='contact100-form-btn' onclick='pause()'> PAUSAR </button><button class='contact100-form-btn' onclick='parar()'> PARAR </button>";
	}
	var s = parseInt(seg);
	var m = parseInt(min);
	var h = parseInt(hr);
	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById("hora").value = "0" + h + "h"; else document.getElementById("hora").value = h + "h";
		if (s < 10) document.getElementById("segundo").value = "0" + s + "s"; else document.getElementById("segundo").value = s + "s";
		if (m < 10) document.getElementById("minuto").value = "0" + m + "m"; else document.getElementById("minuto").value = m + "m";		
		s++;
	},1000);
}

function parar() {
	window.clearInterval(intervalo);
}

function pause() {
	document.getElementById('comeca').innerHTML = "<button class='contact100-form-btn' onclick='recomecar()'> CONTINUAR </button><button class='contact100-form-btn' onclick='parar()'> PARAR </button>";
}

function recomecar(){
	var hr = document.getElementById('hora').value
	var min = document.getElementById('minuto').value
	var seg = document.getElementById('segundo').value

	document.getElementById('comeca').innerHTML = "<button class='contact100-form-btn' onclick='pause()'> PAUSAR </button><button class='contact100-form-btn' onclick='parar()'> PARAR </button>";
	tempo(0,hr,min,seg);
}

//window.onload=tempo;var intervalo;

function tempo(op,hr,min,seg) {
	if (op == 1) {
		document.getElementById('comeca').innerHTML = "<button class='contact100-form-btn' onclick='pause()'> PAUSAR </button><button class='contact100-form-btn' onclick='parar()'> PARAR </button>";
	}
	var s = parseInt(seg);
	var m = parseInt(min);
	var h = parseInt(hr);
	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById("hora").value = "0" + h + "h"; else document.getElementById("hora").value = h + "h";
		if (s < 10) document.getElementById("segundo").value = "0" + s + "s"; else document.getElementById("segundo").value = s + "s";
		if (m < 10) document.getElementById("minuto").value = "0" + m + "m"; else document.getElementById("minuto").value = m + "m";		
		s++;
	},1000);
}

function parar() {
	window.clearInterval(intervalo);
}

function pause() {
	document.getElementById('comeca').innerHTML = "<button class='contact100-form-btn' onclick='recomecar()'> CONTINUAR </button><button class='contact100-form-btn' onclick='parar()'> PARAR </button>";
}

function recomecar(){
	var hr = document.getElementById('hora').value
	var min = document.getElementById('minuto').value
	var seg = document.getElementById('segundo').value

	document.getElementById('comeca').innerHTML = "<button class='contact100-form-btn' onclick='pause()'> PAUSAR </button><button class='contact100-form-btn' onclick='parar()'> PARAR </button>";
	tempo(0,hr,min,seg);
}

//window.onload=tempo;