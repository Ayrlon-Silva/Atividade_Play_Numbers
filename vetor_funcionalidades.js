import {
    get_number, print, get_number_min_max, get_positive_number, get_ramdom_num_min_max,
    get_text, get_number_min, get_specific_numbers } from "../../utils/inputs.js"


import {
    adcionar_valor_a_vetor, dividir, multiplicar_por_um_valor, gerar_vetor_vazio,
    mapear_vetor,show_vetor, tamanho, elevar_itens_a_um_valor, reduzir_itens_a_uma_fracao,
    subistituir_negativos_por_numero_aleatorio, remover_valor_do_vetor, remover_item_por_posicao,
    editar_valor_de_posicao_N, ordem_crescente
    } from "./vetor_utils.js"


import { readFileSync } from 'fs'

export function inicializar_vetor_numerico(vetor_principal){
    const menu_vetor = `
    \n********************************\n
    1 - Vetor com valores automaticos. 
        
    2 - Informar valores manualmente.
        
    3 - Carregar valores de um arquivo.
        
    >> `

    let opcao = get_number(menu_vetor)

    while(opcao !== 1 && opcao !== 2 && opcao !== 3){
        print(`>> Opcao invalida !! Por favor escolha 1, 2 ou 3. `)
        opcao = get_number(menu_vetor)
    }
    

    if(opcao === 1){
        const tamanho_vetor = get_positive_number('Tamanho do vetor ? : ')
        let minimo = get_number('Restricao de valor minimo : ')
        let maximo = get_number_min('Restricao de valor maximo : ', minimo + 1)

        vetor_principal = gerar_vetor_com_valores_automaticos(tamanho_vetor, minimo, maximo)
    }
    else if(opcao === 2){
        const tamanho_vetor = get_positive_number('Tamanho do vetor ? : ')
        let minimo = get_number('Restricao de valor minimo : ')
        let maximo = get_number_min('Restricao de valor maximo : ', minimo + 1)

        vetor_principal = prencher_valores_manualmente(tamanho_vetor, minimo, maximo)
    }
    else if(opcao === 3){
        const nome_arquivo = get_text('Nome do arquivo : ')
        vetor_principal = carregar_valores_de_arquivo(nome_arquivo)
    }


    return vetor_principal
}



export function gerar_vetor_com_valores_automaticos(tamanho_vetor, minimo, maximo){
    const vetor_automatico = gerar_vetor_vazio()

    for(let index = 0; index < tamanho_vetor; index++){
        const valor = get_ramdom_num_min_max(minimo, maximo)

        adcionar_valor_a_vetor(vetor_automatico, valor)
    }

    return vetor_automatico
}



export function prencher_valores_manualmente(tamanho_vetor, min, max){
    const vetor_manual = gerar_vetor_vazio()

    for(let index = 0; index < tamanho_vetor; index++){
        const valor = get_number_min_max(`Digite um valor (entre ${min} e ${max}) : `, min, max)

        adcionar_valor_a_vetor(vetor_manual, valor)
    }

    return vetor_manual
}

export function carregar_valores_de_arquivo(nome_arquivo){
    const arquivo = readFileSync(nome_arquivo, 'utf-8')
    let valores = dividir(arquivo, ',')

    valores = mapear_vetor(valores, Number)

    return valores
}



export function mostrar_valores_vetor(vetor){
    return show_vetor(vetor)
}



export function resetar_vetor(vetor){
    const tamanho_vetor = tamanho(vetor)
    const vetor_resetado = gerar_vetor_vazio()

    const valor_padrao = get_number('Digite o valor padrao para os index do vetor : ')

    for(let i = 0; i < tamanho_vetor; i++){
        adcionar_valor_a_vetor(vetor_resetado, valor_padrao)
    }

    return vetor_resetado
}


export function mostrar_qtd_de_itens(vetor){
    const tamanho_vetor = tamanho(vetor)

    print(`O vetor possui ${tamanho_vetor} itens. `)
}


export function ver_Menor_e_Maior_valores_e_suas_posições(vetor){
    let menor_valor = vetor[0]
    let index_menor = 0

    let maior_valor = vetor[0]
    let index_maior = 0

    for(let i = 0; i < tamanho(vetor); i++){

        if(vetor[i] < menor_valor){
            menor_valor = vetor[i]
            index_menor = i
        }

        if(vetor[i] > maior_valor){
            maior_valor = vetor[i]
            index_maior = i
        }
 
    }

    print(`
    \n*******************
    >>> Menor valor <<<
    Valor : ${menor_valor}
    Posicao : ${index_menor}
    --------------------
    >>> Maior valor <<<
    Valor : ${maior_valor}
    Posicao : ${index_maior}
    ********************\n`)
}

