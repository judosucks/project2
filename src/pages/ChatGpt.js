import Input from '../component/Input'
import Button from '../component/Button'
import {useState, useEffect} from 'react'
import OpenAI from 'openai'
import './chatgpt.css'
function ChatGpt() {


//   const [message,
//     setMessage] = useState(null)
//   const getMessage = async() => {

//     const options = {
//       method: "POST",
//       body: JSON.stringify({message: "hello how are you"}),
//       headers: {
//         "Content-type": "application/json"
//       }
//     }
//     try {
//       const response = await fetch('http://localhost:3002/completions', options)
//       const data = await response.json()
//       console.log(data)
//       setMessage(data.choices[0].message)
//     } catch (error) {
//       console.log('error here', error)
//     }
//   }
  
  return (
    <div>
      <section className='side-bar'>
        <div className='history'></div>
      </section>
      <section className='main'>
        <div className='content'>
          <ul>
            <li></li>
          </ul>
          <Input className="gotobottom"/>
          <Button primary rounded className='height' id="submit">send</Button>
        </div>
      </section>

    </div>
  )
}

export default ChatGpt