export const rangeNumbers = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))

export const randomAnswers = (number) => {
  const answers = []
  answers.push(number.toString())
  let rangeLimit = 10
  let steps = 1
  let exponential = null
  if (number.toString().includes('e')) {
    exponential = parseInt(number.toString().split('e').pop())
    number = parseInt(number.toString().split('e')[0])
  } else {
    if (number.toString().length > 3) {
      rangeLimit = Math.pow(10, number.toString().length - 1)
      steps = Math.pow(10, number.toString().length - 2)
    }
  }
  let randomPossiblesNumbers = rangeNumbers(number - rangeLimit, number + rangeLimit, steps)
  console.log(randomPossiblesNumbers)
  randomPossiblesNumbers = randomPossiblesNumbers.filter((value, index, arr) => {
    return value !== number
  })
  for (let i = 0; i < 3; i++) {
    let ans = randomPossiblesNumbers.splice(Math.floor(Math.random() * randomPossiblesNumbers.length), 1).pop().toString()
    if (exponential) {
      ans = ans + 'e' + exponential
    }
    answers.push(ans)
  }
  return answers.sort((a, b) => 0.5 - Math.random())
}
