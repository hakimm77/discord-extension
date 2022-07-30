const address = document.getElementById(
  "ContentPlaceHolder1_txtAddressReadonly"
).value;

const message = document.getElementById(
  "ContentPlaceHolder1_txtSignedMessageReadonly"
).value;

const signature = document.getElementById(
  "ContentPlaceHolder1_txtSignatureHash"
).value;

const signatureLink = window.location.href;

const getRequestURL = (channelID) => {
  return `https://signing-discord-bot.herokuapp.com/send-message?address=${address}&signature=${signature}&message=${message}&channelID=${channelID}&signatureLink=${signatureLink}`;
};

const sendMessageDiscord = async (channelID) => {
  const requestURL = getRequestURL(channelID);

  if (signature && message) {
    await fetch(requestURL)
      .then((response) => response.json())
      .then((data) => console.log(data));

    alert("Message is sent !");
  }
};

window.addEventListener("load", async () => {
  const defaultChannelID = localStorage.getItem("CHANNEL_ID") ?? "";
  const channelID = prompt(
    "To send this message type your discord channel id: ",
    defaultChannelID
  );

  if (channelID) {
    localStorage.setItem("CHANNEL_ID", channelID);
    sendMessageDiscord(channelID);
  }
});
