/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/Header'
import Meme from './components/Meme'
// import Fetch from './components/Fetch'
function App() {
   return (
    <>
    <div className='fixed -z-10 top-0 left-0 min-h-full min-w-full bg-slate-200'></div>
    <Header />
    <Meme />
    {/* <Fetch /> */}
    </>
  )
}

export default App
