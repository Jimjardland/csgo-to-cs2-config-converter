import React, { useState } from 'react'
import InputComponent from './components/InputComponent'
import OutputComponent from './components/OutputComponent'
import InfoComponent from './components/InfoComponent'

function App() {
  const [text, setUpdatedText] = useState('')

  return (
    <div className="App" style={{ margin: '0 50px' }}>
      <InfoComponent />
      <InputComponent onUpdate={setUpdatedText} />
      <OutputComponent text={text} />
    </div>
  )
}

export default App
