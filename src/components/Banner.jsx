import { StickerPopLogo, Wave } from '../icons'

export function Banner () {
  return (
    <header className='absolute top-0 left-0 w-full'>
      <Wave/>
      <span className='absolute top-4 left-4'>
      <StickerPopLogo/>
      </span>
    </header>
  )
}
