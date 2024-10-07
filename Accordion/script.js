const data = [
  {
    id: "1",
    question: "What is your name?",
    answer: "My name is Bipin Lamichhane",
  },
  {
    id: "2",
    question: "What is your name?",
    answer: "My name is Bipin Lamichhane",
  },
  {
    id: "3",
    question: "What is your name?",
    answer: "My name is Bipin Lamichhane",
  },
  {
    id: "4",
    question: "What is your name?",
    answer: "My name is Bipin Lamichhane",
  },
  {
    id: "5",
    question: "What is your name?",
    answer: "My name is Bipin Lamichhane",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (item) =>
        `<div class="accordion_item"> 
            <div class="accordion_title">
                <h3> ${item.question} </h3>
                <button> Clickme </button>
            </div>
            <div class="accordion_tcontent">
                <h3> ${item.answer} </h3>
            </div>
        </div>`
    )
    .join(" ");
}

createAccordionData();
