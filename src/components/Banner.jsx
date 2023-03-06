import { StickerPopLogo, Wave } from '../icons'

export function Banner () {
  return (
    <header className='absolute top-0 left-0 w-full -z-10'>
      <Wave/>
      <span className='absolute top-4 left-4'>
      <StickerPopLogo/>
      </span>
      <picture className='absolute top-4 right-0 hidden lg:block'>
        <img className='w-40' src="/globo.png" alt="globo" />
      </picture>
    </header>
  )
}
