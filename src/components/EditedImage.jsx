import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/storeContext'

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
      <img className='rounded-lg' src={`${cloundImage}&t=${tries}`} alt="imagen sin fondo" />
  )
}
