function verificarResposta() {
    var respostaInserida = document.getElementById("resposta").value;
    
    // Verifica se a resposta está correta (substitua "resposta_correta" pela resposta desejada)
    if (respostaInserida.toLowerCase() === "life") {
        // Redireciona para outra página (substitua "outrapagina.html" pelo nome do seu arquivo HTML de destino)
        window.location.href = '../tela final/index.html';
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
}