import { diffLines } from 'diff'

export const getDiff = (originalText, transformedText) => {
  const diffs = diffLines(originalText, transformedText, {
    ignoreWhitespace: true,
  })
    .filter((part) => part.added || part.removed)
    .map((part) => {
      const color = part.added ? 'green' : part.removed ? 'red' : 'grey'
      return `<span style="color:${color}">${part.value}</span>`
    })
    .join('')
  console.log(diffs)
  return diffs
}
