import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { useGetProdutosQuery } from '../services/api'
import { adicionar, favoritar } from '../store/reducers/carrinho'
import ProdutoComponente from '../components/Produto'
import * as S from './styles'

const Produtos = () => {
  // 1. Busca os produtos da API automaticamente
  const { data: produtos, isLoading } = useGetProdutosQuery()
  
  // 2. Pega os favoritos do estado global
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)
  
  const dispatch = useDispatch()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <ProdutoComponente
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favoritos.some((f) => f.id === produto.id)}
          // 3. Dispara as ações para o Reducer
          adicionarAoCarrinho={() => dispatch(adicionar(produto))}
          favoritar={() => dispatch(favoritar(produto))}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos