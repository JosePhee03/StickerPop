import { StoreContext } from '../context/storeContext'
import { Button } from './Button'
import { Toggle } from './Toggle'
import { useContext, useState } from 'react'
import { toggleEffect } from '../service/CloudEffect'
import { clearLocalStorage, getLocalStorage, setlocalStorage } from '../helpers/localStorage'

export function ButtonMenu ({ setProcessingImage }) {
  const [selected, setSelected] = useState(getLocalStorage('EFFECT_STATE') ?? false)
  const { store, dispatch } = useContext(StoreContext)
  const { ObjectOfEditedImage, editedImage } = store
  const { publicID } = ObjectOfEditedImage

  const handleToggle = () => {
    const changeSelected = !selected
    setSelected(changeSelected)
    setlocalStorage('EFFECT_STATE', changeSelected)
    setProcessingImage(changeSelected)
    const toggleShadowEffect = toggleEffect(editedImage, publicID, changeSelected)
    dispatch({ type: 'EDITED', payload: toggleShadowEffect })
  }

  const handleBack = () => {
    window.alert('¿Seguro que quieres borrar tu progreso?')
    clearLocalStorage()
    dispatch({ type: 'RESET' })
  }

  return (

    <div className='flex justify-between'>
      <Button onClick={handleBack} className={'bg-orange-400 border-orange-500'} >Volver Atrás</Button>
      <Toggle selected={selected} handleToggle={handleToggle} label={'Sombra'}/>
    </div>
  )
}
