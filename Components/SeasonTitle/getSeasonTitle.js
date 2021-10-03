export default function (number) {
  const mod = number % 10
  const lastNumberMod = number % 100
  if (mod === 1 && lastNumberMod !== 11) return `${number}st Season`
  if (mod === 2 && lastNumberMod !== 12) return `${number}nd `
  if (mod === 3 && lastNumberMod !== 13) return `${number}rd Season`
  return `${number}th Season`
}
