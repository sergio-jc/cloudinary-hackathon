export function upLoadImagetoCloudinary({ fileSelected }) {
  const formData = new FormData()
  formData.append('file', fileSelected)
  formData.append('upload_preset', 'fges4sh4')
  formData.append('api_key', 481698649362236)
  formData.append('timestamp', (Date.now() / 1000) | 0)
  return fetch('https://api.cloudinary.com/v1_1/dwtrmvcp6/image/upload', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Error al subir la imagen a Cloudinary')
      }
    })
    .catch((error) => {
      console.log('Error al subir la imagen a Cloudinary: ', error)
    })
}
