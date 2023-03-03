import { useCallback, useContext, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { StoreContext } from '../context/storeContext'
import { Button } from './Button'

export function Dropzone () {
  const { dispatch } = useContext(StoreContext)

  const onDrop = useCallback(acceptedFiles => {
    const [file] = acceptedFiles
    console.log(file)
    const render = new FileReader()

    render.addEventListener('load', () => {
      const imageURL = render.result
      dispatch({ type: 'DROP', payload: [imageURL, file] })
    })

    render.readAsDataURL(file)
  }, [])

  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/*': ['.jpeg', '.png']
    }
  })

  return (
    <div {...getRootProps()} className={
      'w-full h-full border-8 border-dashed flex flex-col justify-center items-center cursor-pointer hover:border-cyan-300 ' +
      (isDragAccept ? 'border-green-400' : '') +
      (isDragReject ? 'border-red-400' : '')
    }>
      <input {...getInputProps()} />
      <h4 className='font-fredoka'>Arrastre su imagen aquí</h4><br/><h4 className='font-fredoka'>o</h4>
      <Button onClick={open} className='bg-pastel-cyan border-pastel-dark-cyan'>
        Subir imagen
      </Button>
    </div>
  )
}
