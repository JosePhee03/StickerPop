import { Cloudinary } from '@cloudinary/url-gen'

export const CLOUD_CONFIG = new Cloudinary({
  cloud: {
    apiKey: '426861871816862',
    cloudName: 'dfkrnrola'
  },
  url: {
    secure: true
  }
})
