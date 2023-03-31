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
  let character = document.querySelector(`input[type='text']`);
  // let search = character.value;
  fetchData(event.target.character.value)
    .then((element) => {
      console.log(element);
      displayName = element.name;
      console.log(displayName);
      
      h2.innerHTML = displayName;
      ablity.innerHTML = `Ablity : ${element.abilities[0].ability.name}`;
      type.innerHTML = `Type : ${element.types[0].type.name}`;
      height.innerHTML = `Height: ${element.height}`;
      weight.innerHTML = `Weight: ${element.weight}`;
    })
    .catch((error) => {
      console.log(error);
    });

  form.reset();
});
