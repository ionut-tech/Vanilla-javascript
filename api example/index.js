var users = [];
axios.get('/user?ID=12345')
.then(function (response) {
    //handle succes
    console.log(response);
})
.catch(function(error) {
    //handle error
    console.log(error)
})
