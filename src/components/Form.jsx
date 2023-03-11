import { useContext, useState } from 'react'
import { Button } from './Button'
import { StoreContext } from '../context/storeContext'
import { CloudEffect } from '../service/CloudEffect'
import { fileUpload } from '../service/FileUpdate'
import { Dropzone } from './Dropzone'
import { ImagePreview } from './ImagePreview'

export function Form () {
  const { store, dispatch } = useContext(StoreContext)
  const [loading, setLoading] = useState(false)
  const { fileImage, imageState } = store

  const handleUpload = (event) => {
    event.preventDefault()
    setLoading(true)
    const cloundImage = fileUpload(fileImage)

    cloundImage.then(data => {
      const publicId = data.public_id
      const width = data.width
      const [imageEditedURL, imageEdited] = CloudEffect(publicId, width)
      if (imageEditedURL) dispatch({ type: 'UPLOAD', payload: [imageEditedURL, imageEdited] })
      else return console.log('ha ocurrido un error')
    })
  }

  return (
    <div className="max-w-xs h-auto flex flex-col gap-2 m-auto">
      <div className='bg-blue-50 rounded-lg w-80 h-80 p-5 '>

        {imageState === 'DROP'
          ? <ImagePreview loading={loading}/>
          : <Dropzone/>
        }

      </div>
      <Button onClick={handleUpload} className='bg-sky-400 border-sky-500 w-full'>
        Convertir a sticker
      </Button>
    </div>
  )
}
