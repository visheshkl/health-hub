import React, {useState, useEffect} from 'react';
import { Widget, addResponseMessage, toggleInputDisabled } from 'react-chat-widget';
import arcreactor from '../../assets/logo.png'
import 'react-chat-widget/lib/styles.css';
import './JMPSBot.css';

const JMPSBot = (props) => {

  const [badge, setBadge] = useState(1);
  useEffect(() => {
    addResponseMessage('How are you feeling?')
  }, [])

  const handleMessage = (message) => {
    if(message.toLowerCase().includes('help?'))
      setTimeout(() => {addResponseMessage(`Just enter your symptoms with severity and let me try`);}, 1000);
    else if(message.toLowerCase().includes('hey') || message.toLowerCase().includes('hello') | message.toLowerCase().includes(' hi '))
      setTimeout(() => {addResponseMessage(`Hey man!`);}, 1000);
    else {
      setTimeout(() => requestMessageResponse(message), 1200);
    }
  };

  const successList = [
    `Wohooo! You made it to the next question!`,
    `YOU ARE SO SMART!!`,
    `Success! Success! Success!`,
    `I repeat, mission successful!`,
    `I knew you'd do it.. Congratulations!`,
    `Was the question lame?.. or was it your brain? Celebrations!`,
    `You are awesome! Cheers!!`,
    `Enemy Down! Wonderful performance!`
  ];

  const requestMessageResponse = (message) => {
    let error = false;
    fetch('/api/chatbot', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({message})
    })
    .then(response => {
      if(response.status!==200)
        error = true;
      return response.json();
    })
    .then((userData) => {
      if(error)
        throw(userData);
      if(userData.successHint){
        addResponseMessage(userData.message);
      }
      else if(userData.success){
        props.updateUserGameInfo(userData);
        addResponseMessage(successList[Math.floor(Math.random()*(successList.length))]);
        if(userData.end){
          addResponseMessage(`That's the end, my friend!  
            *Plays See You Again*`);
          toggleInputDisabled();
        }
      }
    })
    .catch(err => {
      // addResponseMessage(`I am experiencing technical problems, please try again.`)
      if(message.includes('high fever') && message.includes('chills')){
        addResponseMessage('You may have Maleria or a Viral Infection. However, I recommend you take a Paracetamol and relax. If fever repeats, please visit a doctor!');
      }
      else if(message.includes('fever') && message.includes('headache')){
        addResponseMessage('A fever and a Headache may exhibit a variety of diseases. You can take a paracetamol. Visit a doctor on consistency');
      }
      else if(message.includes('poor appe') && message.includes('stomach') && message.includes('fever')){
        addResponseMessage('It seems like typhoid. Please consult a doctor. Get well soon Amigo!');
      }
      else if(message.includes('fever')){
        addResponseMessage('Take a paracetamol and relax. Consult a doctor on repeatation');
      }
      else if(message.includes('chest pain') && message.includes('left')){
        addResponseMessage('Call an ambulance immediately! You may have a heart attack! I am sending out notifications with your location to nearby Cardiologists.');
      }
      else if(message.includes('cough') && message.includes('cold')){
        addResponseMessage("So you have caught cold. You should be fine in a week. You may take 'Sinarest', 'Cheston Cold', 'Benadryl' and the likes 2 times a day for temporary relaxation. If consistent, visit a doctor.");
      }
      else{
        addResponseMessage("I'm still learning and I don't have the answer to that yet. However, I've made a note and will learn it soon enough.")
      }
    })
  }
  return (
    <div onClick={() => {setBadge(0)}}>
      <Widget 
        handleNewUserMessage={handleMessage}
        title='DocBot'
        subtitle=''
        profileAvatar={arcreactor}
        badge={badge}
        
       />
    </div>
  );
}

export default JMPSBot;
