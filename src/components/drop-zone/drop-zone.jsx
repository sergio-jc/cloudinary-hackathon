/* eslint-disable multiline-ternary */
import React, { useContext, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Icons } from '..'
import { ImageView } from '@components/image-options/image-view'
import { upLoadImagetoCloudinary } from '@services/up-load-image-to-Cloudinary'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { userData } from '@context/user-data'
import { LoaderImage } from './loader-image'

export function DropZone({ filename }) {
  const {
    user,
    updateUserImage,
    removeImage: removeImageOfContext,
    clearUserData,
    updateUserInfo,
    clearFilterImage
  } = useContext(userData)
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      
      maxFiles: 1,
      accept: {
        'image/png': ['.png', '.jpg', '.jpeg', '.webp', '.avif']
      }
    })
  const {
    localState: imageUrl,
    saveLocalStorage,
    deleteLocalState,
    updateLocalState
  } = useLocalStorage({ nameStorage: filename })
  const removeImage = () => {
    deleteLocalState()
    removeImageOfContext()
    clearFilterImage()
  }
  const [isLoading, setIsLoading] = useState(false)
  const updateImage = () => {
    upLoadImagetoCloudinary({ fileSelected: acceptedFiles[0] }).then((data) => {
      updateLocalState({ value: data.url })
      console.log('Imagen subida a Cloudinary: ', data)
    })
  }
  useEffect(() => {
    if (fileRejections.length) {
      return window.alert('muchos ')
    } else if (acceptedFiles?.length) {
      setIsLoading(true)
      upLoadImagetoCloudinary({ fileSelected: acceptedFiles[0] }).then(
        (data) => {
          saveLocalStorage({ value: data.url })
          clearFilterImage()
          updateUserImage({ url: data.url })
          console.log('Imagen subida a Cloudinary: ', data)
          setIsLoading(false)
        }
      )
    }
  }, [acceptedFiles])
  console.log(imageUrl, ' imageUrl')
  return (
    <>
      {imageUrl ? (
        <div className='relative'>
          <div
            onClick={removeImage}
            className='absolute z-50 p-1 bg-stone-300 opacity-80 -right-2 -top-2 rounded-full hover:opacity-100 transition-opacity scale-90'
          >
            <Icons.Delete />
          </div>
          <div
            onClick={updateImage}
            className='absolute z-50 p-1 bg-stone-300 opacity-80 right-5 -top-2 rounded-full hover:opacity-100 transition-opacity scale-90'
          >
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <Icons.Edit />
            </div>
          </div>
          {isLoading ? <LoaderImage /> : <ImageView file={imageUrl} update />}
        </div>
      ) : (
        <div {...getRootProps({ className: 'dropzone' })}>
          <div className='flex hover:cursor-pointer text-stone-400 flex-col items-center justify-center gap-3 w-40 h-40 rounded-lg hover:scale-110 hover:transition-transform'>
            <input {...getInputProps()} />
            <Icons.AddImage />
            <div className='text-center text-sm'>
              <p>Drop or click</p>
              <p>on the area.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
