const cloudName = 'dfkrnrola'
const preset = 'StickerPop'

export const fileUpload = async (file) => {
  console.log(file)
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`

  const formData = new FormData()
  formData.append('upload_preset', `${preset}`)
  formData.append('file', file)

  try {
    const res = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData
    })

    if (!res.ok) { console.log('ERROR 404') }

    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    return null
  }
}
