const  form  = document.getElementById('loginform');

form.addEventListener('submit',async function (e){
    e.preventDefault();
    const formdata = {
        Email : form.Email.value,
        Password : form.Password.value,
    };
    console.log(formdata.Email);
    try{
        const res = await fetch('http://localhost:3000/login',{
        method : 'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(formdata)
    });
    const result = await res.json();
    if(res.ok){
         showpopup(result.message);
         setTimeout(() => {
             window.location.href = '../index.html';
         }, 3000);
    }
    else{

        showpopup(result.message || 'Login Failed');
    }
    }
    catch(e){
         showpopup('Server Error');
        //  window.location.href = '../index.html'
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
