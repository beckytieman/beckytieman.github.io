const requestURL = "https://beckytieman.github.io/final-project/guides.json"

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const guides = jsonObject['guides']; 
  });