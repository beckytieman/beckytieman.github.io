const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const towns = jsonObject['towns'];  // temporary checking for valid response and data parsing
    

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Preston') {
            let card = document.createElement('section');

            let event1 = document.createElement('p')
            let event2 = document.createElement('p')
            let event3 = document.createElement('p')
            let event4 = document.createElement('p')

            event1.textContent = towns[i].events[0];
            event2.textContent = towns[i].events[1];
            event3.textContent = towns[i].events[2];
            event4.textContent = towns[i].events[3];

            card.appendChild(event1);
            card.appendChild(event2);
            card.appendChild(event3);
            card.appendChild(event4);

            document.querySelector('div.events').appendChild(card);

        }

    }


  });