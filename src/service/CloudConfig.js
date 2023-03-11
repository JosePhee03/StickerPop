import { Cloudinary } from '@cloudinary/url-gen'

export const CLOUD_CONFIG = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUND_NAME,
    apiKey: import.meta.env.VITE_APY_KEY
  },
  url: {
    secure: true
  }
})
