import React from 'react'
import styled from 'styled-components'
import { transformText } from '../utils/textTransforms'
import { getDiff } from '../utils/diff'

const StyledHeader = styled.h2`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`

const InputArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`

const InputComponent = ({ onUpdate }) => {
  const handleTextChange = (e) => {
    const currentText = e.target.value
    const transformedText = transformText(currentText)
    onUpdate({
      diffedText: getDiff(currentText, transformedText),
      transformedText,
    })
  }

  return (
    <>
      <StyledHeader>CS:GO config</StyledHeader>
      <InputArea
        onChange={handleTextChange}
        rows="20"
        cols="50"
        placeholder="Enter your config here..."
      />
    </>
  )
}

export default InputComponent
