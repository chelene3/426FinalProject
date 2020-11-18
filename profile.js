$(function () {
 
});   

// axios.defaults.withCredentials = true;
async function getUserInfo(){
    const result = await axios( {
        method: 'get',
        url: 'http://localhost:3001/secret',
        withCredentials: false

    });
    console.log(result.data);

}
 

getUserInfo();