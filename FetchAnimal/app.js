let pageCounter = 1;
const btn = document.querySelector('#btn');
const animalContainer = document.querySelector('#animal-info');

btn.addEventListener('click', () => {

    const req = new XMLHttpRequest();
    req.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
    req.onload = function () { //what should happen when the data is loaded
        const data = JSON.parse(req.responseText);
        renderHTML(data);
    }

    req.onerror = () => {
        console.log('error');
    }

    req.send();
    pageCounter++;

    if(pageCounter > 3) {
       btn.classList.add('hide-me');
    }
});

function renderHTML(data) {
    let htmlString = '';

    for(i = 0; i < data.length; i++){
        htmlString += `<p> ${data[i].name} is a ${data[i].species} thats like to eat `

        for(j = 0; j < data[i].foods.likes.length; j++){
            
            if(j == 0){
                htmlString += data[i].foods.likes[j];
            } else {
                htmlString += " and " + data[i].foods.likes[j];
            }            
        }

        htmlString += `. </p>`
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

