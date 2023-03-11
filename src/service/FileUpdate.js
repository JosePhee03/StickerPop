export const fileUpload = async (file) => {
  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUND_NAME}/image/upload`

  const formData = new FormData()
  formData.append('upload_preset', `${import.meta.env.VITE_PRESET}`)
  formData.append('file', file)

  try {
    const res = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData
    })

    if (!res.ok) { console.log('ERROR 404') }

    const data = await res.json()
    return data
  } catch (error) {
    return null
  }
}
