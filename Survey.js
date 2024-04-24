const firebaseConfig = {
    apiKey: "AIzaSyDhUlKw6iD-TtC6gwbtFzwA4Euznf8zIwU",
    authDomain: "hypesurvey.firebaseapp.com",
    databaseURL: "https://hypesurvey-default-rtdb.firebaseio.com",
    projectId: "hypesurvey",
    storageBucket: "hypesurvey.appspot.com",
    messagingSenderId: "771240688932",
    appId: "1:771240688932:web:1010888ac64d2f9c7287b1"
  
};

firebase.initializeApp(firebaseConfig);

var contactFormDB =  firebase.database().ref('SurveyForm');

document.getElementById('SurveyForm').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var age = getElementVal('age');
    var gender = getElementVal('gender');
    var location = getElementVal('location');
    var seekhelp = getElementVal('seekhelp');
    var knowledgeable = getElementVal('knowledgeable');
    var experienced = getElementVal('experienced');
    var Behavioral = getElementVal('Behavioral');
    var otherInput = getElementVal('otherInput');
    var substanceid = getElementVal('substanceid');
    var topdrugsid = getElementVal('topdrugsid');
    var suicidal = getElementVal('suicidal');
    var knowwhere = getElementVal('knowwhere');
    var sleep = getElementVal('sleep');
    var caffeine = getElementVal('caffeine');
    var copingMechanisms = getElementVal('copingMechanisms');
    var otherTextbox = getElementVal('otherTextbox');
    var treatment = getElementVal('treatment');
    var education = getElementVal('education');

    saveMessages(age, gender, location, seekhelp, knowledgeable, experienced, Behavioral, otherInput, substanceid, topdrugsid, suicidal, knowwhere, sleep, caffeine, copingMechanisms, otherTextbox, treatment, education);

}



const saveMessages = (age, gender, location, seekhelp, knowledgeable, experienced, Behavioral, otherInput, substanceid, topdrugsid, suicidal, knowwhere, sleep, caffeine, copingMechanisms, otherTextbox, treatment, education) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        age : age,
        gender : gender,
        location : location,
        seekhelp : seekhelp,
        knowledgeable : knowledgeable,
        experienced : experienced,
        Behavioral : Behavioral,
        otherInput : otherInput,
        substanceid : substanceid,
        topdrugsid : topdrugsid,
        suicidal : suicidal,
        knowwhere : knowwhere,
        sleep : sleep,
        caffeine : caffeine,
        copingMechanisms : copingMechanisms,
        otherTextbox : otherTextbox,
        treatment : treatment,
        education : education, 
    });

}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};