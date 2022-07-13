const message = document.getElementById(
  "ContentPlaceHolder1_txtSignedMessageReadonly"
).value;

const signature = document.getElementById(
  "ContentPlaceHolder1_txtSignatureHash"
).value;

const sendMessageDiscord = async () => {
  if (signature && message) {
    await fetch(
      `https://signing-discord-bot.herokuapp.com/send-message?username=<VeryCoolProgrammer />&signature=${signature}&message=${message}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));

    alert("Message is sent !");
  }
};

window.addEventListener("load", () => {
  const sendDiscord = confirm(
    "Do you want to send this message in the discord server ?"
  );

  if (sendDiscord) {
    sendMessageDiscord();
  }
});
