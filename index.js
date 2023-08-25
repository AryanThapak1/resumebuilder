var resumeButton = document.getElementById("btn2");
let arr = [];

function sendDetails(event) {
    event.preventDefault();

    let personalDetails = {
        name: document.getElementById("fname").value + " " + document.getElementById("lname").value,
        email: document.getElementById("email").value,
        mob_no: document.getElementById("mob_no").value,
    };

    let professionalSkills = {
        skill1: document.getElementById("skill1").value,
        skill2: document.getElementById("skill2").value,
        skill3: document.getElementById("skill3").value,
        skill4: document.getElementById("skill4").value,
    };
    let relevantSkills = {
        skill1: document.getElementById("rskill1").value,
        skill2: document.getElementById("rskill2").value,
        skill3: document.getElementById("rskill3").value,
        skill4: document.getElementById("rskill4").value,
    };

    let educationDetails = {
        cname: document.getElementById("cname").value,
        sname: document.getElementById("sname").value,
        crname: document.getElementById("crname").value,
    };

    let workDetails = {
        role: document.getElementById("role").value,
        desc: document.getElementById("desc").value,
    };

    arr = [
        personalDetails,
        professionalSkills,
        relevantSkills,
        educationDetails,
        workDetails,
    ];

    localStorage.setItem("resumeData", JSON.stringify(arr));

    window.location.href = "/resume.html";
}

resumeButton.addEventListener("click", sendDetails);
