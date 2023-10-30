import { print, get_number, get_text, get_number_min, get_ramdom_num_min_max } from "../../utils/inputs.js"

export function show_vetor(vetor, nome = 'Vetor'){
    print(`\n<<<< ${nome} >>>> \n`)
    print(vetor)
    print(`\n------------------`)
}

export function adcionar_valor_a_vetor(vetor, valor){
    return vetor.push(valor)
}

export function gerar_vetor_vazio(){
    return Array(0)
}

export function gerar_vetor_tamanho_N(tamanho){
    return Array(tamanho)
}

export function tamanho(colecao){
    return colecao.length
}

export function dividir(colecao,separador){
    return colecao.split(separador)
}

export function retornar_menor_valor(vetor){
    let menor_valor = vetor[0]

    for(let i = 0; i < tamanho(vetor); i++){
        const valor_atual = vetor[i]

        if(valor_atual < menor_valor){
            menor_valor = valor_atual
        }
    }

    return menor_valor
}



export function retornar_index_menor_valor(vetor){
    let menor_valor = vetor[0]
    let index_menor_valor = 0

    for(let i = 0; i < tamanho(vetor); i++){
        const valor_atual = vetor[i]

        if(valor_atual < menor_valor){
            index_menor_valor = i
        }
    }

    return index_menor_valor
}


export function retornar_maior_valor(vetor){
    let maior_valor = vetor[0]

    for(let i = 0; i < tamanho(vetor); i++){
        const valor_atual = vetor[i]

        if(valor_atual > maior_valor){
            maior_valor = valor_atual
        }
    }

    return maior_valor
}

export function retornar_index_maior_valor(vetor){
    let maior_valor = vetor[0]
    let index_maior_valor = 0

    for(let i = 0; i < tamanho(vetor); i++){
        const valor_atual = vetor[i]

        if(valor_atual > maior_valor){
            index_maior_valor = i
        }
    }

    return index_maior_valor
}

/*export function mapear_vetor(vetor, funcao){
    return vetor.map(funcao)
}*/

export function mapear_vetor(vetor, funcao){
    const vetor_mapeado = []
    
    for(let index = 0; index < tamanho(vetor); index++){
        const valor = funcao(vetor[index])

        adcionar_valor_a_vetor(vetor_mapeado, valor)
    }

    return vetor_mapeado
}

export function multiplicar_por_um_valor(vetor){
    const tamanho_vetor = tamanho(vetor)
    const vetor_multiplicado = gerar_vetor_vazio()

    const valor = get_number('Multiplicar por qual valor ? : ')

    for(let i = 0; i < tamanho_vetor; i++){
        const novo_valor = vetor[i] * valor

        adcionar_valor_a_vetor(vetor_multiplicado, novo_valor)
    }

    return vetor_multiplicado
}

export function elevar_itens_a_um_valor(vetor){
    const tamanho_vetor = tamanho(vetor)
    const vetor_exponenciado = gerar_vetor_vazio()

    const valor = get_number('Exponeciar por qual valor ? : ')

    for(let i = 0; i < tamanho_vetor; i++){
        const novo_valor = vetor[i] ** valor

        adcionar_valor_a_vetor(vetor_exponenciado, novo_valor)
    }

    return vetor_exponenciado
}



export function reduzir_itens_a_uma_fracao(vetor){
    let fracao = get_text('Reduzir a qual fracao ? (ex: 1/5) : ')

    fracao = dividir(fracao, '/')
    
    const [numerador, denominador] = mapear_vetor(fracao,Number)

    const vetor_reduzido = gerar_vetor_vazio()

    for(let i = 0; i < tamanho(vetor); i++){
        const novo_valor = (vetor[i] * numerador) / denominador
        
        adcionar_valor_a_vetor(vetor_reduzido, novo_valor)
    }

    return vetor_reduzido
}




export function subistituir_negativos_por_numero_aleatorio(vetor){
    const minimo = get_number('Valor minimo para o numero aleatorio : ')
    const maximo = get_number_min('Valor maximo para o numero aleatorio : ', minimo + 1)

    const vetor_modificado = gerar_vetor_vazio()

    for(let i = 0; i < tamanho(vetor); i++){
        const valor_atual = vetor[i]

        if(valor_atual < 0){
            const novo_valor = get_ramdom_num_min_max(minimo, maximo)
            
            adcionar_valor_a_vetor(vetor_modificado, novo_valor)
            continue
        }

        adcionar_valor_a_vetor(vetor_modificado, valor_atual)
    }

    return vetor_modificado
}

export function remover_valor_do_vetor(vetor, valor_desejado){
    const novo_vetor = gerar_vetor_vazio()

    for(let i = 0; i < tamanho(vetor); i++){
        const valor_atual = vetor[i]

        if(valor_atual === valor_desejado){
            continue
        }

        adcionar_valor_a_vetor(novo_vetor, valor_atual)
    }

    return novo_vetor
}


export function remover_item_por_posicao(vetor, posicao){
    const novo_vetor = gerar_vetor_vazio()

    for(let i = 0; i < tamanho(vetor); i++){
        if(i === posicao){
            continue
        }

        adcionar_valor_a_vetor(novo_vetor, vetor[i])
    }

    return novo_vetor
}



export function editar_valor_de_posicao_N(vetor, posicao){
    const novo_vetor = gerar_vetor_vazio()

    const novo_valor = get_number(`Qual valor deseja adcionar a posicao [${posicao}] ? : `)

    for(let i = 0; i < tamanho(vetor); i++){
        if(i === posicao){
            adcionar_valor_a_vetor(novo_vetor, novo_valor)
            continue
        }

        adcionar_valor_a_vetor(novo_vetor, vetor[i])
    }

    return novo_vetor
}


export function ordem_crescente(vetor){
    if (tamanho(vetor) < 2) {
        return vetor
    }
    else {
        const pivo = vetor [0]
        const menores = []
        const maiores = []
    
            for (let i = 1; i < tamanho(vetor); i++) {
                const valor = vetor[i]

                if (valor <= pivo) {
                menores[tamanho(menores)] = valor
                } else {
                maiores[tamanho(maiores)] = valor
                }
            }
  
        return ordem_crescente(menores).concat(pivo, ordem_crescente(maiores))
    }
}

export function adcionar_valor_em_posicao_N(vetor, posicao, valor_desejado){
    const novo_vetor = gerar_vetor_vazio()

    for(let i = 0; i <= tamanho(vetor); i++){
        const valor = vetor[i]
        if(i === posicao){
            adcionar_valor_a_vetor(novo_vetor, valor_desejado)
            continue
        }

        adcionar_valor_a_vetor(novo_vetor, valor)
    }

    return novo_vetor
}