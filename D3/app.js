function myname(){
    console.log("Umesh bingi");
}
function login(event){
    event.preventDefault();
    let mail=document.getElementById("mail").value;
    let pass=document.getElementById("pass").value;
    if(mail==="umesh@gmail" && pass==="1234")
    {
        alert("Successfully Called");
        API();
    }
    else
        alert("login not done!");
}
async function API()
{
    console.log("API called");
    try{
        const response= await fetch("https://671b71052c842d92c37fece8.mockapi.io/webworkshop/products");
        console.log(await response.json());
    }
    catch(error){
        console.error(error);
    }
}