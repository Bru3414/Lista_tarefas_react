import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tafera'
import Tarefa from '../../models/tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Assistir as aulas da EBAC',
      id: 1
    },
    {
      titulo: 'Pagar as contas',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: 'Pagar os boletos antes do vencimento',
      id: 2
    },
    {
      titulo: 'Ir para a academia',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao: 'Fazer o treino A e C',
      id: 3
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find((tarefa) => {
        return tarefa.titulo.toLowerCase() ===
          action.payload.titulo.toLowerCase()
          ? true
          : false
      })

      const ultimaTarefa = state.itens[state.itens.length - 1]

      const novaTarefa = {
        ...action.payload,
        id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
      }

      if (tarefaJaExiste) {
        alert('Ja existe uma tarefa com esse nome')
      } else {
        state.itens.push(novaTarefa)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      state.itens[indexDaTarefa].status = action.payload.finalizado
        ? enums.Status.CONCLUIDA
        : enums.Status.PENDENTE
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions

export default tarefasSlice.reducer
