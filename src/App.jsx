import { Banner } from './components/Banner'
import { Card } from './components/Card'
import { Description } from './components/Desciption'
import { FooterDev } from './components/FooterDev'
import { Switch } from './components/Switch'
import { StoreProvider } from './context/storeProvider'

function App () {
  return (
    <main className='grid grid-cols-1 w-full'>
      <Banner/>
      <Card>
        <Description/>
        <StoreProvider>
          <Switch/>
          <FooterDev/>
        </StoreProvider>
      </Card>
    </main>
  )
}

export default App
