let fieldTitle = document.querySelector('#fieldTitle')
let fieldDescription = document.querySelector('#fieldDescription')
let fieldUrl = document.querySelector('#fieldUrl')
let btn = document.querySelector('#btn')

let remove = document.querySelector('#remove')

let list = document.querySelector('ol')

btn.addEventListener('click', insertIn)

function insertIn(event) {
  event.preventDefault()

  let tipoTur = document.querySelector('[name="tipoTurismo"]:checked').value

  let nacInter = document.querySelector('[name="nacInter"]:checked').value

  let passaporte = document.querySelector('#passaporte')
  passaporte.checked
    ? (passaporteTxt = 'Precisa de passaporte')
    : (passaporteTxt = 'Não precisa de passaporte')

  let li = document.createElement('li')
  li.innerText = `Tipo de turismo: ${tipoTur};\n Tipo de viagem: ${nacInter};\n ${passaporteTxt};\n Destino: ${fieldTitle.value}; \n Descrição: ${fieldDescription.value}.`
  document.querySelector('ol').appendChild(li)

  document.querySelector('#btn').onclick = function () {
    let radios = document.getElementsByName('genero')
    for (let i = 0; i < radios.clientHeight; i++) {
      if (radios[i].checked) {
        document.querySelector('ol').appendChild(radios)
      }
    }
  }

  let img = document.createElement('img')
  img.setAttribute('src', fieldUrl.value)
  document.querySelector('ol').appendChild(img)
}
