

    linha_atual = 2
    prox_linha = 3
    item_atual = "item_"+linha_atual

function adicionarLinha(){

    var nova_linha = document.createElement("div");


    
    nova_linha.className = "row dados_item"
    nova_linha.id = "item_"+prox_linha
    nova_linha.innerHTML = "<div class='col-1'><span>"+prox_linha+"</span></div><div class='col-7'><input type='text' id='item_"+prox_linha+"' placeholder='Nome do item "+prox_linha+"'></div> <div class='col-2'><input type='number' id='item_qnt_"+prox_linha+"' placeholder='0'></div><div class='col-2'><span>R$</span> <input type='number' class='item_valor' id='item_valor_"+prox_linha+"' placeholder='000,00' ></div>"
    
    document.getElementById(item_atual).appendChild(nova_linha);
    prox_linha = prox_linha+1
    linha_atual = linha_atual+1
    item_atual = "item_"+linha_atual
  }
