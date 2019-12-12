function carregarInput(disciplina) {
    console.log(disciplina);
    document.getElementById("conteudo").innerHTML = montarInput(disciplina);
}
function montarInput(n) {
    var html = '';
    var disc = $("#nomeDisc").val()
    for (let i = 0; i < disciplina.length; i++) {
        if (disc == disciplina[i].nome) {
            for (let j = 1; j < Object.keys(disciplina[i].conteudo).length; j++) {
                html += '<option class="input100" value="'+disciplina[i].conteudo[j]+'">'+disciplina[i].conteudo[j]+'</option>';
            }
        }
    }
    return html;
}
