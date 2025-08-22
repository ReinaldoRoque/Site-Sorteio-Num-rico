function sorteio(){

    //exibir a caixa de resultado
    caixa_resultado = document.querySelector('#caixa-resultado');
    caixa_resultado.hidden = false;
    
    //capturar a div que vai exibir os numeros sorteados
    div_resultado = document.querySelector('#resultado');
    
    //capturar a quantidade de numeros a ser sorteado
    quantidade_numeros = document.querySelector('#qtd-numeros').value;
    
    //criar um vetor
    vetor_sorteio = new Array();
    
    for(i=1; i<=quantidade_numeros; i++){
        numero_sorteado=Math.ceil(Math.random()*60);
    
        //verificar se o numero sorteado está dentro do vetor
        sorteou = vetor_sorteio.indexOf(numero_sorteado);
        
        //verifico se existe o numero sorteado no vetor
        if (sorteou>=0){
            //caso o numero sorteado exista, decrementar 1 no meu contador da repetição e então continuar execução        
            i--;
            continue;
        }else{
            //caso o numero sorteado nao existir no vetor, então adicionar o numero ao vetor para que na proxima repetição ele também seja verificado
            vetor_sorteio.push(numero_sorteado);
    
            //exibir o numero sorteado na tela
            
            //criar uma tag via javascript
            span = document.createElement('span');
            span.innerHTML = numero_sorteado + " ";
            span.id = 'numero-sorteado';
    
            //adiciona o span criado a minha div resultado
            div_resultado.appendChild(span);
        }
        
        console.log(numero_sorteado);
    }
    
        
    }