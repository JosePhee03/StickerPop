import { useContext, useState } from 'react'
import { StoreContext } from '../context/storeContext'
import { Button } from './Button'
import { EditorMenu } from './EditorMenu'

export function ModalEditor ({ setModalEditor }) {
  const { store } = useContext(StoreContext)
  const ObjectOfEditedImage = store.ObjectOfEditedImage
  const EditedImageURL = ObjectOfEditedImage.toURL()

  return (
    <main className='fixed z-10 flex flex-col justify-center items-center bg-[#000000e5] backdrop-blur-sm top-0 left-0 w-full h-screen'>
      <ExitMenu setModalEditor={setModalEditor}/>
      <div className='w-40 h-40 flex justify-center'>
        <img src={EditedImageURL} alt="imagen editada" className='' />
      </div>
      <EditorMenu/>
    </main>
  )
}

function ExitMenu ({ setModalEditor }) {
  const handleExit = () => {
    setModalEditor(false)
  }

  return (
    <div className='absolute p-2 top-0 w-full flex justify-between items-center'>
      <button onClick={handleExit} className='font-fredoka font-bold text-white flex items-center'>
        <span className='flex items-center gap-2'>
          X Esc
        </span>
        </button>
      <Button className={'bg-emerald-400 border-emerald-500'}>
        Guardar Cambios
      </Button>
    </div>
  )
}
