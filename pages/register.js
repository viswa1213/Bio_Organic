const  form  = document.getElementById('registerform');

form.addEventListener('submit',async function (e){
    e.preventDefault();
    const formdata = {
        Email : form.Email.value,
        Password : form.Password.value,
    };
    try{
        const res = await fetch('http://localhost:3000/register',{
        method : 'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(formdata)
    });
    const result = await res.json();
    if(res.ok){
         showpopup(result.message);
         setTimeout(() => {
             window.location.href = './login.html';
         }, 3000);
    }
    else{

        showpopup(result.message || 'Login Failed');
    }
    }
    catch(e){
                showpopup('Server Error');
    }
   
})

// pop-up function:

function showpopup(message){
    document.getElementById('popup-message').innerText = message;
    document.getElementById('pop-up').style.display = 'flex';
}

function closepopup(){
    document.getElementById('pop-up').style.display = 'none';
}
