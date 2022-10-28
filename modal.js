// mobile menu toggle

const hamburger = document.querySelector('.hamburger');
const closebtn = document.querySelector('.closebtn');
const navHeader = document.querySelector('.header');
const toggleNavlist = () => {
  navHeader.classList.toggle('active');
};

hamburger.addEventListener('click', () => toggleNavlist());

closebtn.addEventListener('click', () => {
  if (navHeader.classList.contains('active')) {
    navHeader.classList.remove('active');
  }
});

// dynamically populating speakers section start

const speakersData = [
  {
    speakerName: 'Yochai Benkler',
    speakerTitle: 'Professor at Harvard Law School',
    speakerImage: 'SVG/speaker1.png',
    speakerabout:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
  },
  {
    speakerName: 'Kilnam Chon',
    speakerTitle:
      'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    speakerImage: 'SVG/speaker2.png',
    speakerabout:
      "By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.",
  },
  {
    speakerName: 'Sohyeong Noh',
    speakerTitle: 'Art Center Nabi Director, CC Korea Director',
    speakerImage: 'SVG/speaker3.png',
    speakerabout:
      "As the author of <Digital Art Art of Our Time>, he opened 'Art Center Nabi', Korea's first digital art institution in 2000, and is currently serving.",
  },
  {
    speakerName: 'Julia Reda',
    speakerTitle: 'Head of the Young Pirates of Europe',
    speakerImage: 'SVG/speaker4.png',
    speakerabout:
      "European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU's copyright law in July.",
  },
  {
    speakerName: 'Lila Tretikov',
    speakerTitle: 'Secretary General of the Wikimedia Foundation',
    speakerImage: 'SVG/speaker5.png',
    speakerabout:
      "Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world's population.",
  },
  {
    speakerName: 'Ryan Merkley',
    speakerTitle: 'Creative Commons CEO, Former Mozilla Foundation COO',
    speakerImage: 'SVG/speaker6.png',
    speakerabout:
      'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

const speakerGrid = document.querySelector('.speakerGrid');
for (let i = 0; i < speakersData.length; i += 1) {
  speakerGrid.innerHTML += `<div class="speakerWraper">
<img src="${speakersData[i].speakerImage}" alt="" class="speakerImage" />
<div class="speakerDescription">
  <h5 class="speakerName">${speakersData[i].speakerName}</h5>
  <h6 class="speakerTitle">
    ${speakersData[i].speakerTitle}
  </h6>
  <hr />
  <p class="speakerabout">
    ${speakersData[i].speakerabout}
  </p>
</div>
</div>
`;
}

// end
