import { useContext, useState } from 'react'
import { StoreContext } from '../context/storeContext'
import { ButtonMenu } from './ButtonMenu'
import { EditedImage } from './EditedImage'

export function Editor () {
  const { store } = useContext(StoreContext)
  const { editedImage } = store
  const [modalEditor, setModalEditor] = useState(false)

  return (
    <>
      <div className="z-0 h-auto flex flex-col gap-2 m-auto">
        <ButtonMenu/>
        <div className='bg-blue-50 w-80 h-80 rounded-lg flex justify-center items-center'>
            <EditedImage/>
        </div>
          <a
            download
            href={editedImage}
            className='btn w-full bg-cyan-400 border-cyan-500 cursor-pointer flex justify-center items-center'
            title='Descargar imagen'
          >
            Descargar Sticker
          </a>
      </div>
    </>
  )
}
