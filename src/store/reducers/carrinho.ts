// src/store/reducers/carrinho.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../models/Produto'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const index = state.favoritos.findIndex((f) => f.id === action.payload.id)
      if (index === -1) {
        state.favoritos.push(action.payload)
      } else {
        state.favoritos.splice(index, 1)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionar, favoritar, remover } = carrinhoSlice.actions

export default carrinhoSlice.reducer
