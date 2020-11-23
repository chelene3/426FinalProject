$(function () {
    $(document).on('click', '#login-old-submit', async function(event) {
        event.preventDefault();
        let userTyped = $("#user-old-input").val();
        let passwordTyped = $("#password-old-input").val();
        const result = await axios( {
            method: 'post',
            url: 'https://enigmatic-meadow-24377.herokuapp.com/login',
            data: {
                username: `${userTyped}`,
                password: `${passwordTyped}`
            },
            withCredentials: true
        }).catch(() => {
            $("#login-back").append('<br><p class="has-text-danger">Username or password incorrect. Try again!<p>')
        });
        //console.log(result.data);
        if(result.data == true){
            location.href = "./profile_mockpage.html"
            //$("#name").append('<p>LOGGED IN USER</p>')
            //   getUserInfo();
        } 
        // let cookie = result.data;
      
})

$(document).on('click', '#createaccount-submit', async function(event) {
    event.preventDefault();
    let userTyped = $("#user-new-input").val();
    let password1 = $("#password-one").val();
    let password2= $("#password-two").val();
    
    if (password1 != password2) {
        alert("Passwords do not match, try again!");
        return;
    } else {
        const result = await axios( {
            method: 'post',
            url: 'https://enigmatic-meadow-24377.herokuapp.com/createUser',
            data: {
                username: `${userTyped}`,
                password: `${password1}`
            },
            withCredentials: true
        }).then(() => {
            alert("New User Created")
        });
    }
})
})

// async function getUserInfo(){
//     const result = await axios( {
//         method: 'get',
//         url: 'http://localhost:3001/secret',
//         withCredentials: true

//     });
//     console.log(result.data);

// }
