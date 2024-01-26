function verificarResposta() {
    var respostaInserida = document.getElementById("resposta").value;
    
    // Verifica se a resposta está correta (substitua "resposta_correta" pela resposta desejada)
    if (respostaInserida.toLowerCase() === "fear") {
        // Redireciona para outra página (substitua "outrapagina.html" pelo nome do seu arquivo HTML de destino)
        window.location.href = '../enigmatica 4/index.html';
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
}