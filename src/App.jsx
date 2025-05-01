import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import { Container } from '@chakra-ui/react'
import { Provider } from './components/ui/provider.jsx'

function App() {

  return (
    <>
      <Provider>
        <Container minH={"100vh"} minW={"100hw"}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Provider>
    </>
  )
}

export default App
