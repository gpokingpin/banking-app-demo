let users = [
  {
    id: 1,
    fullName: 'Roger Buck',
    username: "1111",
    password: "1111",
    transactions: [100, 200, -300, 200],
  },
  {
    id: 2,
    fullName: 'Tom Jones',
    username: "2222",
    password: "2222",
    transactions: [200, -200, -300, 200],
  },
  {
    id: 3,
    fullName: 'John Travolta',
    username: "3333",
    password: "3333",
    transactions: [1000, -300, -300, 100],
  },
  {
    id: 4,
    fullName: 'Sally Fields',
    username: "4444",
    password: "4444",
    transactions: [1000, -300, -300, 100],
  },
];

let loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  console.log(username, password);

  // see if the username even exists in our users array
  // let currentUser = {};
  // for (let index = 0; index < users.length; index += 1) {
  //   let user = users[index];
  //   if it does exists, see if the password matches
  //   if (username === user.username && password === user.password) {
  //     currentUser = user;
  //   }
  // }
  // document.write(JSON.stringify(currentUser))
  

  // let currentUser = users.find(function (user) {
  //   return username === user.username && password === user.password;
  // });
  let currentUser = users.find(user => username === user.username && password === user.password)

  // if the password matches, render their data
  renderUser(currentUser);

  console.log(currentUser);
});

function renderUser(user) {
  let form = document.querySelector(".login-form");
  form.classList.toggle('hidden');
  let userInfoDiv = document.querySelector('.user-info-div');
  userInfoDiv.classList.toggle('hidden');

  // populate each field in the user info div
  let userSpan = document.querySelector('.user-name');
  userSpan.innerText = user.fullName;

}
