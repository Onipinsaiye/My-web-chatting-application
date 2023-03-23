const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const button5 = document.querySelector("#btn5");
const button6 = document.querySelector("#btn6");
const button7 = document.querySelector("#btn7");
const button8 = document.querySelector("#btn8");
const button9 = document.querySelector("#btn9");
const button10 = document.querySelector("#btn10");
const button11 = document.querySelector("#btn11");
const sendButton = document.querySelector("#btnSend")
const message = document.querySelector("#messageInput")

button1.addEventListener("click", function(){
    document.querySelector("h3").innerHTML = "<em>Chatting with Kola...</em>";
    button1.style.backgroundColor = "#E8E8E8";
})
button2.addEventListener("click", function(){
    document.querySelector("h3").innerHTML = "<em>Chatting with Lola....</em>";
    button2.style.backgroundColor = "#E8E8E8";
})
button3.addEventListener("click", function(){
    document.querySelector("h3").innerHTML = "<em>Chatting with Yusuf....</em>";
    button3.style.backgroundColor = "#E8E8E8";
    document.querySelector("ul").value = "";
})
button4.addEventListener("click", function(){
    document.querySelector("h3").innerHTML = "<em>Chatting with Segun....</em>";
    button4.style.backgroundColor = "#E8E8E8";
})
button5.addEventListener("click", function(){
    document.querySelector("h3").innerHTML = "<em>Chatting with Deji....</em>";
    button5.style.backgroundColor = "#E8E8E8";
})
button6.addEventListener("click", function(){
    document.querySelector("h3").innerHTML = "<em>Chatting with Azeezat....</em>";
    button6.style.backgroundColor = "#E8E8E8";
})
button7.addEventListener("click", function(){
    document.querySelector("h3").innerHTML = "<em>Chatting with Kayode....</em>";
    button7.style.backgroundColor = "#E8E8E8";
})
button8.addEventListener("click", function(){
    document.querySelector("h3").innerHTML = "<em>Chatting with Belikisu....</em>";
    button8.style.backgroundColor = "#E8E8E8";
})
button9.addEventListener("click", function(){
    document.querySelector("h3").innerHTML = "<em>Chatting with Isah....</em>";
    button9.style.backgroundColor = "#E8E8E8";
})
button10.addEventListener("click", function(){
    document.querySelector("h3").innerHTML = "<em>Chatting with Chinenye....</em>";
    button1.style.backgroundColor = "#E8E8E8";
})

sendButton.addEventListener("click", function(){
    if(message.value.length > 0){
        var h3 = document.createElement("h3");
        h3.appendChild(document.createTextNode(message.value));
        document.querySelector("ul").append(h3);
        message.value = "";
    }
});