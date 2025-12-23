//Array giving the blog's Title, Description and Author
const blogPosts = [
  {
    title: "AI SAVES CHRISTMAS",
    description:
      "From price tracking to personalized gift ideas, artificial intelligence can be a secret weapon for budget-conscious holiday shoppers.",
    author: "Rob Enderle",
  },
  {
    title: "AMD CHALLENGING INTEL",
    description:
      "AMD is no longer just the scrappy underdog; it’s a quiet giant steadily outmaneuvering rivals by capitalizing on their core weaknesses, like Intel’s market vulnerabilities and Nvidia’s growing list of self-inflicted problems.",
    author: "John Ceuz",
  },
  {
    title: "Red Hat’s Evolution",
    description:
      "Red Hat’s recent momentum highlights how open-source innovation, paired with disciplined execution, can redefine how enterprises adopt and scale AI.",
    author: "Matthew Torez",
  },
];
//functions assigning objects to specific classes in the html
//Display AI blog
const aiStorybtn = document.getElementById("showAiStory");
const aiMore = document.getElementById("aiMore");

aiStorybtn.addEventListener("click", showAiStory);

function showAiStory(event) {
  event.preventDefault();

  let aiStory1 = blogPosts[0];

  aiMore.innerHTML = `
    <h3>${aiStory1.title}</h3>
    <p>${aiStory1.description}</p>
    <em>${aiStory1.author}</em>
  `;
  toggleStory(aiMore, this);
}

//DISPLAY PROCESSOR BLOG
const showProcessorbtn = document.getElementById("showProcessorStory");
const processorMore = document.getElementById("processorMore");

showProcessorbtn.addEventListener("click", (event) => {
  event.preventDefault();
  let processorStory1 = blogPosts[1];
  processorMore.innerHTML = `<h3>${processorStory1.title}</h3>
    <p>${processorStory1.description}</p>
    <em>${processorStory1.author}</em>`;
  toggleStory(processorMore, this);
});

//DISPLAY LINUX BLOG

const showOsbtn = document.getElementById("showOsStory");
const osMore = document.getElementById("osMore");

showOsbtn.addEventListener("click", osMoreFn);
function osMoreFn(event) {
  event.preventDefault();
  let osStory = blogPosts[2];
  osMore.innerHTML = `
  <h3>${osStory.title}</h3>
    <p>${osStory.description}</p>
    <em>${osStory.author}</em>
  `;
  toggleStory(osMore, this);
}

//Display One div at a time
function toggleStory(contentDiv, button) {
  if (contentDiv.style.display === "block") {
    contentDiv.style.display = "none";
    button.textContent = "ReadMore";
  } else {
    contentDiv.style.display = "block";
    button.textContent = "ReadLess";
  }
}
