import { createContext } from 'react'
import { imageContext } from '../types/ImagStatusType'
import { imageAction } from './storeReducer';

type storeContextProps = {
  store: imageContext;
  dispatch: React.Dispatch<imageAction>
}

export const StoreContext = createContext<storeContextProps>({} as storeContextProps)




