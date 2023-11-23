'use client'

import { ReactNode, createContext, useState } from 'react'
import { ProductInfo } from '../components/ProductCard'

interface CartItem extends ProductInfo {
  quantity: number
}

interface CartContextType {
  getCartItems: () => CartItem[]
  addNewItem: (products: CartItem) => void
  increasesItemQuantity: (productId: number, quantity: number) => void
  removeItem: (products: CartItem) => void
  decreasesItemQuantity: (productId: number, quantity: number) => void
  cleanCart: () => void
}

export const CartContext = createContext({} as CartContextType)

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const getCartItems = () => {
    return cartItems
  }

  const addNewItem = (product: CartItem) => {
    setCartItems((state) => [...state, product])
  }

  const increasesItemQuantity = (productId: number, quantity: number) => {
    const updatedItems = cartItems

    updatedItems[productId] = {
      ...updatedItems[productId],
      quantity: updatedItems[productId].quantity + quantity,
    }

    setCartItems(updatedItems)
  }

  const removeItem = (product: CartItem) => {
    const newItems = cartItems
    const index = cartItems.findIndex((item) => item.id === product.id)

    newItems.splice(index, 1)

    setCartItems(newItems)
  }

  const decreasesItemQuantity = (productId: number, quantity: number) => {
    const updatedItems = cartItems

    updatedItems[productId] = {
      ...updatedItems[productId],
      quantity,
    }

    setCartItems(updatedItems)
  }

  const cleanCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        getCartItems,
        addNewItem,
        increasesItemQuantity,
        removeItem,
        decreasesItemQuantity,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
