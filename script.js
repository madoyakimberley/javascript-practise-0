//Object giving the blog's Title, Description and Author
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
const aiReadMore = (info) => {
  const aiMore = blogPosts[0];
  info(aiMore);
};
const showAiStory = (more) => {
  alert(`Trending: ${more.title}
                   ${more.description}
              by:
              ${more.author}`);
};
//Display Processor blog
const processorMore = (info) => {
  const processorMore = blogPosts[1];
  info(processorMore);
};
const showProcessorStory = (more) => {
  alert(`Trending: ${more.title}
                    ${more.description}
              by:
              ${more.author}`);
};
//Display OS blog
const operatingSystem = (info) => {
  const osMore = blogPosts[2];
  info(osMore);
};
const showOsStory = (more) => {
  alert(`Trending: ${more.title}
                    ${more.description}
              by:
              ${more.author}`);
};

// Prompt user after 5 seconds to enter name and position
let timeout = 5 * 1000;
setTimeout(() => {
  const name = prompt("Enter Your Name");
  const roll = prompt("Enter Your Tech Position");
  alert(`${name} ,  ${roll} Welcome to Tech News`);
}, timeout);
