const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', palindrome)

function palindrome() {
  const word = document.querySelector('.input-text').value
  const flip = word.split('').reverse().join('')

  word === flip
    ? (result.innerHTML = `${word.toUpperCase()} is a palindrome`)
    : (result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`)
}
