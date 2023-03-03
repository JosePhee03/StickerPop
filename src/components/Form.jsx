import { useContext } from 'react'
import { Button } from '../components/Button'
import { StoreContext } from '../context/storeContext'
import { fileUpload } from '../service/FileUpdate'
import Outline from '../service/Outline'
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
      const segureURL = data.secure_url
      Outline(publicId)
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
    </div>
  )
}
