import { useDispatch, useSelector } from 'react-redux'
import { alteraTermo } from '../../store/reducers/filtro'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Tafera'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const Sidebar = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const termo = useSelector((state: RootReducer) => state.filtro.termo)

  return (
    <S.Aside>
      {mostrarFiltros ? (
        <div>
          <Campo
            type="text"
            placeholder="Buscar"
            value={termo}
            onChange={(e) => dispatch(alteraTermo(e.target.value))}
          />
          <S.Filtros>
            <FiltroCard
              valor={enums.Status.PENDENTE}
              criterio="status"
              legenda="pendentes"
            />
            <FiltroCard
              valor={enums.Status.CONCLUIDA}
              criterio="status"
              legenda="concluídas"
            />
            <FiltroCard
              valor={enums.Prioridade.URGENTE}
              criterio="prioridade"
              legenda="urgentes"
            />
            <FiltroCard
              valor={enums.Prioridade.IMPORTANTE}
              criterio="prioridade"
              legenda="importante"
            />
            <FiltroCard
              valor={enums.Prioridade.NORMAL}
              criterio="prioridade"
              legenda="normal"
            />
            <FiltroCard criterio="todas" legenda="todas" />
          </S.Filtros>
        </div>
      ) : (
        <Botao onClick={() => navigate('/')}>Voltar a lista de tarefas</Botao>
      )}
    </S.Aside>
  )
}

export default Sidebar
