import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'

const Header = () => {
  // Buscamos o estado global diretamente aqui
  const itensNoCarrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    return acc + item.preco
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src="caminho-da-sua-imagem" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
