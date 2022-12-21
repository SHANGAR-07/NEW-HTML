function btn() {
    let inputfullName = document.getElementById("merchant-name").value
    let inputEmail = document.getElementById("merchant-gmail").value
    let inputNumber = document.getElementById("merchant-phone").value
    let inputwebsite = document.getElementById("merchant-website").value
    let inputContactName = document.getElementById("merchant-contactname").value
    let inputContactNumber = document.getElementById("merchant-contactnumber").value
    let inputContactEmail = document.getElementById("merchant-contactemail").value
    let inputNotes = document.getElementById("merchant-notes").value
    let inputmerchanttype = document.merchants.type1.value
    let inputmerchanttype1 = document.getElementById("merchant-category").value
    let inputmerchanttype3 = document.getElementById("merchant-commissionpercentage").value
    let inputActiveForm = document.getElementById("merchant-date").value
    let inputmerchanttype2 = document.merchants.type2.value
    if (inputfullName === "") {
        alert("Fill all the Details")
        return
    }
    if (inputEmail === "") {
        alert("Fill all the Details")
        return
    }
    if (inputNumber === "") {
        alert("Fill all the Details")
        return
    }
    if (inputNotes === "") {
        alert("Fill all the Details")
        return
    }
    if (inputmerchanttype === "") {
        alert("Fill all the Details")
        return
    }
    if (inputmerchanttype1 === "") {
        alert("Fill all the Details")
        return
    }
    if (inputmerchanttype3 === "") {
        alert("Fill all the Details")
        return
    }
    if (inputActiveForm === "") {
        alert("Fill all the Details")
        return
    }
    if (inputmerchanttype2 === "") {
        alert("Fill all the Details")
        return
    }
    let PersonalInformation = {
        Name: inputfullName,
        Email: inputEmail,
        Phone: inputNumber,
        Website: inputwebsite,
        ContactName: inputContactName,
        ContactNumber: inputContactNumber,
        ContactEmail: inputContactEmail,
        Notes: inputNotes,
        Types: inputmerchanttype,
        Category: inputmerchanttype1,
        CommissionPercentage: inputmerchanttype3,
        ActiveForm: inputActiveForm,
        PaymentOptions: inputmerchanttype2
    }
    console.log(PersonalInformation)
    var name = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (inputfullName.match(name)) {
        console.log("Sucess")
    } else {
        alert("Please Enter the valid Name")
        return;
    }
    console.log(PersonalInformation)
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputEmail.match(email)) {
        console.log("Sucess")
    } else {
        alert("Enter the valid email-id")
        return;
    }

    console.log(PersonalInformation)
    var number = /^\d{10}$/;
    if (inputNumber.match(number)) {
        console.log("Sucess")
    } else {
        alert("Enter the valid number")
        return;
    }
    console.log(PersonalInformation)
    var website = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (inputwebsite.match(website)) {
        console.log("Sucess")
    } else {
        alert("Enter the valid website")
        return;
    }
    console.log(PersonalInformation)
    var contactname = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (inputContactName.match(contactname)) {
        console.log("Sucess")
    } else {
        alert("Please Enter the valid Name")
        return;
    }
    console.log(PersonalInformation)
    var contactemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputContactEmail.match(contactemail)) {
        console.log("Sucess")
    } else {
        alert("Enter the valid email-id")
        return;
    }
    console.log(PersonalInformation)
    var contactnumber = /^\d{10}$/;
    if (inputContactNumber.match(contactnumber)) {
        console.log("Sucess")
    } else {
        alert("Enter the valid number")
        return;
    }

    console.log(PersonalInformation)
    var localStorageData = localStorage.getItem("personalInfo");
    if (localStorageData == null) {
        var storedData = [];
        editflow = false;
        storedData.push(PersonalInformation)
        localStorage.setItem("personalInfo", JSON.stringify(storedData))
    } else { 
        var storedData = JSON.parse(localStorageData);
        if (editflow) {
            editflow = false;
            storedData[editindex] = PersonalInformation;
        } else {
            
            let emailcheck = storedData.findIndex(x => x.Email === PersonalInformation.Email);
            let contactnumbercheck = storedData.findIndex(x => x.Phone === PersonalInformation.Phone);
            if ( emailcheck === -1 && contactnumbercheck === -1) {
                storedData.push(PersonalInformation)
            } else {
                alert("Already data is available")
            }
        }
        localStorage.setItem("personalInfo", JSON.stringify(storedData))
    }
    loadDataIntoTable();
}
function loadDataIntoTable() {
    var localStorageData = localStorage.getItem("personalInfo");
    if (localStorageData == null) return;
    var personalInfoData = JSON.parse(localStorageData);
    var tbody = document.getElementById('personal3');
    tbody.innerHTML = "";
    for (var i = 0; i < personalInfoData.length; i++) {
        var personal = personalInfoData[i];
        if (personal == null) return
        var tr = "<tr id='table-data-" + i + "'><th scope='row'>" + (i + 1) + "</th>";
        tr += "<td>" + personal.Name + "</td>" +
            "<td>" + personal.Email + "</td>" +
            "<td>" + personal.Phone + "</td>" +
            "<td>" + personal.Website + "</td>" +
            "<td>" + personal.ContactName + "</td>" +
            "<td>" + personal.ContactNumber + "</td>" +
            "<td>" + personal.ContactEmail + "</td>" +
            "<td>" + personal.Notes + "</td>" +
            "<td>" + personal.Types + "</td>" +
            "<td>" + personal.Category + "</td>" +
            "<td>" + personal.CommissionPercentage + "</td>" +
            "<td>" + personal.ActiveForm + "</td>" +
            "<td>" + personal.PaymentOptions + "</td>" +
            "<td><button class='btn btn-primary' onClick='editTable(" + i + ")'>Edit</button></td>" +
            "<td><button class='btn btn-danger' onClick='deleteRow(" + i + ")'>Delete</button></td></tr>";
        tbody.innerHTML += tr;
    }
}

function editTable(i) {
    console.log(i);
    var localStorageData = localStorage.getItem("personalInfo");
    if (localStorageData == null) return;
    var personalInfoData = JSON.parse(localStorageData);
    const editData = personalInfoData[i];
    document.getElementById("merchant-name").value = editData.Name
    document.getElementById("merchant-gmail").value = editData.Email
    document.getElementById("merchant-phone").value = editData.Phone
    document.getElementById("merchant-website").value = editData.Website
    document.getElementById("merchant-contactname").value = editData.ContactName
    document.getElementById("merchant-contactnumber").value = editData.ContactNumber
    document.getElementById("merchant-contactemail").value = editData.ContactEmail
    document.getElementById("merchant-notes").value = editData.Notes
    document.merchants.type1.value = editData.Types
    document.getElementById("merchant-category").value = editData.Category
    document.getElementById("merchant-commissionpercentage").value = editData.CommissionPercentage
    document.getElementById("merchant-date").value = editData.ActiveForm
    document.merchants.type2.value = editData.PaymentOptions
    editflow = true;
    editindex = i;
}
function deleteRow(i) {
    var localStorageData = localStorage.getItem("personalInfo");
    if (localStorageData == null) return;
    var storedData = JSON.parse(localStorageData);
    storedData.splice(i, 1)
    console.log(storedData);
    localStorage.setItem("personalInfo", JSON.stringify(storedData))
    loadDataIntoTable();
}
var editflow = false;
var editindex = null;
loadDataIntoTable();