export function calcular_media_dos_Valores(vetor){
    let somatorio = 0
    const qtd_elementos = tamanho(vetor)

    for(let valor of vetor){
        somatorio = somatorio + valor
    }

    const media_valores = somatorio / qtd_elementos
    
    print(`\n
    ******************************************
    > Media dos valores do vetor : ${media_valores.toFixed(2)}
    -------------------------------------------\n
    `)
}



export function calcular_somatorio_dos_valores(vetor){
    let somatorio = 0

    for(let valor of vetor){
        somatorio = somatorio + valor
    }

    print(`\n
    ******************************************
    > Somatorio dos valores do vetor : ${somatorio}
    --------------------------------------------\n
    `)
}



export function mostrar_valores_positivos_e_quantidade(vetor){
    let positivos = 0
    let valores_positivos = gerar_vetor_vazio()

    for(let valor of vetor){
        if(valor > 0){
            adcionar_valor_a_vetor(valores_positivos, valor)
            positivos++
        }
    }

    print(`\n
    ---------------------
    ===== POSITIVOS =====
    ${valores_positivos}
    ---------------------
    > foram encontrados ${positivos} valores positivos.
    `)

}



export function mostrar_valores_negativos_e_quantidade(vetor){
    let negativos = 0
    let valores_negativos = gerar_vetor_vazio()

    for(let valor of vetor){
        if(valor < 0){
            adcionar_valor_a_vetor(valores_negativos, valor)
            negativos++
        }
    }

    print(`\n
    ---------------------
    ===== NEGATIVOS =====
    ${valores_negativos}
    ---------------------
    > foram encontrados ${negativos} valores negatvios.
    `)

}

export function atualizar_todos_os_valores_por_uma_regra(vetor_principal){
    const menu_regra = `
    \n**************************************************************************
    > Escolha uma regra : 

    1 - Multiplicar por um valor.

    2 - Elevar a um valor (exponenciacao).

    3 - Reduzir a uma fracao.

    4 - Substituir valores negativos por um numero aleatorios de uma faixa.

    5 - Ordenar valores.

    6 - Embaralhar valores.

    >> `


    let opcao = get_specific_numbers(menu_regra, 1, 2, 3, 4, 5, 6)

    if(opcao === 1){
        vetor_principal = multiplicar_por_um_valor(vetor_principal)
    }
    else if(opcao === 2){
        vetor_principal = elevar_itens_a_um_valor(vetor_principal)
    }
    else if(opcao === 3){
        vetor_principal = reduzir_itens_a_uma_fracao(vetor_principal)
    }
    else if(opcao === 4){
        vetor_principal = subistituir_negativos_por_numero_aleatorio(vetor_principal)
    }
    else if(opcao === 5){
        vetor_principal = ordenar_valores_em_crescente_ou_decrescente(vetor_principal)
    }

    return vetor_principal
}

export function ordenar_valores_em_crescente_ou_decrescente(vetor_principal){
    const menu_ordem = `\n
    ***************************
    1 - Ordem crescente.
    
    2 - Ordem descrescente.
    ---------------------------\n`

    let ordem = get_specific_numbers(menu_ordem, 1, 2)

    if(ordem === 1){
        vetor_principal = ordem_crescente(vetor_principal)
    }

    return vetor_principal
}


export function adcionar_novos_valores(vetor){
    
    let posicao = tamanho(vetor) 
    const qtd = get_positive_number('Quantos valores deseja adicionar ao vetor ? : ')

    for(let i = 0; i < qtd; i++){
        const valor = get_number(`Digite o valor a ser inserido na posicao [${posicao}] : `)

        adcionar_valor_a_vetor(vetor, valor)
        posicao++
    }

    return vetor
}


export function remover_itens_por_valor_exato(vetor_principal){
    const valor_exato = get_number('Qual valor deve ser removido ? ')

    return remover_valor_do_vetor(vetor_principal, valor_exato)
}


export function remover_por_posição(vetor_principal){
    const max = tamanho(vetor_principal) - 1
    const posicao = get_number_min_max('Remover item de qual posicao ? : ', 0, max)

    return remover_item_por_posicao(vetor_principal, posicao)
}


export function editar_valor_especifico_por_posicao(vetor_principal){
    const max = tamanho(vetor_principal) - 1
    const posicao = get_number_min_max('Remover item de qual posicao ? : ', 0, max)

    return editar_valor_de_posicao_N(vetor_principal, posicao)
}
