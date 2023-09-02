import React, { useState } from 'react'
import styled from 'styled-components'

const InfoHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Caret = styled.span`
  margin-left: 10px;
  transform: ${(props) => (props.expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
  display: inline-block;
`

const SubHeader = styled.h3`
  font-size: 20px;
  margin: 20px 0 10px 0;
  color: #444;
`

const InfoText = styled.p`
  font-size: 16px;
  color: #555;
`

function InfoComponent() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <InfoHeader onClick={() => setIsExpanded(!isExpanded)}>
        Instructions
        <Caret expanded={isExpanded}>&#9660;</Caret>
      </InfoHeader>

      {isExpanded && (
        <>
          <SubHeader>Find your CS:GO config</SubHeader>
          <InfoText>
            Open your Steam library and right-click on 'Counter-Strike: Global
            Offensive'.
            <ul>
              <li>Select 'Properties'.</li>
              <li>Click on 'Installed Files'.</li>
              <li>Click 'Browse'.</li>
              <li>Open config.cfg</li>
            </ul>
            Or use the direct path:
            <strong>
              C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike
              Global Offensive
            </strong>
          </InfoText>

          <SubHeader>Add it to CS2</SubHeader>
          <InfoText>
            From the same folder as before
            <ul>
              <li>Open game.</li>
              <li>Open csgo.</li>
              <li>Open cfg.</li>
              <li>Create autoexec.cfg with the copied data</li>
            </ul>
            or use the direct path and create autoexec.cfg:
            <strong>
              C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike
              Global Offensive\game\csgo\cfg
            </strong>
          </InfoText>
        </>
      )}
    </>
  )
}

export default InfoComponent
