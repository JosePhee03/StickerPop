export function ImageURL (file, setImagePreview) {
  const fileRender = new FileReader()
  fileRender.readAsDataURL(file)
  fileRender.addEventListener('load', () => {
    const fileURL = fileRender.result
    setImagePreview(fileURL)
  })
}
