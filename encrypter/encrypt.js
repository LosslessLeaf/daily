function encrypt() {
    let userString = document.getElementById("encrypted");
    let string = document.getElementById("string").value.toLowerCase();
    let firstInitial = document.getElementById("firstInitial").value.toLowerCase();
    let lastInitial = document.getElementById("lastInitial").value.toLowerCase();
    

    if (string === "") {
        alert("You didn't give us a string!");
        return;
    }
    if (firstInitial == "") {
        alert("You didn't give us your first initial!");
        return;
    }
    if (firstInitial.length > 1) {
        alert("Your first initial is too long!");
        return;
    }
    if (lastInitial == "") {
        alert("You didn't give us your last initial!");
        return;
    }
    if (lastInitial.length > 1) {
        alert("Your last initial is too long!");
        return;
    }
    // TURN ALPHABET STRING INTO ARRAY
    let alphabet = " abcdefghijklmnopqrstuvwxyz".split("");

    // DECLARE LETTERKEY AND FINAL ENCRYPTED MESSAGE
    let letterKey = [];
    let encryptedMessage = [];

    // LOOPS THROUGH ALPHABET AND SETS EQUAL TO A NUMBER IN LETTERKEY
    for (let i = 0; i < 27; i++) {
        letterKey[alphabet[i]] = i;
    }

    // LOOPS THROUGH GIVEN STRING AND ENCRYPTS (FORMULAICALLY), THEN POPULATES ENCRYPTEDMESSAGE ARRAY;
    //FUNCTION: ADD FIRST INITIAL'S KEY TO LAST INITIAL'S, MULTIPLY SUM BY jTH CHAR
    // (FI(k) + LI(k)) * STR[j](k)

    for (let j = 0; j < string.length; j++) {
        let sum = letterKey[firstInitial] + letterKey[lastInitial];
        let total = letterKey[string[j]] * sum;
        encryptedMessage.push(total);
    }

    let stringed = encryptedMessage.join(" ");

    //RETURNS ENCRYPTED MESSAGE
    if (string, firstInitial, lastInitial) {
        userString.innerHTML = "Your encrypted string is: " + "\n" + stringed;
    }




}


function clearForm() {
    document.getElementById("myForm").reset();
    document.getElementById("encrypted").innerHTML = "";
}
