document.getElementById("add").addEventListener("click", function(event){
    event.preventDefault();

    //error empty after use
    document.getElementById("idError").textContent = "";
    document.getElementById("fnError").textContent = "";
    document.getElementById("lnError").textContent = "";
    formValidation();
})

function formValidation(){
    let missing_fields = [];

    let id = document.getElementById("id").value.trim();
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();

    //id missing
    if(!id){
        document.getElementById("idError").textContent = "Please Enter Id";
        missing_fields.push("ID");
    }

    //firstname missing
    if(!firstName){
        document.getElementById("fnError").textContent = "Please Enter FirstName";
        missing_fields.push("FirstName");
    }

    //lastname missing
    if(!lastName){
        document.getElementById("lnError").textContent = "Please Enter LastName";
        missing_fields.push("LastName");
    }
    
    //send alert box with missing fields if any
    if(missing_fields.length > 0){
        alert("Please Enter: " + missing_fields.join(", "));
        return false;
    }

    //output
    document.getElementById("formData").innerHTML = `ID: ${id} <br> FirstName: ${firstName} <br> LastName: ${lastName}`;
}