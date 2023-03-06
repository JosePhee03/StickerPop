import { outline } from '@cloudinary/url-gen/actions/effect'
import { trim } from '@cloudinary/url-gen/actions/reshape'
import { CLOUD_CONFIG } from './CloudConfig'

export function CloudEffect (publiId:string, width:number) {
  const borderSize = Math.floor(width / 32)

  const cloundImage = CLOUD_CONFIG.image(publiId)
    .effect(outline()
      .blurLevel(0)
      .width(borderSize)
      .color('white')
    )
    .reshape(trim())
  
  const imageEditedURL = cloundImage.toURL()
  return [imageEditedURL, cloundImage]
}
