/*Deve ser desenvolvido um programa que realize um CRUD de carros.
Os inputs devem ser feitos através do PROMPT do HTML. O
funcionamento deve ser o seguinte:
Ao abrir a página, o sistema deve apresentar a seguinte tela:

Bem-vindo ao sistema de CRUD de veículos:

No momento, o sistema tem X carros cadastrados

Escolha uma das opções para interagir com o sistema:

1 - Cadastrar veículo
-> Ao entrar nesta opção o sistema deve pedir os seguintes
dados: modelo, marca, ano, cor e preco.
-> O veículo deve ser adicionado na lista de veículos que
armazena todos os veículos cadastrados
-> Todo veículo deve ter um identificador único. Este
identificador deve ser gerado de forma automática

2 - Listar todos os veículos
-> Ao entrar nesta opção o sistema deve listar os veículos
com o seguinte layout:
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000

3 - Filtrar veículos por marca
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar a marca que quer filtrar
-> Deve ser listado os veículos que forem da mesma marca
-> A lista deve ter o seguinte layout:
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

4 - Atualizar veículo
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar o IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve permitir que o usuário
atualize somente a cor e o preço.

5 - Remover veículo
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar o IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve remover o veículo

6 - Sair do sistema

Regras:
- Os dados de um veículo são: identificador, modelo, marca,
ano, cor, preco

- A opção de filtro deve ser por marca e ordenada pelo preco
- A lista de veículos deve estar ordenada pelo preco.
- Só deve ser possível atualizar a cor e o preço do veículo.*/ 
    
    let listaCarros = [];
    
    let id = 0;
    
    alert('Bem-vindo ao sistema de CRUD de veículos:');
    
    alert(`No momento o sistema tem ${listaCarros.length} carros cadastrados.`);
    
    alert('Escolha uma das opções para interagir com o sistema: ');

    function cadastrarVeiculo(){

        let carro = {};
        
        carro.id = id++;
        
        carro.modelo = prompt('Digite o modelo do carro a ser cadastrado: ');
        
        carro.marca = prompt('Digite a marca do carro a ser cadastrado: ');
        
        carro.ano = Number.parseInt(prompt('Digite o ano do carro a ser cadastrado.'));
        
        carro.cor = prompt('Digite a cor do carro a ser cadastrado: ');
        
        carro.preco = Number.parseFloat(prompt('Digite o preço do carro a ser cadastrado, em reais.'));
        
        listaCarros.push(carro);

    }

    console.log(listaCarros);

    function listarVeiculos(){
    
        for(let i=0; i<listaCarros.length;i++){
            
            console.log(`ID: ${listaCarros[i].id} | Modelo: ${listaCarros[i].modelo} | Cor: ${listaCarros[i].cor} | Preço: R$ ${listaCarros[i].preco.toFixed(2)}`);

        }
    }

    function filtrarVeiculos(){

        let marcaBuscada = prompt('Digite a marca de carro da qual quer realizar a busca');
        
        let filtrados = listaCarros.filter(carro => carro.marca == marcaBuscada);
            
            for(let i=0; i<filtrados.length;i++){
                
                console.log(`ID: ${filtrados[i].id} | Modelo: ${filtrados[i].modelo} | Cor: ${filtrados[i].cor} | Preço: R$ ${filtrados[i].preco.toFixed(2)}`);
            }
    }

    function atualizarVeiculo(){

        let identificador = Number.parseInt(prompt('Digite o identificador do veículo: '));
            
            for(let i=0; i<listaCarros.length;i++){
                
                if(listaCarros[i].id===identificador){

                    listaCarros[i].cor = prompt('Digite a nova cor do veículo para atualizar: ');

                    listaCarros[i].preco = prompt('Digite o novo preço do veículo para atualizar: ');

                }

            }

            if(identificador>listaCarros.length||identificador<0){
                console.log('Veículo não encontrado. Volte ao menu inicial.');
            }

            console.log(listaCarros);
        }

       

    function removerVeiculo(){

        let identificador = Number.parseInt(prompt('Digite o identificador do veículo: '));

        for(let i=0; i<listaCarros.length;i++){
            if(listaCarros[i].id===identificador){
                listaCarros.splice(identificador, 1);
            }
        }

        if(identificador>listaCarros.length||identificador<0){
            console.log('Veículo não encontrado. Volte ao menu inicial.');
        }

        console.log(listaCarros);
    }   

    function sairDoSistema() {
        document.write(``)
       
    } 
    

