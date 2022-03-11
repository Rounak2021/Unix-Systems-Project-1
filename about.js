var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 4000);



image

var image = document.getElementById("img");
image.style.position = "absolute";
image.style.width = "300px";
image.style.height = "300px";
image.style.marginLeft = "490px";


var reviews = [
    {
      id: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quidem praesentium nam molestias, quis quaerat aliquid saepe consequatur, iusto minima voluptatem dolores corrupti. Est pariatur doloremque minima earum fugiat illo. Quisquam consequatur velit, tempore autem deserunt officia, quaerat animi earum eaque dolorem sint quasi asperiores corrupti quia aliquam dolorum quam distinctio molestiae non porro nemo vitae. Impedit saepe libero, eius harum beatae blanditiis, dolorum iure et ipsam neque, accusamus nemo explicabo laudantium. Iste reiciendis numquam quaerat ex, facilis velit veritatis.",
      img: "Images/product4-cover card.svg", 
    },
    {
        id: 2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quidem praesentium nam molestias, quis quaerat aliquid saepe consequatur, iusto minima voluptatem dolores corrupti. Est pariatur doloremque minima earum fugiat illo. Quisquam consequatur velit, tempore autem deserunt officia, quaerat animi earum eaque dolorem sint quasi asperiores corrupti quia aliquam dolorum quam distinctio molestiae non porro nemo vitae. Impedit saepe libero, eius harum beatae blanditiis, dolorum iure et ipsam neque, accusamus nemo explicabo laudantium. Iste reiciendis numquam quaerat ex, facilis velit veritatis.",
        img: "Images/product3-cover card.svg",
    },
    {
        id: 3,
        description: "Every day, think as you wake up, today I am fortunate to be alive, I have a precious human life, I am not going to waste it. I am going to use all my energies to develop myself, to expand my heart out to others; to achieve enlightenment for the benefit of all beings. I am going to have kind thoughts towards others, I am not going to get angry or think badly about others. I am going to benefit others as much as I can. You - yourself, not someone else - need to determine where you want to go and what you want to do in your life. And once you make that decision, you can begin mapping a plan to get there and focusing on that objective every single day.",
        img: "Images/product2-cover card.svg",
    },
    {
        id: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quidem praesentium nam molestias, quis quaerat aliquid saepe consequatur, iusto minima voluptatem dolores corrupti. Est pariatur doloremque minima earum fugiat illo. Quisquam consequatur velit, tempore autem deserunt officia, quaerat animi earum eaque dolorem sint quasi asperiores corrupti quia aliquam dolorum quam distinctio molestiae non porro nemo vitae. Impedit saepe libero, eius harum beatae blanditiis, dolorum iure et ipsam neque, accusamus nemo explicabo laudantium. Iste reiciendis numquam quaerat ex, facilis velit veritatis.",
        img: "images/rocket_logo.svg",
    },
  ];
  
  var img = document.getElementById("img");
  var description = document.getElementById("description");
  var prevBtn = document.querySelector(".prev-btn");
  var nextBtn = document.querySelector(".next-btn");
  var currentIndex = 0;
  prevBtn.addEventListener("click", prevClick);
  nextBtn.addEventListener("click", nextClick);
  
  function prevClick() {
    if (currentIndex === 0) {
      currentIndex = reviews.length - 1;
    } else {
      currentIndex--;
    }
    console.log(currentIndex);
    updateUserDetails();
  }
  
  function nextClick() {
    if (currentIndex === reviews.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    console.log(currentIndex);
    updateUserDetails();
  }
  
  
  
  function updateUserDetails() {
    img.src = reviews[currentIndex].img;
    description.innerText = reviews[currentIndex].description;
  }