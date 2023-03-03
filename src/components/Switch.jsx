import { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import { Form } from './Form'
export function Switch () {
  const { store } = useContext(StoreContext)
  const { imageState } = store

  switch (imageState) {
    case 'UPLOAD':
      return <h1>Loading...</h1>
    case 'EDITED':
      return <h1>Edited</h1>
    default:
      return <Form/>
  }
}
