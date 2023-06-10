import { backgroundRemoval, outline, shadow } from '@cloudinary/url-gen/actions/effect'
import { trim } from '@cloudinary/url-gen/actions/reshape'
import { CLOUD_CONFIG } from './CloudConfig'

export function CloudEffect (publicID:string, width:number) {
  const borderSize = Math.floor(width / 32)

  const cloundImage = CLOUD_CONFIG.image(publicID)
    .effect(backgroundRemoval())
    .effect(outline()
      .blurLevel(0)
      .width(borderSize)
      .color('white')
    )
    .reshape(trim())
  
  const imageEditedURL = cloundImage.toURL()
  return [imageEditedURL, cloundImage]
}

export function toggleEffect (cloudImageURL:string, publicID:string, toggle: boolean) {
  const stringEffect = cloundShadowEffect(publicID)
  const end = cloudImageURL.indexOf('/v1/')
  const addEfectURL = cloudImageURL.slice(0,end) + '/' + stringEffect + cloudImageURL.slice(end,-1)
  const removeShadow = cloudImageURL.replace('/' + stringEffect, '')
  
  return toggle ? addEfectURL : removeShadow
}

export function cloundShadowEffect (publicID:string) {

  const cloundImage = CLOUD_CONFIG.image(publicID).effect(
    shadow()
      .strength(40)
      .color( "#000000")
      .offsetX(-4)
      .offsetY(4)
    )
     
  const imageEditedURL = cloundImage.toString()
  return imageEditedURL
}

