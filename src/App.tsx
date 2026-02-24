import Header from './components/Header'
import ListaProdutos from './components/ListaProdutos'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <ListaProdutos />
      </div>
    </>
  )
}

export default App
