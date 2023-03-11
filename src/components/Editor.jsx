import { useContext, useState } from 'react'
import { StoreContext } from '../context/storeContext'
import { downloadImage } from '../service/DownloadImage'
import { Button } from './Button'
import { ButtonMenu } from './ButtonMenu'
import { EditedImage } from './EditedImage'

export function Editor () {
  const { store } = useContext(StoreContext)
  const { editedImage } = store
  const [processingImage, setProcessingImage] = useState(true)

  const handleDownload = async () => {
    await downloadImage(editedImage, 'mi-sticker.png')
  }

  return (
    <>
      <div className="z-0 h-auto flex flex-col gap-2 m-auto">
        <ButtonMenu setProcessingImage={setProcessingImage}/>
        <div className='bg-blue-50 w-80 h-80 rounded-lg flex justify-center items-center'>
            <EditedImage processingImage={processingImage} setProcessingImage={setProcessingImage}/>
        </div>
        <Button onClick={handleDownload} className='bg-sky-400 border-sky-500'>
          <a
            className='w-full h-full'
            download
            title='Descargar imagen'
          >
            Descargar Sticker
          </a>
        </Button>
      </div>
    </>
  )
}
