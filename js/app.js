
//Henter body med querySelector:
const bodyElement = document.querySelector('body');
console.log(bodyElement);

//Henter ul med ID:
const ulNeedElement = document.getElementById('ulNeed');
console.log(ulNeedElement);

//Henter input med ID:
const inputElement = document.getElementById('addItem');
console.log(inputElement);

//Henter plusIMG med ID:
const plusIDElement = document.getElementById('plusID');
console.log(plusIDElement);


//Gjør at man kan trykke Enter for å legge til:
plusIDElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        renderList();
    }
})


let tasks = []

function renderList() {

    //Gjør at man ikke kan trykke add når det ikke er tekst i input:
    if (inputElement.value !== '') {

        // Lager liElement:
        const liElement = document.createElement('li');
        console.log(liElement);

        // Skrift i input blir borte etter at add er trykket:
        liElement.textContent = inputElement.value;
        inputElement.value = '';

        // Lager removeButtonElement:
        const removeButtonElement = document.createElement('button');
        console.log(removeButtonElement);
        


        removeButtonElement.textContent = '✕'

        liElement.appendChild(removeButtonElement);
        ulNeedElement.prepend(liElement);

        removeButtonElement.addEventListener('click', () => {
            ulNeedElement.removeChild(liElement);
        })

        liElement.addEventListener('click', () => {
            liElement.classList.toggle('buyed');
        })
    }
}