const button = document.getElementById('trigger');
const container = document.getElementById('container');

function clicked(){
   container.style.display='block';
   }
button.addEventListener('click', clicked)

const userInput= document.getElementById('user-input');
const chatBox = document.getElementById('main');

function displayChat(message, sender){
    if(!message) return;
   
    const chatDiv = document.createElement('div');
   const msg = document.createElement('p')
   chatDiv.appendChild(msg)

   if(sender === 'user'){
    chatDiv.classList.remove("bot-message")
    chatDiv.classList.add("user-message")
   }
   else{
     chatDiv.classList.remove("user-message")
       chatDiv.classList.add("bot-message")
   }
   msg.innerHTML = message
    chatBox.appendChild(chatDiv) 
}

const aiMessages = ["Hi there! How can i help?", "No problem! Let me connect you to a customer support agent."];
let count = 0;

function sendMessage(event){

    if(event.keyCode === 13){
        event.preventDefault()

    const userMessage = userInput.value;
    displayChat(userMessage, 'user')
    
    setTimeout(() => {
        displayChat(aiMessages[count]);
        count++
        
        setTimeout(()=>{
        if(aiMessages.length === count){
            displayChat("Hi there! I'm Hannah. How can i help you",'agent')
        }
    }, 1000)
      }, 1000) 
     
      userInput.value ="";
    }

}
userInput.addEventListener("keydown", sendMessage)
