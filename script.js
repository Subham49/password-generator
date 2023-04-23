const lengthbtn = document.getElementById("customRange1")

lengthbtn.addEventListener('change', () => {
    // document.getElementById("length").value = lengthbtn.value
    document.getElementById("length").innerHTML = lengthbtn.value
    var strength = document.getElementById("strength")
    if (lengthbtn.value <= 8) {
        strength.style.backgroundColor = "red"
        strength.style.width = "10vh"
    }
    else if (lengthbtn.value > 8 && lengthbtn.value <= 17) {
        strength.style.backgroundColor = "orange"
        strength.style.width = "20vh"
    }
    else {
        strength.style.backgroundColor = "greenyellow"
        strength.style.width = "35vh"
    }
    // console.log(lengthbtn.value)
})

var password = ""

const setting = document.getElementsByClassName("form-check-input")
const btn = document.getElementById("generate")
btn.addEventListener('click', () => {
    password = ""
    document.getElementById("true").innerText = ""
    document.getElementById("success").innerHTML = ``
    const arr = [
        "abcdefghijklmnopqrstuvwxyz",
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "0123456789",
        "!@#$%^&*"
    ]
    var text = ""
    var c = 0
    for (let i = 0; i < setting.length; i++) {
        if (setting[i].checked)
            text += arr[i]
        else
            c++;
    }

    if (c == 4) {
        document.getElementById("true").innerText = "NO CHECKBOX IS SELECTED"
        return;
    }
    for (let index = 0; index < lengthbtn.value; index++) {
        let randInd = Math.floor(Math.random() * text.length);
        // while(password.includes(text[randInd]))
        // {
        //     randInd = Math.floor(Math.random() * text.length);
        // }
        password += text[randInd]
    }
    // console.log(password)
    document.getElementById("writePass").value = password
})

const copyBtn = document.getElementById("copy")

copyBtn.addEventListener('click', () => {
    console.log('copy')
    navigator.clipboard.writeText(password)
        .then(() => {
            console.log("Value copied to clipboard:", password);
        })
        .catch((error) => {
            console.error("Error copying value to clipboard:", error);
        });
    document.getElementById("success").innerHTML = `
    <h2 class="text-center" style="color: greenyellow;">Copied</h2>
    `
})