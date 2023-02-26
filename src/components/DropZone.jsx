import { useRef, useState } from 'react'
import { Button } from './Button'
import { ImageURL } from '../Logic'

export function DropZone () {
  const [dragOver, setDragOver] = useState(false)
  const [imagePreview, setImagePreview] = useState()
  const inputRef = useRef()

  const loadImageFromInput = (event) => {
    const [file] = event.target.files
    ImageURL(file, setImagePreview)
    setDragOver(true)
  }

  const handleClick = (event) => {
    event.preventDefault()
    const input = inputRef.current
    input.click()
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    if (!dragOver) {
      setDragOver(true)
    }
  }

  const handleDragLeave = (event) => {
    event.preventDefault()
    if (dragOver) {
      setDragOver(false)
      console.log('false')
    }
  }

  const handleDrop = (event) => {
    event.preventDefault()

    if (event.dataTransfer.types.includes('application/x-moz-file-promise-url')) {
      const url = event.dataTransfer.getData('application/x-moz-file-promise-url')
      setImagePreview(url)
    } else {
      const [file] = event.dataTransfer.files
      ImageURL(file, setImagePreview)
    }
    setDragOver(true)
  }

  const removeImage = () => {
    setImagePreview(false)
    setDragOver(false)
  }

  return (
    <form
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      className={
        (dragOver ? 'border-pastel-cyan ' : 'border-pastel-gray') +
        ' w-80 h-80 border-8 m-auto gap-1 border-dashed flex flex-col justify-center items-center'
      }
    >
      {imagePreview
        ? <div className='relative w-full h-full flex  justify-center items-center'>
            <Button
              onClick={removeImage}
              className={'bg-orange-600 border-orange-700 absolute top-2 right-2'}
            >
              X
            </Button>
            <img src={imagePreview} alt="Imagen Preview" className='rounded-lg' />
          </div>
        : <>
            <input
              onChange={loadImageFromInput}
              ref={inputRef}
              type="file"
              name="file"
              className='hidden'
            />
            <h4 className='font-fredoka'>Arrastre su imagen aquí</h4><br/><h4 className='font-fredoka'>o</h4>
            <Button onClick={handleClick} className='bg-pastel-cyan border-pastel-dark-cyan'>
              Subir imagen
            </Button>
          </>
      }
    </form>
  )
}
