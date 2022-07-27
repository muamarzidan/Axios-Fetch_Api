var link = "https://reqres.in/api/users";

fetch(link+'/1')
    .then((response)=>response.json()).then((data) => {
        console.log(data.data);
    }).catch((error) => {
        console.log('error : ' + error);
        }
    );

axios.get(link+'/1')
    .then((data) => console.log(data.data))
    .catch((error) => console.log('error : ' + error));

fetch(link, {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Omiru',
        job: 'coders'
    })
})
.then((response) => response.json()).then((data) => 
    console.log(data)
);

axios.post(link, {
    name: 'Omiru',
    age: '21'
})
.then((data) => console.log(data));

fetch(link+'/x')
.then((response) => console.log(response)).catch((error) => console.log('error : ' + error));

axios.get(link+'/x').then((response) => console.log(response))
.catch((error) => console.log('error : ' + error));