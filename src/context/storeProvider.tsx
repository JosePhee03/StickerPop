import React, { useContext, useReducer } from 'react'
import { imageContext } from '../types/ImagStatusType'
import { StoreContext } from './storeContext'
import { storeReducer } from './storeReducer'

const initialStore: imageContext = {
  imageState: null,
  originalImage: null,
  editedImage: null,
  fileImage: null,
  ObjectOfEditedImage: null
}

interface props {
  children: JSX.Element | JSX.Element[]
}


function StoreProvider ({ children }:props) {
  const [store, dispatch] = useReducer(storeReducer, initialStore)

  return (
    <StoreContext.Provider value={{store, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export {StoreProvider, StoreContext}
