import BotaoAdicionar from '../../Components/BotaoAdicionar'
import ListaDeTarefas from '../../Container/ListaDeTarefas'
import Sidebar from '../../Container/Sidebar'

const Home = () => {
  return (
    <>
      <Sidebar mostrarFiltros />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
