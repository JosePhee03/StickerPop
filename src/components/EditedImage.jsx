import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/storeContext'
import Spinner from './Spinner'

export function EditedImage ({ processingImage, setProcessingImage }) {
  const { store } = useContext(StoreContext)
  const cloundImage = store.editedImage
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
        if (tries > 20) {
          setProcessingImage(false)
        }
      }
    }
  })
  return (
      <>
        {processingImage
          ? <Spinner/>
          : <img className='max-h-60' src={`${cloundImage}&t=${tries}`} alt="imagen sin fondo" />
        }

      </>
  )
}
