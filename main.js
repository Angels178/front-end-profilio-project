const form = document.querySelector(`form`);

let text = document.querySelector(`input[type='text']`);

const submit = document.querySelector(`input[type='submit']`);

let h2 = document.querySelector(`h2`);

let main = document.querySelector(`main`);

let p = document.createElement(`p`);

let ablity = document.querySelector(`.ablity`);

let type = document.querySelector(`.type`);

let height = document.querySelector(`.height`);

let weight = document.querySelector(`.weight`);

let id = document.querySelector(`.id`);

let div = document.querySelector(`div`);

async function fetchData(based_url) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${based_url}/`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetchData(event.target.character.value)
    .then((element) => {
      if (!element) {
        alert(`Error! Please enter the correct name!`);
      }
      displayName = element.name;
      h2.innerHTML = displayName;
      id.innerHTML = `ID Number: ${element.id}`;
      type.innerHTML = `Type : ${element.types[0].type.name}`;
      ablity.innerHTML = `Ablity : ${element.abilities[0].ability.name}`;
      height.innerHTML = `Height: ${element.height}`;
      weight.innerHTML = `Weight: ${element.weight}`;
    })

    .catch((error) => {
      console.log(error);
    });

  form.reset();
});
