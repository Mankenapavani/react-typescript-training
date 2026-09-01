import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header title="My React Application" />
      <Content message="This is the main content." />
      <Footer year={2026} />
    </>
  )
}

export default App