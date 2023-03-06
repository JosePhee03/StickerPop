import { outline } from '@cloudinary/url-gen/actions/effect'
import { trim } from '@cloudinary/url-gen/actions/reshape'
import { CLOUD_CONFIG } from './CloudConfig'
import { scale } from '@cloudinary/url-gen/actions/resize'
import { CloudinaryImage } from '@cloudinary/url-gen'

export function CloudEffect (publiId:string, width:number) {
  const borderSize = Math.floor(width / 64)

  const cloundImage = CLOUD_CONFIG.image(publiId)
    .effect(outline()
      .blurLevel(0)
      .width(borderSize)
      .color('white')
    )
    .reshape(trim())
  // .backgroundColor('')
  const imageEditedURL = cloundImage.toURL()
  return [imageEditedURL, cloundImage]
}

export function cloudBackgroudEffect (cloundImage: CloudinaryImage, color: string) {
  
  const changeBackgroundColor = cloundImage.backgroundColor(color)
  return changeBackgroundColor
}
