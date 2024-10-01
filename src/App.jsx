import './App.css'
import Card from './components/Card'
import cardData from './components/Card_data'

function App() {


  return (
    <>
    <div className='background'>
      {cardData.map((card,index)=> 
      <Card key={index} card={card}/>)}
    </div>
    </>
  )
}

export default App
