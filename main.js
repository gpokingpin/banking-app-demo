let users = [
  {
    id: 1,
    username: "1111",
    password: "1111",
    transactions: [100, 200, -300, 200],
  },
  {
    id: 2,
    username: "3412",
    password: "2222",
    transactions: [200, -200, -300, 200],
  },
  {
    id: 3,
    username: "3333",
    password: "3333",
    transactions: [1000, -300, -300, 100],
  },
];

let loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  console.log(username, password);

//   let currentUser = users.find(function (user) {
//     return user.username === username;
// })
//     console.log(currentUser);
});
