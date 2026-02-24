import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )
  const favoritos = useSelector(
    (state: RootState) => state.carrinho.favoritos
  )

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    return acc + item.preco
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        {/* Ícone de coração para favoritos */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginRight: '4px', verticalAlign: 'middle' }}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span>{favoritos.length} favoritos</span>
        
        {/* Ícone de carrinho */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ margin: '0 8px', verticalAlign: 'middle' }}
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span>
          {itensNoCarrinho.length} itens, valor total:{' '}
          {valorTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </div>
    </S.Header>
  )
}

export default Header