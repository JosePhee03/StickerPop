import { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import { Button } from './Button'

export function ButtonMenu () {
  const { dispatch } = useContext(StoreContext)

  const handleBack = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <div className='flex justify-between'>
      <Button onClick={handleBack} className={'bg-orange-400 border-orange-500'} >Volver Atrás</Button>
    </div>
  )
}
