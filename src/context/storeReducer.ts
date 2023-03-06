import {fileType, imageContext, imageStatus} from '../types/ImagStatusType'

export type imageAction = 
  | {type: imageStatus, payload: any }


function storeReducer (state: imageContext, action:imageAction):imageContext {
  switch (action.type) {
    case 'RESET':
      return {
        ...state,
        imageState: null,
        editedImage: null,
        originalImage: null,
        fileImage: null
      }
    case 'DROP':
      return {
        ...state,
        imageState: action.type,
        originalImage: action.payload[0],
        fileImage: action.payload[1]
      }
    case 'EDITED':
      return {
        ...state,
        ObjectOfEditedImage: action.payload
      }
    case 'UPLOAD':
      return {
        ...state,
        imageState: action.type,
        editedImage: action.payload[0],
        fileImage: action.payload[1]
      }
    default:
      return state
  }
}

export { storeReducer }
