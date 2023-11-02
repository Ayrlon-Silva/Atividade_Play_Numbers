import { get_number, enter_to_continue, print } from '../../utils/inputs.js'

import {

    inicializar_vetor_numerico , mostrar_valores_vetor, resetar_vetor, mostrar_qtd_de_itens, 
    ver_Menor_e_Maior_valores_e_suas_posições, calcular_media_dos_Valores, calcular_somatorio_dos_valores, 
    mostrar_valores_positivos_e_quantidade, mostrar_valores_negativos_e_quantidade, atualizar_todos_os_valores_por_uma_regra,
    adcionar_novos_valores, remover_itens_por_valor_exato, remover_por_posição, editar_valor_especifico_por_posicao,
    salvar_valores_em_arquivo

        } from './vetor_funcionalidades.js'

import { gerar_vetor_vazio } from './vetor_utils.js'

function main(){
    
    let opcao = get_number(menu)

    let vetor_principal = gerar_vetor_vazio()

    while(opcao !== 16){
        if(opcao === 1){
            vetor_principal = inicializar_vetor_numerico(vetor_principal)
        }
        else if(opcao === 2){
            mostrar_valores_vetor(vetor_principal)
        }
        else if(opcao === 3){
            vetor_principal = resetar_vetor(vetor_principal)
        }
        else if(opcao === 4){
            mostrar_qtd_de_itens(vetor_principal)
        }
        else if(opcao === 5){
            ver_Menor_e_Maior_valores_e_suas_posições(vetor_principal)
        }
        else if(opcao === 6){
            calcular_media_dos_Valores(vetor_principal)
        }
        else if(opcao === 7){
            calcular_somatorio_dos_valores(vetor_principal)
        }
        else if(opcao === 8){
            mostrar_valores_positivos_e_quantidade(vetor_principal)
        }
        else if(opcao === 9){
            mostrar_valores_negativos_e_quantidade(vetor_principal)
        }
        else if(opcao === 10){
            vetor_principal = atualizar_todos_os_valores_por_uma_regra(vetor_principal)
        }
        else if(opcao === 11){
            vetor_principal = adcionar_novos_valores(vetor_principal)
        }
        else if(opcao === 12){
            vetor_principal = remover_itens_por_valor_exato(vetor_principal)
        }
        else if(opcao === 13){
            vetor_principal = remover_por_posição(vetor_principal)
        }
        else if(opcao === 14){
            vetor_principal = editar_valor_especifico_por_posicao(vetor_principal)
        }
        else if(opcao === 15){
            salvar_valores_em_arquivo(vetor_principal)
        }
        enter_to_continue()
        opcao = get_number(menu)
    }

    print(`\n
    -------------------------
    Fim do programa ! byebye <3
    -------------------------
    `)
    salvar_valores_em_arquivo(vetor_principal)

}


const menu = `
================ PLAY NUMBERS ================\n
( 1 )  - Inicializar vetor numerico.

( 2 )  - Mostrar todos os valores.

( 3 )  - Resetar vetor (com valor padrao).

( 4 )  - Ver quantidade de itens no vetor.

( 5 )  - Ver Menor e Maior valores e suas posicoes.

( 6 )  - Media dos Valores.

( 7 )  - Somatorio dos Valores.

( 8 )  - Mostrar Valores Positivos e Quantidade.

( 9 )  - Mostrar Valores Negativos e Quantidade.

( 10 ) - Atualizar todos os valores por uma regra.

( 11 ) - Adicionar Novos Valores.

( 12 ) - Remover Itens por Valor exato.

( 13 ) - Remover por Posicao.

( 14 ) - Editar valor especifico por Posicao.

( 15 ) - Salvar valores em arquivo.

( 16 ) - Sair (salvar valores automaticamente ao sair).

>>> `

main()