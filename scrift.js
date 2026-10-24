let currentTool = "AI Image Generator";

function openTool(tool){

  currentTool = tool;

  document.getElementById("toolTitle").textContent = tool;

  document.getElementById("prompt").placeholder =
    "Describe what you want to create with " + tool + "...";

  document.querySelector(".generator").scrollIntoView({
    behavior:"smooth"
  });

}


function searchTools(){

  const input =
    document.getElementById("searchInput").value
    .toLowerCase()
    .trim();

  const cards =
    document.querySelectorAll(".tool-card");

  cards.forEach(card => {

    const text =
      card.innerText.toLowerCase();

    if(text.includes(input) || input === ""){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }

  });

}


function filterCategory(category){

  const cards =
    document.querySelectorAll(".tool-card");

  cards.forEach(card => {

    if(category === "all"){
      card.style.display = "block";
      return;
    }

    if(card.classList.contains(category)){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }

  });

  document.getElementById("tools").scrollIntoView({
    behavior:"smooth"
  });

}


function scrollToTools(){

  document.getElementById("tools").scrollIntoView({
    behavior:"smooth"
  });

}


function generate(){

  const prompt =
    document.getElementById("prompt").value.trim();

  const title =
    document.getElementById("resultTitle");

  const text =
    document.getElementById("resultText");

  const loading =
    document.getElementById("loading");


  if(!prompt){

    alert("Please describe what you want to create.");

    return;

  }


  loading.style.display = "block";

  title.textContent =
    "Creating your " + currentTool + "...";

  text.textContent =
    "Preparing your AI result...";


  setTimeout(() => {

    loading.style.display = "none";

    title.textContent =
      currentTool + " is ready!";

    text.textContent =
      "Demo complete. Real AI generation will be connected through the backend API.";

  },1500);

}


function buy(credits){

  alert(
    credits +
    " AI credits selected. Razorpay payment will be connected later."
  );

}
