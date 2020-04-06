const requestURL = "https://beckytieman.github.io/final-project/guides.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const guides = jsonObject['guides']; 

    for (let i = 0; i < guides.length; i++) {
        let guidesDiv = document.createElement('div');
        let card = document.createElement('section');

        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let bio = document.createElement('p');
        let cert = document.createElement('h4');
        let email = document.createElement('h4');
        let image = document.createElement('img');

        h2.textContent = guides[i].name;
        h3.textContent = "Years Guiding: " + guides[i].yearsExperience;
        bio.textContent = guides[i].biography;
        cert.textContent = "Certification: " + guides[i].certification;
        email.textContent = "email: " + guides[i].email;
        image.setAttribute('src', "images/" + guides[i].photo);
        image.setAttribute('alt', guides[i].name);

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(bio);
        card.appendChild(cert);
        card.appendChild(email);

        guidesDiv.appendChild(image);
        guidesDiv.appendChild(card);

        document.querySelector('div.guides').appendChild(guidesDiv);
    

    }
  });