linha_atual = 2
prox_linha = 3
item_atual = "item_"+linha_atual
item_prox = "item_"+prox_linha


function adicionarLinha(){

    // Definição para criar uma nova div
    var nova_linha = document.createElement("div");
    
    // Define o nome da classe principal
    nova_linha.className = "row dados_item"

    // Adiciona um ID para a linha nova
    nova_linha.id = "item_"+prox_linha

    // Corpo da nova linha com as variáveis
    nova_linha.innerHTML = "<div class='col-1'><a onclick=\"apagarLinha(\'"+item_prox+"\')\" class='btn-excluir'>Excluir</a> <span>"+prox_linha+"</span></div><div class='col-7'><input type='text' id='item_"+prox_linha+"' placeholder='Descrição do Item'></div> <div class='col-2'><input type='number' id='item_qnt_"+prox_linha+"' placeholder='0'></div><div class='col-2'><span>R$</span> <input type='number' class='item_valor' id='item_valor_"+prox_linha+"' placeholder='000,00' ></div>"
    
    // Procura a DIV das linhas para adicionar a nova linha
    document.getElementById("lista_linhas").appendChild(nova_linha);

    // Atualizar o valor das varíaveis
    prox_linha = prox_linha+1
    linha_atual = linha_atual+1
    item_atual = "item_"+linha_atual
    item_prox = "item_"+prox_linha

  }



function imprimirDocumento() {

// Imprime o documento com versão nativa
    window.print()
}



function apagarLinha(id_linha){
    var linha_selecionada = id_linha;
    document.getElementById(linha_selecionada).remove();
}