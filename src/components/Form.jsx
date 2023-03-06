import { useContext, useRef, useState } from 'react'
import { Button } from './Button'
import { StoreContext } from '../context/storeContext'
import { CloudEffect } from '../service/CloudEffect'
import { fileUpload } from '../service/FileUpdate'
import { Dropzone } from './Dropzone'
import { ImagePreview } from './ImagePreview'

export function Form () {
  const { store, dispatch } = useContext(StoreContext)
  const { fileImage, imageState } = store
  console.log(store)

  const handleUpload = (event) => {
    event.preventDefault()
    const cloundImage = fileUpload(fileImage)

    cloundImage.then(data => {
      const publicId = data.public_id
      const width = data.width
      const [imageEditedURL, imageEdited] = CloudEffect(publicId, width)
      if (imageEditedURL) {
        console.log('imagen editada: ' + imageEditedURL)
        dispatch({ type: 'UPLOAD', payload: [imageEditedURL, data] })
        dispatch({ type: 'EDITED', payload: imageEdited })
      } else console.log('ha ocurrido un error')
    })
  }

  return (
    <div className="max-w-xs h-auto flex flex-col gap-2 m-auto">
      <div className='bg-blue-50 rounded-lg w-80 h-80 p-5 '>

        {imageState === 'DROP'
          ? <ImagePreview/>
          : <Dropzone/>
        }

      </div>
        <Button onClick={handleUpload} className='bg-pastel-light-blue border-pastel-blue w-full'>
          Convertir a sticker
        </Button>
        <p>Progreso: <progress max="100" value={`${10}`}></progress></p>
    </div>
  )
}
