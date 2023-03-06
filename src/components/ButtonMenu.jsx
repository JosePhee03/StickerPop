import { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import { Button } from './Button'

export function ButtonMenu ({ setModalEditor }) {
  const { dispatch } = useContext(StoreContext)

  const handleBack = () => {
    dispatch({ type: 'RESET' })
  }

  const handleEdit = () => {
    setModalEditor(true)
  }

  return (
    <div className='flex justify-between'>
      <Button onClick={handleBack} className={'bg-orange-400 border-orange-500'} >Volver Atrás</Button>
      <Button onClick={handleEdit} className={'bg-green-400 border-green-500'}>Editar Imagen</Button>
    </div>
  )
}
