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
})