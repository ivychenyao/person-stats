function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const age = f.personAge.value
  const color = f.favoriteColor.value

  const div = document.querySelector('#stats')

  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${name}`
  list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  list.appendChild(ageItem)

  const colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '

  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  colorItem.appendChild(colorDiv)

  list.appendChild(colorItem)

  div.appendChild(list)

/*
  list.textContent = `<p style="color: ${color}">${name}, age ${age}`
  list.style.color = color
  list.style.backgroundColor = color
  div.appendChild(list) // Append stats as proper DOM elements */

  // LESS EFFICIENT: heading.innerHTML = '<p>' + name + ', age' + age + '</p>' // Make name into a new paragraph
}

/* Alternatively interpolation, ${} for variable names
div.innerHTML = `
    <p>${name}, age ${age}</p>
` // can put ` grave accents/backquotes ` on same line */

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)

function renderColor(div) {

}

// Create list items for each stat
function renderListItem() {

}

function renderList() {
    
}