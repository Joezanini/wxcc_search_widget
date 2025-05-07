import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import { Container } from '@chakra-ui/react'
import { Provider } from './components/ui/provider.jsx'
import ShadowRoot from 'react-shadow'

function App() {

  return (
    <ShadowRoot>
      <Provider>
        <Container minH={"100vh"} minW={"100hw"}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Provider>
    </ShadowRoot>
  )
}

export default App
