
const input = document.querySelector('#input');
const form = document.querySelector('#form');
const result = document.querySelector('#result');
const pullar = [500, 200, 100, 50, 20, 10, 5, 1];



form.addEventListener("click", (e) => {
  e.preventDefault();
  result.innerHTML = "";
  let mebleg = +input.value;
  pullar.map((pul) => {
    let say = Math.trunc(mebleg / pul);
    mebleg = mebleg - pul * say;

    if (say) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let i = 0; i < say; i++) {
        const image = document.createElement('img');
        image.src = `./images/${pul}.jpg`;
        image.style.left = `${i * 60}px`
        row.append(image)
      }


      result.append(row)
    }
  });

});