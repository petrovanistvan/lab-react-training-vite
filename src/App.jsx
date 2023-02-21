import { useState } from 'react'
import './App.css'
import IdCard from './components/IdCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <IdCard
      lastName="Doe"
      firstName="John"
      gender="male"
      height={178}
      birth= {new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
     />

    <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
    </div>
  )
}

export default App