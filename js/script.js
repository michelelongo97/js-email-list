const emailElm = document.getElementById("email")

for(let i = 0; i < 10; i++) {
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function(response){
let email = response.data.response;
emailElm.innerHTML += `<li>${email}</li>`;
})
}
