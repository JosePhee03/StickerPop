import { useTransition, useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/storeContext'
import Spinner from './Spinner'

export function EditedImage () {
  const { store } = useContext(StoreContext)
  const cloundImage = store.editedImage
  const [processingImage, setProcessingImage] = useState(true)
  const [tries, setTries] = useState(0)

  useEffect(() => {
    if (processingImage) {
      const img = new Image()
      img.src = cloundImage

      img.onload = () => {
        setProcessingImage(false)
      }
      img.onerror = () => {
        setTries(tries + 1)
        if (tries > 10) {
          setProcessingImage(false)
        }
      }
    }
  })
  return (
      <>
        {processingImage
          ? <Spinner/>
          : <img className='h-72 rounded-lg' src={`${cloundImage}&t=${tries}`} alt="imagen sin fondo" />
        }

      </>
  )
}
