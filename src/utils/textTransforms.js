const patternRunJumpthrow = /^bind\s+"[^"]+"\s+"\+forward;\+jump;-attack"$/gm
const patternJumpthrow = /^bind\s+"[^"]+"\s+"\+jumpthrow$/gm
const patternToRemoveRighthand = /cl_righthand "(1|0)"/g
const patternToRemoveBindedRighthand =
  /^bind\s+"[^"]+"\s+"cl_righthand [01]"$/gm

export const transformText = (inputText) => {
  let transformedText = inputText.trim()

  transformedText = transformedText.replace(/\+moveleft/g, '+left')
  transformedText = transformedText.replace(/\+moveright/g, '+right')
  transformedText = transformedText.replace(patternRunJumpthrow, '')
  transformedText = transformedText.replace(patternJumpthrow, '')
  transformedText = transformedText.replace(patternToRemoveRighthand, '')
  transformedText = transformedText.replace(patternToRemoveBindedRighthand, '')

  if (!transformedText.includes('bind "MOUSE_X" "yaw"')) {
    transformedText += '\nbind "MOUSE_X" "yaw"'
  }

  if (!transformedText.includes('bind "MOUSE_Y" "pitch"')) {
    transformedText += '\nbind "MOUSE_Y" "pitch"'
  }

  transformedText = transformedText.replace(
    /sv_specspeed "\d+(\.\d+)?"/g,
    'sv_specspeed "1200"'
  )
  transformedText = transformedText.replace(
    /sv_noclipspeed "\d+(\.\d+)?"/g,
    'sv_noclipspeed "1200"'
  )

  return transformedText.trim()
}
