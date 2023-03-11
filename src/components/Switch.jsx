import { useContext, useEffect } from 'react'
import { StoreContext } from '../context/storeContext'
import { setlocalStorage } from '../helpers/localStorage'
import { Editor } from './Editor'
import { Form } from './Form'

export function Switch () {
  const { store } = useContext(StoreContext)
  const { imageState } = store

  useEffect(() => {
    setlocalStorage('GLOBAL_STATE', store)
  }, [store])

  switch (imageState) {
    case 'UPLOAD':
      return <Editor />
    default:
      return <Form/>
  }
}
