
export function Footer () {
  return (
    <footer className="w-full h-40 flex items-center justify-center bg-footer-gradient">
      <div className="flex flex-col items-center gap-3">
        <h5 className="font-fredoka text">Patrocinadores</h5>
        <div className="flex items-center divide-x-2 divide-gray-300">
          <a title="Cloudinary" className="cursor-pointer px-3" href="https://cloudinary.com/"><img src="/cloudinary.png" alt="cludinary logo" /></a>
          <a title="Midudev" className="cursor-pointer px-3" href="https://midu.dev/"><img src="/midudev.png" alt="minudev logo" /></a>
        </div>
        <a
          title="Repositorio GitHub"
          className="font-fredoka text-blue-500 text-sm decoration-2 underline decoration-blue-500"
          href="https://github.com/JosePhee03/StickerPop"
        >
          Repositorio GitHub
        </a>
      </div>
    </footer>
  )
}
