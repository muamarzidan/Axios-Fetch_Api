var link = "https://reqres.in/api/users";

// this code to compare how usefull axios than fetch
// but this style is usefull, but you can relate when you use fetch and when you use axios


//when get
fetch(link+'/1')
    .then((response)=>response.json()).then((data) => {
        console.log(data.data);
    }).catch((error) => {
        console.log('error : ' + error);
    });

axios.get(link+'/1')
    .then((data) => console.log(data.data))
    .catch((error) => console.log('error : ' + error));

//when post
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

//when delete
fetch(link+'/1', {
    method: 'delete'
}).then((response) => response.json()).then((data) => {
    console.log(data);
});

axios.delete(link+'/1').then((data) => console.log(data));

//when put
fetch(link+'/1', {
    method: 'put',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Omiru',
        job: 'coders'

    })
    }).then((response) => response.json()).then((data) => {
    console.log(data);
    });


//when error 
fetch(link+'/x')
.then((response) => console.log(response)).catch((error) => console.log('error : ' + error));

axios.get(link+'/x')
.then((response) => console.log(response)).catch((error) => console.log('error : ' + error));