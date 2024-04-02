// async awit()

// const url = "http://localhost:3000/users";
// const users = document.querySelector(".users");
// const writeData = async () => {
//   const { data } = await axios(url);
//   data.forEach(({ name, surname, description, image }) => {
//     users.innerHTML += `<div class="user border rounded-5 p-5">
//             <img src="${image}"
//                 alt="">
//             <h2>${name} ${surname}</h2>
//             <p>${description}</p>
//             <button class="btn btn-danger">Delete user </button>
//         </div>`;
//   });
// };
// writeData();

//////////////////////////////////////////////////////////////////////

// fetch()
// const url = "http://localhost:3000/users";
// const users = document.querySelector(".users");
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach(({ name, surname, description, image }) => {
//       users.innerHTML += `<div class="user border rounded-5 p-5">
//                <img src="${image}" alt="">
//                <h2>${name} ${surname}</h2>
//                <p>${description}</p>
//                <button class="btn btn-danger">Delete user</button>
//            </div>`;
//     });
//   })
//   .catch((error) => console.error("Fetch error:", error));

//////////////////////////////////////////////////////////////////////

// axios()
const url = "http://localhost:3000/users";
const users = document.querySelector(".users");
axios(url).then(({ data }) => {
  data.forEach(({ name, surname, description, image }) => {
    users.innerHTML += `<div class="user border rounded-5 p-5">
                <img src="${image}" alt="">
                <h2>${name} ${surname}</h2>
                <p>${description}</p>
                <button class="btn btn-danger">Delete user</button>
            </div>`;
  });
});
