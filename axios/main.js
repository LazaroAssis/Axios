const url = "http://localhost:5501/api"


function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}


function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        nome.textContent = response.data.name
        avatar.src = response.data.avatar
        city.textContent = response.data.city
    })
    .catch(error => console.error(error))
}


function updateUser(id) {
    axios.put(`${url}/${id}`, updateuser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}


function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const updateuser = {
    name: "Paulo",
    avatar: "https://picsum.photos/200/300",
    city: "Buritis MG"
}


const newUser = {
    name: "Marcelo",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}


getUsers()

getUser(2)

//updateUser(2)

//addNewUser(newUser);

//deleteUser(2)