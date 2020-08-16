function submitHere(){
    let uname=document.querySelector("#name").value;
    let pswrd=document.querySelector("#pwd").value;

    if(uname=="" || pswrd==""){
        alert("PLEASE ENTER THE VALUES");

    }

    else{
        let a=document.querySelector("#box1").cloneNode(true);

        a.removeAttribute("id");
        a.style.visibility="visible";
        a.style.fontSize="20px";
        a.style.backgroundColor="burlywood";
        a.style.marginTop="5px";
        
        a.children[0].innerHTML="UserName: "+ uname;
        a.children[1].innerHTML="Password: "+pswrd;

        let b=document.querySelector("#box");
        b.insertBefore(a,b.firstChild);

    }
    
    document.querySelector("#name").value="";
    document.querySelector("#pwd").value="";



}