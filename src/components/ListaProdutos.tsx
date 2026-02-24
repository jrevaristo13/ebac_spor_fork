import { useSelector, useDispatch } from 'react-redux'
import { useGetProdutosQuery } from 'services/api'
import { RootState, AppDispatch } from 'store'
import { adicionar, favoritar } from 'store/reducers/carrinho'
import { Produto } from 'models/Produto'
import ProdutoComponente from '../components/Produto'
import * as S from '../styles'

const ListaProdutos = () => {
  // ✅ CORREÇÃO AQUI: use 'data: produtos' em vez de apenas 'produtos'
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

  const dispatch = useDispatch<AppDispatch>()

  if (isLoading) return <h2>Carregando...</h2>
  if (isError) return <h2>Erro ao carregar produtos</h2>
  if (!produtos) return null

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <ProdutoComponente
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favoritos.some((f: Produto) => f.id === produto.id)}
          adicionar={() => {
            console.log('🛒 Adicionando:', produto.nome)
            dispatch(adicionar(produto))
          }}
          favoritar={() => {
            console.log('⭐ Favoritando:', produto.nome)
            dispatch(favoritar(produto))
          }}
        />
      ))}
    </S.Produtos>
  )
}

export default ListaProdutos
