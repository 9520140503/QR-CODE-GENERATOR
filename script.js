document.getElementById("generate-btn").addEventListener("click",function(){
    const text = document.getElementById("text-in").value;
    document.getElementById("qr-code").innerHTML = "";
    if (text.trim() !== '') {
        new QRCode(document.getElementById("qr-code"), {
            text: text, 
            width: 128, 
            height: 128, 
            colorDark: "#000000", 
            colorLight: "#ffffff", 
            correctLevel: QRCode.CorrectLevel.H 
        });
    } else {
        alert("Please enter a valid URL or text.");
    }
})