(() => {
    const criarTarefa = (evento) => {
        evento.preventDefault()

        const lista = document.querySelector('[data-list]')
        const input = document.querySelector(`[data-form-input]`)
        const valor = input.value
        console.log(valor)


        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        const conteudo = `<p class="content">${valor}</p>`

        tarefa.innerHTML = conteudo

        tarefa.appendChild(BotaoConcluir())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa)
        input.value = " "
    }

    const novaTarefa = document.querySelector('[data-form-button]');

    novaTarefa.addEventListener('click', criarTarefa)

    const BotaoConcluir = () => {
        const Botao = document.createElement('button')
        Botao.classList.add('check-button')
        Botao.innerText = 'concluir'

        Botao.addEventListener('click', concluirTarefa)
        return Botao
    }


    const concluirTarefa = (evento) => {
        const botaoConclui = evento.target

        const tarefaCompleta = botaoConclui.parentElement

        tarefaCompleta.classList.toggle('done')
    }

    const BotaoDeleta = () => {
        const botaoDeleta = document.createElement('button')
        botaoDeleta.innerText = 'deletar'
        botaoDeleta.addEventListener('click', Deletar)
        return botaoDeleta
    }

    const Deletar = (evento) => {
        const botaoDeleta = evento.target

        const tarefaCompleta = botaoDeleta.parentElement

        tarefaCompleta.remove()

        return botaoDeleta
    }
})()