import React, { useContext, useReducer } from 'react'
import { getLocalStorage } from '../helpers/localStorage'
import { imageContext } from '../types/ImagStatusType'
import { StoreContext } from './storeContext'
import { storeReducer } from './storeReducer'

const DEFAULT_INITIAL_STORE: imageContext = {
  imageState: null,
  originalImage: null,
  editedImage: null,
  fileImage: null,
  ObjectOfEditedImage: null
}

interface props {
  children: JSX.Element | JSX.Element[]
}

const initialStore = getLocalStorage('GLOBAL_STATE') ?? DEFAULT_INITIAL_STORE

function StoreProvider ({ children }:props) {
  const [store, dispatch] = useReducer(storeReducer, initialStore)

  return (
    <StoreContext.Provider value={{store, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export {StoreProvider, StoreContext}
