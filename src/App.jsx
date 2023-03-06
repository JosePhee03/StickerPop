import { Banner } from './components/Banner'
import { Card } from './components/Card'
import { Description } from './components/Desciption'
import { Footer } from './components/Footer'
import { Switch } from './components/Switch'
import { StoreProvider } from './context/storeProvider'

function App () {
  return (
    <main className='flex flex-col items-center'>
      <Banner/>
      <Card>
        <Description/>
        <StoreProvider>
          <Switch/>
        </StoreProvider>
      </Card>
      <Footer/>
    </main>
  )
}

export default App
