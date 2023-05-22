import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid md:grid-cols-2 gap-x-6 justify-center items-center'>
            <div className='space-y-7'>
                <h1 className='text-5xl font-bold'>Better Kids, <br />Better World</h1>
                <h3 className='text-gray-400'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Alias mollitia sunt est maiores <br /> perspiciatis libero nostrum eaque ab necessitatibus harum?</h3>
                <button className='btn-style'>Shop Now</button>
            </div>
            <div>
                <img className='w-3/4' src="https://img.freepik.com/free-vector/happy-young-boy-student-character_1308-27687.jpg?size=626&ext=jpg&ga=GA1.1.1654759242.1680368383&semt=ais" alt="" />
            </div>
        </div>
  )
}

export default App
