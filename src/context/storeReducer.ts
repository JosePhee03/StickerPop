import {fileType, imageContext, imageStatus} from '../types/ImagStatusType'

export type imageAction = 
  | {type: imageStatus, payload: string }
  | {type: 'DROP', payload: [string, fileType] }


function storeReducer (state: imageContext, action:imageAction):imageContext {
  switch (action.type) {
    case 'RESET':
      return {
        imageState: null,
        editedImage: null,
        originalImage: null,
        fileImage: null
      }
    case 'DROP':
      return {
        imageState: action.type,
        editedImage: state.editedImage,
        originalImage: action.payload[0],
        fileImage: action.payload[1]
      }
      return {...state, imageState: action.type}
    case 'EDITED':
      return {
        ...state,
        imageState: action.type,
        editedImage: action.payload
      }
    default:
      return state
  }
}

export { storeReducer }
