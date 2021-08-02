const textArea = document.querySelector("#english-text");
const translatedText = document.querySelector("#translated-text");
const btn = document.querySelector("button");

const url = `https://api.funtranslations.com/translate/minion.json`;

const constructURL = (inputValue) => {
  return `${url}?text=${encodeURI(inputValue)}`;
};

const alertAboutError = (err) => {
  console.log(err);

  alert(
    "Hey, something is not working! Please try back in an hour or so and if issue still persists, contact me from my socials"
  );
};

const handleTranslation = () => {
  const textStr = textArea.value;
  if (textStr !== "") {
    const finalURL = constructURL(textStr);
    fetch(finalURL)
      .then((res) => res.json())
      .then((data) => (translatedText.textContent = data.contents.translated))
      .catch((error) => alertAboutError(error));
  } else if (textStr === "") {
    alert("Message box cannot be empty!");
  }
};

btn.addEventListener("click", handleTranslation);
