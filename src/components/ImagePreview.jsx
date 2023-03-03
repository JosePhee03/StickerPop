import { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import { Button } from './Button'

export function ImagePreview () {
  const { store, dispatch } = useContext(StoreContext)
  const image = store.originalImage

  const removeImage = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <div className='relative w-full h-full flex justify-center items-center border-8 border-dashed border-cyan-300'>
      <img src={image} alt="Imagen Preview" className='rounded-lg' />
      <Button
        onClick={removeImage}
        className={'bg-orange-600 border-orange-700 absolute top-2 right-2'}
      >
        X
      </Button>
    </div>
  )
}
