import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components'

const StyledDiffOutput = styled.div`
  white-space: pre-wrap;
  text-align: left;
`
const StyledHeader = styled.h2`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
`

const StyledButton = styled.button`
  display: block;
  margin: 10px auto;
  padding: 10px 15px;
  font-size: 16px;
  background-color: ${(props) => (props.copied ? '#007BFF' : '#4CAF50')};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => (props.copied ? '#0056b3' : '#45a049')};
  }
`

function DiffDisplay({ text }) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    let timeoutId
    if (hasCopied) {
      timeoutId = setTimeout(() => {
        setHasCopied(false)
      }, 1000)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [hasCopied])

  useEffect(() => {
    setHasCopied(false)
  }, [text])

  return (
    <>
      <StyledHeader>Difference</StyledHeader>
      <StyledDiffOutput
        id="diffOutput"
        dangerouslySetInnerHTML={{ __html: text.diffedText }}
      ></StyledDiffOutput>
      <CopyToClipboard
        text={text.transformedText}
        onCopy={() => setHasCopied(true)}
      >
        <StyledButton copied={hasCopied}>
          {hasCopied ? 'Copied!' : 'Copy to updated config to   Clipboard'}
        </StyledButton>
      </CopyToClipboard>
      <StyledHeader>Complete config</StyledHeader>
      <StyledDiffOutput
        id="diffOutput"
        dangerouslySetInnerHTML={{ __html: text.transformedText }}
      ></StyledDiffOutput>
    </>
  )
}

export default DiffDisplay
