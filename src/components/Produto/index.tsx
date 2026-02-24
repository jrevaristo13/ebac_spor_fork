import React from 'react'
import { Produto } from '../../models/Produto'

interface Props {
  produto: Produto
  estaNosFavoritos: boolean
  adicionar: () => void
  favoritar: () => void
}

const ProdutoComponente: React.FC<Props> = ({
  produto,
  estaNosFavoritos,
  adicionar,
  favoritar
}) => {
  return (
    <div>
      <h3>{produto.nome}</h3>
      <img src={produto.imagem} alt={produto.nome} />
      <p>R$ {produto.preco.toFixed(2)}</p>
      <p>{produto.descricao}</p>

      <button onClick={adicionar}>Adicionar ao Carrinho</button>
      <button onClick={favoritar}>
        {estaNosFavoritos ? 'Remover dos Favoritos' : 'Favoritar'}
      </button>
    </div>
  )
}

export default ProdutoComponente
