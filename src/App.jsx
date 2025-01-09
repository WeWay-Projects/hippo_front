import './scss/fonts.scss';
import './scss/null.scss';
import './scss/App.scss';
import Bg from './Bg'
import Game from './Game'
import Hero from './Hero'
import About from './About.jsx'
import Arts from './Arts.jsx'
import Fun from './Fun.jsx'
import Donating from './Donating.jsx'
import Token from './Token.jsx'
import Footer from './Footer.jsx'
import { Bounce, ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Bg />
      <div className='App'>
        <Hero />
        <About />
        <Arts />
        <Fun />
        <Game />
        <Donating />
        <Token />
        <Footer />
      </div>
    </>
  )
}

export default App
