const container = document.getElementById('container')
const button = document.getElementById('btn7')


const heading = document.createElement('h3')
heading.innerHTML = "select your fav. language"

const select = document.createElement('select')





var options = ["javascript","css","html","mysql","java"]


options.map((data) => {
    const option = document.createElement('option')

    option.innerHTML = data
    select.append(option);
})

button.addEventListener('click',() => {
    button = adder()
})

const adder = () => {
    
    const inputer = document.getElementById('boxvalue')

    options.push(inputer)
}




heading.append(select)
container.append(heading)


