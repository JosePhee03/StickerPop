import { useContext } from 'react'
import { StoreContext } from '../context/storeContext'

export const FooterDev = () => {
  const { store } = useContext(StoreContext)
  const { editedImage, fileImage, imageState, originalImage } = store

  return (
    <footer className='bg-slate-800 p-2 fixed bottom-0 left-0'>
      <p className='text-sm text-white font-bold'>ImageState: {imageState || 'null'}</p>
      <p className='text-sm text-white font-bold'>originalImage: {originalImage ? 'image' : 'null' }</p>
      <p className='text-sm text-white font-bold'>editedImage: {editedImage ? 'image' : 'null'}</p>
      <p className='text-sm text-white font-bold'>fileImage: {fileImage ? 'file' : 'null'}</p>
    </footer>
  )
}
