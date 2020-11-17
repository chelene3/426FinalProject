$(function () {
    $(document).on('click', '#login-old-submit', async function(event) {
        event.preventDefault();
        let userTyped = $("#user-old-input").val();
        let passwordTyped = $("#password-old-input").val();
        const result = await axios( {
            method: 'post',
            url: 'http://localhost:3000/login',
            data: {
                username: `${userTyped}`,
                password: `${passwordTyped}`
            }
        })
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
            url: 'http://localhost:3000/login',
            data: {
                username: `${userTyped}`,
                password: `${password1}`
            }
        })
    }
})
})