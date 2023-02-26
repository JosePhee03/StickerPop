import { Button } from './components/Button'
import { DropZone } from './components/DropZone'
import { StickerPopLogo, Wave } from './icons'

function App () {
  return (

    <main className='grid grid-cols-1 min-h-screen w-full'>

      <header className='relative top-0 left-0 w-full h-auto col-span-1'>
        <Wave/>
        <span className='absolute top-4 left-4'>
        <StickerPopLogo/>
        </span>
      </header>

      <section className='py-4 px-8 rounded-lg bg-white shadow-md shadow-gray-400 m-auto'>
        <h2 className='font-bold font-fredoka text-2xl text-pastel-blue'>De imagen a sticker</h2>
        <h4 className='font-fredoka'>Convierte cualquier imagen en un sticker de forma rapida y sencilla con esta herramienta.</h4>
        <div className='max-w-xs flex flex-col gap-2 m-auto'>
          <DropZone/>
          <Button className='bg-pastel-light-blue border-pastel-blue w-full'>
            Convertir a sticker
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
