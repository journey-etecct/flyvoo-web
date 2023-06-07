const line = document.querySelector('.password')
const btn = document.querySelector('#eye')
const eyeShow= document.querySelector('#eye1')
const eyeHide = document.querySelector('#eye2')


btn.onclick = () =>
{
  if (line.type === 'password' && line.value !== ''){
    line.type = 'text'
    eyeShow.style.display = 'none'
    eyeHide.style.display = 'block'

  }
  else
  {
    line.type = 'password'
    eyeShow.style.display = 'block'
    eyeHide.style.display = 'none'
  }
}