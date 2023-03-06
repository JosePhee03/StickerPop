import { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import { Editor } from './Editor'
import { Form } from './Form'

export function Switch () {
  const { store } = useContext(StoreContext)
  const { imageState } = store

  switch (imageState) {
    case 'UPLOAD':
      return <Editor />
    default:
      return <Form/>
  }
}
