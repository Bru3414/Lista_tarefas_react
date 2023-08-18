import { useSelector } from 'react-redux'

import Tarefa from '../../Components/Tarefa'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (tarefa) => tarefa.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
    } else {
      return itens
    }

    return tarefasFiltradas
  }

  const exibeFiltragem = (quantidade: number) => {
    let mensagem = ''
    const plural = quantidade > 1 ? 's' : ''
    const complemento =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    // if (quantidade === 0) return 'Nenhuma tarefa encontrada.'

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa${plural} encontrada${plural} como: "todas" ${complemento}`
    } else {
      mensagem = `${quantidade} tarefa${plural} encontrada${plural} como: "${criterio}=${valor}" ${complemento}`
    }

    return mensagem
  }

  const mensagem = exibeFiltragem(filtraTarefas().length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {filtraTarefas().map((t) => (
          <li key={t.id}>
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
