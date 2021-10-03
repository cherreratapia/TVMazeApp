export default function (arr) {
  return arr.reduce((acc, curr, idx) => {
    if (!acc || (!acc && idx === arr.length)) return curr
    if (idx === arr.length - 1) return (acc += ` & ${curr}`)
    return (acc += `, ${curr}`)
  })
}
