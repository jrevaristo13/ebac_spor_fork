import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[] // Adicionamos esta linha
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: [] // Inicializamos como lista vazia
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const jogo = action.payload
      if (state.itens.find((p) => p.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    },
    // Adicionamos a lógica de favoritar aqui:
    favoritar: (state, action: PayloadAction<Produto>) => {
      const jogo = action.payload
      const index = state.favoritos.findIndex((p) => p.id === jogo.id)

      if (index !== -1) {
        // Se já está nos favoritos, remove
        state.favoritos.splice(index, 1)
      } else {
        // Se não está, adiciona
        state.favoritos.push(jogo)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer