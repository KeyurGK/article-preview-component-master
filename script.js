const shareButton = document.getElementsByClassName("share-button")[0];
const shareResponse = `<div><h3>SHARE</h3></div>`;
const footerResponse = document.querySelector(".container__content-footer");
const handleShare = () => {
  const newResponse = document.createElement("div");
  footerResponse.innerHTML = shareResponse;
  //   footerResponse.appendChild(newResponse);
};

shareButton.addEventListener("click", handleShare);
