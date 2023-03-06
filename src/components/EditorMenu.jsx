import { useContext, useState } from 'react'
import { StoreContext } from '../context/storeContext'
import { cloudBackgroudEffect } from '../service/CloudEffect'

export function EditorMenu () {
  const [selected, setSelected] = useState(0)

  return (
    <div className='w-80 absolute bottom-0'>
      {selected === 0
        ? <SizeOptions/>
        : selected === 1
          ? <BackgroundColor/>
          : <TabsOptions options={['Sin texto', 'Con texto']}/>

      }

        <OptionsMenu
          menu={['Tamaño', 'Fondo', 'Efecto']}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
  )
}

function OptionsMenu ({ selected, setSelected, menu }) {
  const borderRadius = ['rounded-l-lg', '', 'rounded-r-lg']

  return (
    <section className='flex divide-x'>
      {
        menu.map((element, index) => (
          <button
          onClick={() => setSelected(index)}
          key={index}
          className={
            'w-full text-white font-fredoka py-1 border-b-4 ' +
            borderRadius[index] +
            (selected === index
              ? ' border-cyan-500 bg-cyan-400 font-bold'
              : ' border-gray-800 bg-gray-700 hover:brightness-125'
            )
          }
        >
          {element}
        </button>
        ))
      }
    </section>
  )
}

function TabsOptions ({ options }) {
  const [selectOption, setSelectOption] = useState(0)
  const handleClick = (index) => {
    setSelectOption(index)
  }

  return (
    <section>
      <div className='flex gap-6 justify-center'>
        {
          options.map((element, index) => (
            <button
            key={index}
            onClick={() => handleClick(index)}
            className={
              'text-white text-sm font-fredoka  rounded-full w-20 h-6 ' +
              (selectOption === index ? 'font-bold bg-sky-500' : '')
            }>
              {element}
            </button>
          ))
        }
      </div>
    </section>
  )
}

function SizeOptions () {
  const { store } = useContext(StoreContext)
  const { fileImage } = store
  const { width, height } = fileImage
  const [size, setSize] = useState()

  const handleChange = (event) => {
    const newSize = event.target.value
    console.log(newSize)
    setSize(newSize)
  }

  return (
    <>
      <TabsOptions options={['Original', 'Sticker', 'Custom']}/>
      <div className='w-full flex flex-col items-center gap-2 py-6'>
        <label htmlFor="label-range"></label>
        <input
          onChange={(event) => handleChange(event)}
          className=''
          id='label-range'
          type="range"
          value={size}
          min={-4}
          max={4}
        />
        <h4
          className='text-white font-fredoka bg-black backdrop-blur-sm py-1 px-2 rounded-full'
        >
          {width + ' x ' + height}
        </h4>
      </div>
    </>
  )
}

function BackgroundColor () {
  const { store, dispatch } = useContext(StoreContext)
  const ObjectOfEditedImage = store.ObjectOfEditedImage
  const [color, setColor] = useState('#ffffff')

  console.log('ObjectOfEditedImage', ObjectOfEditedImage)

  const handleChangeColor = (event) => {
    const newColor = event.target.value
    console.log(newColor)
    setColor(newColor)
    const changeBackgroundColor = cloudBackgroudEffect(ObjectOfEditedImage, newColor)
    dispatch({ type: 'EDITED', payload: changeBackgroundColor })
  }

  return (
    <>
      <TabsOptions options={['Color']}/>
      <div className='flex justify-center py-6'>
        <div className='flex gap-2'>
          <input type="checkbox" name="" id="checkbox-id" />
          <label className='text-white' htmlFor="checkbox-id">Sin Fondo</label>
        </div>
        <input
          onChange={(event) => handleChangeColor(event)}
          type="color"
          value={color}
          name="" id=""
        />
      </div>
    </>
  )
}
