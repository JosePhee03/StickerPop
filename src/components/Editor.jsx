import { useContext, useState } from 'react'
import { StoreContext } from '../context/storeContext'
import { ButtonMenu } from './ButtonMenu'
import { EditedImage } from './EditedImage'
import { ModalEditor } from './ModalEditor'

export function Editor () {
  const { store } = useContext(StoreContext)
  const { editedImage, ObjectOfEditedImage } = store
  const [modalEditor, setModalEditor] = useState(false)

  return (
    <>
      {modalEditor ? <ModalEditor setModalEditor={setModalEditor}/> : '' }
      <div className="z-0 h-auto flex flex-col gap-2 m-auto">
        <ButtonMenu setModalEditor={setModalEditor}/>
        <div className='bg-blue-50 rounded-lg w-80 p-5 '>
          <div className='relative w-full h-full flex justify-center items-center'>
            <EditedImage/>
          </div>

        </div>
          <a
            download={editedImage}
            className='btn w-full bg-cyan-400 border-cyan-500 cursor-pointer flex justify-center items-center'
            title='Descargar imagen'
          >
            Descargar Sticker
          </a>
      </div>
    </>
  )
}
