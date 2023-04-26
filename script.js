let cards = document.querySelector(".cardss");
let select = document.querySelector(".form-select")
let loading = document.querySelector(".loader")
let API_URL = "https://jsonplaceholder.typicode.com/users";

cards.innerHTML = "";


const users = function (API_URL) {
    loading.style.display = "block"
    fetch(API_URL).then((res) => res.json()).then((data) => data.forEach(data => {
        loading.style.display = "none"

        cards.innerHTML += `<div class="col-4 mb-3 aaa">
                        <div class="w3-card-4 w3-dark-grey aaa">
    
                        <div class="w3-container w3-center p-3">
                          <h3>${data.name}</h3>
                          <img src="https://th.bing.com/th/id/OIP.5rP92WtgJkUMtHRbuv-SpgHaEH?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Avatar" style="width:80%">
                          <h5> <b>Email</b> : ${data.email}</h5>
                          <h5> <b>Address </b> : ${data.address.street}  ${data.address.city}</h5>
                          <h5> <b>Phone </b> :  ${data.phone}</h5>
                          <h5> <b>Company </b> :  ${data.company.name}</h5>
                        
                          <button class="w3-button w3-green">Accept</button>
                          
                        </div>
                        
                        </div>
                </div>`
    }))

}

users(API_URL);
select.addEventListener("change", () => {
    // console.log(select.value);
    fetch(API_URL).then((res) => res.json()).then((data) => data.forEach(data => {
        loading.style.display = "none"

        if (select.value == "ID")  {
            cards.innerHTML += `<div class="col-4 mb-3 aaa">
                        <div class="w3-card-4 w3-dark-grey aaa">
    
                        <div class="w3-container w3-center p-3">
                          <h3>${data.name}</h3>
                          <img src="https://th.bing.com/th/id/OIP.5rP92WtgJkUMtHRbuv-SpgHaEH?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Avatar" style="width:80%">
                          <h5> <b>Email</b> : ${data.email}</h5>
                          <h5> <b>Address </b> : ${data.address.street}  ${data.address.city}</h5>
                          <h5> <b>Phone </b> :  ${data.phone}</h5>
                          <h5> <b>Company </b> :  ${data.company.name}</h5>
                        
                          <button class="w3-button w3-green">Accept</button>
                          
                        </div>
                        
                        </div>
                </div>`
            
        } if (select.value == "Username") {
            let arr = [];
            arr.push(data);
           for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].name);
            
           }
        }
    }))

})

