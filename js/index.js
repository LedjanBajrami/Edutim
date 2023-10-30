// var dropdownMenu = document.querySelector('.dropdown-menu');

// dropdownMenu.addEventListener('click', function (event) {
//   event.stopPropagation();
// });

// document.addEventListener('click', function (event) {
//   dropdownMenu.classList.remove('show');
// });

function animateValue(element, start, end, duration) {
  let startTimestamp = null;

  function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const timeElapsed = timestamp - startTimestamp;
    const progress = Math.min(timeElapsed / duration, 1);
    const animatedValue = Math.floor(start + progress * (end - start));

    element.innerHTML = animatedValue;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const start = 0;
  const end = parseInt(counter.innerText);
  const duration = 2000; 
  animateValue(counter, start, end, duration);
});


function generateFeatureCards() {
  const featureCards = [
    {
      icon: "fa-solid fa-medal",
      title: "Learn from Industry Experts",
      description: "Behind the word mountains, far from the countries Vokalia",
    },
    {
      icon: "fa-regular fa-newspaper",
      title: "Learn the Latest Top Skills",
      description: "Behind the word mountains, far from the countries Vokalia",
    },
    {
      icon: "fa-solid fa-headset",
      title: "Lifetime Access & Support",
      description: "Behind the word mountains, far from the countries Vokalia",
    },
  ];

  const featureCardsContainer = document.querySelector(".three-cards");

  for (let i = 0; i < featureCards.length; i++) {
    const card = featureCards[i];
    const featureCardElement = document.createElement("div");
    featureCardElement.classList.add(
      "col-lg-4",
      "col-md-6",
      "mx-md-auto",
      "d-flex",
      "flex-wrap"
    );

    featureCardElement.innerHTML = `
          <div class="feature-card position-relative d-flex rounded my-2">
            <div class="features-icon me-4">
              <i class="${card.icon}"></i>
            </div>
            <div class="feature-text overflow-hidden">
              <h4 class="mb-3">${card.title}</h4>
              <p>${card.description}</p>
            </div>
          </div>
        `;

    featureCardsContainer.appendChild(featureCardElement);
  }
}

generateFeatureCards();

function generateTopCategoriesCards() {
  const topCategoriesCards = [
    {
      image: "img/img1.jpg",
      icon: "fa-solid fa-laptop",
      title: "Web Development",
      description: "4 Courses",
    },
    {
      image: "img/img2.jpg",
      icon: "fa-solid fa-layer-group",
      title: "Design",
      description: "12 Courses",
    },
    {
      image: "img/img3.jpg",
      icon: "fa-solid fa-bullseye",
      title: "Marketing",
      description: "6 Courses",
    },
    {
      image: "img/img4.jpg",
      icon: "fa-solid fa-rocket",
      title: "Art & Design",
      description: "6 Courses",
    },
    {
      image: "img/img2.jpg",
      icon: "fa-solid fa-shield-heart",
      title: "Design",
      description: "12 Courses",
    },
    {
      image: "img/img1.jpg",
      icon: "fa-solid fa-sliders",
      title: "Web Development",
      description: "4 Courses",
    },
    {
      image: "img/img4.jpg",
      icon: "fa-regular fa-lightbulb",
      title: "Art & Design",
      description: "6 Courses",
    },
    {
      image: "img/img3.jpg",
      icon: "fa-solid fa-robot",
      title: "Marketing",
      description: "6 Courses",
    },
  ];

  const topCategoriesCardsContainer = document.querySelector(".top-cat");

  for (let i = 0; i < topCategoriesCards.length; i++) {
    const card = topCategoriesCards[i];
    const topCateoriesCardElement = document.createElement("div");
    topCateoriesCardElement.classList.add(
      "col-lg-3",
      "col-md-6",
      "d-flex",
      "flex-wrap"
    );

    topCateoriesCardElement.innerHTML = `
        <div class="card position-relative text-center rounded overflow-hidden py-5 pb-4 mb-4">
        <img src="${card.image}" alt="your-image" class="card-image">
        <div class="card-mask"></div>
          <div class="card-body text-white">
              <div class="icon mx-auto mb-2">
                  <i class="${card.icon}"></i>
              </div>
              <h4>${card.title}</h4>
              <p>${card.description}</p>
          </div>
      </div>
        `;

    topCategoriesCardsContainer.appendChild(topCateoriesCardElement);
  }
}

generateTopCategoriesCards();


// const glightbox = GLightbox({
//     selector: '.glightbox'
//   });

const form = document.getElementById('footer-form');
const emailInput = document.getElementById('emailInput');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = emailInput.value;
  alert(`Thank You! We will contact you soon at ${email}`);
});

function generateBlogCards() {
    const blogCards = [
      {
        image: "img/img6.jpg",
        date: "May 19, 2020",
        commentCount: "1",
        title: "Powerful tips to grow business manner",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        image: "img/img7.jpg",
        date: "May 19, 2020",
        commentCount: "1",
        title: "Powerful tips to grow business manner",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        image: "img/img8.jpg",
        date: "May 19, 2020",
        commentCount: "1",
        title: "Python may be you completed online",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      
    ];
  
    const blogCardsContainer = document.querySelector(".blog-cards");
  
    for (let i = 0; i < blogCards.length; i++) {
      const card = blogCards[i];
      const blogCardElement = document.createElement("div");
      blogCardElement.classList.add("col-lg-4", "col-md-6","mx-md-auto");
  
      blogCardElement.innerHTML = `
      <div class="card rounded my-2">
      <img
        src="${card.image}"
        class="card-img-top rounded"
        alt="..."
      />
      <div class="card-body p-3">
        <div>
          <span class="me-4"
            ><i class="fa-solid fa-calendar-days me-2"></i> ${card.date}</span
          >
          <span class="me-4"
            ><i class="fa-solid fa-comments me-2"></i> ${card.commentCount} comment</span
          >
        </div>
        <h5 class="card-title my-3">
        ${card.title}
        </h5>
        <p class="card-text">
          ${card.text}
        </p>
        <a href="#" class="btn red-btn"
          ><i class="fa-solid fa-circle-plus me-2"></i> Read More</a
        >
      </div>
    </div>
          `;
  
      blogCardsContainer.appendChild(blogCardElement);
    }
  }
  
  generateBlogCards();