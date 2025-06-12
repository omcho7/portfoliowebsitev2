import './styles/App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className='app'>
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
