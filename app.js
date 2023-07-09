function people_data() {
  fetch("https://reqres.in/api/users?page=1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.data.map((user) => {
        const userDiv = document.getElementById("user-div");
        // Create div element
        const div = document.createElement("div");
        // Insert divs
        div.innerHTML = `
    <div class="infocard">
      <div class=" card " style="width: 18rem;">
          <img src="${user.avatar}" class="card-img-top"></img>
        <div class="card-body">
          <h2 class="card-title">${user.first_name} ${user.last_name}</h2>
          <p class="card-text">Email: ${user.email}</p>


        </div>
      </div>
    </div>
      `;
        userDiv.appendChild(div);
      });
    });
}

function disable() {
  var btn = document.getElementById("disable");
  btn.disabled = true;
}
