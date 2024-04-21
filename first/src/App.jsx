/* eslint-disable react/no-unknown-property */


import './App.css'
// eslint-disable-next-line no-unused-vars
import Cards from './components/Cards'

function App() {
  

  return (
 <>
  <h1 className='bg-green-400 text-black p-5 rounded-3xl mb-4'>App</h1>
  <Cards username="priya" btnText="clickMe"  />
  <Cards  username="priyanka" btnText="VisitMe"/>
  

 </>
  )
}

export default App
