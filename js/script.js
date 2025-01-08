const emailElm = document.getElementById("email")

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(function(response){
let email = response.data.response;
emailElm.innerHTML += email;
})

