const  form  = document.getElementById('registerform');

form.addEventListener('submit',async function (e){
    e.preventDefault();
    const formdata = {
        Email : form.Email.value,
        Password : form.Password.value,
    };
    console.log(formdata.Email);
    const res = await fetch('http://localhost:3000/register',{
        method : 'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(formdata)
    });
    const result = await res.json();
    if(res.ok){
         alert(result.message);
         window.location.href = './login.html';
    }
    else{

        alert(result.message || 'Login Failed');
    }
})
