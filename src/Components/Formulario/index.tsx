import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Tafera'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispath = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (event: FormEvent) => {
    event.preventDefault()

    dispath(
      cadastrar({
        titulo,
        prioridade,
        status: enums.Status.PENDENTE,
        descricao
      })
    )
    navigate('/')
  }

  return (
    <>
      <MainContainer>
        <Titulo>Nova tarefa</Titulo>
        <S.Form onSubmit={cadastrarTarefa}>
          <Campo
            required
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            type="text"
            placeholder="Título"
          />
          <Campo
            required
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            as="textarea"
            placeholder="Descrição da tarefa"
          />
          <S.Opcoes>
            <p>Prioridade</p>
            {Object.values(enums.Prioridade).map((prioridade) => (
              <S.Opcao key={prioridade}>
                <input
                  value={prioridade}
                  name="prioridade"
                  type="radio"
                  onChange={(e) =>
                    setPrioridade(e.target.value as enums.Prioridade)
                  }
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                />
                <label htmlFor={prioridade}>{prioridade}</label>
              </S.Opcao>
            ))}
          </S.Opcoes>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </S.Form>
      </MainContainer>
    </>
  )
}

export default Formulario
