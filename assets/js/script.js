const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");
const navLink = document.querySelectorAll(".nav-container a");
const html = document.querySelector("html");

const sendBtn = document.querySelector(".send-btn");
const fullName = document.querySelector(".fullname-input ");
const firstName = document.querySelector(".firstname-input");
const email = document.querySelector(".email-input");
const message = document.querySelector(".message-input");
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const faqTexts = document.querySelectorAll(".faq-text");
const faqLists = document.querySelectorAll(".faq-list > li");

const tabContent = document.querySelector(".tab-content");
const tabNav = document.querySelectorAll(".tab-nav > li");
const tabList = document.querySelectorAll(".tab-content > li");

const sliderContainer = document.querySelector(".demos-slider");
const demoSlides = document.querySelectorAll(".demos-slider > li");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");

const minRange = document.querySelector(".min-input");
const maxRange = document.querySelector(".max-input");

const minPrice = document.querySelector(".min-price");
const maxPrice = document.querySelector(".max-price");

const filterBtn = document.querySelector(".filter-btn");
const showAllBtn = document.querySelector(".show-btn");

const defaultSort = document.querySelector(".defaultSort");
const lowSort = document.querySelector(".lowSort");
const highSort = document.querySelector(".highSort");

const filterNavs = document.querySelectorAll(".filter-list a");

const imgContainer = document.querySelector(".img-container");
let filterFlag = 0; // for filtering purpose
const productList = [
  {
    "imgUrl": "assets/images/shop0.jpg",
    "product": "Smart watch",
    "price": "46",
    "minPrice": "",
    "discount": "",
    "dataProduct": "wonderful"
  },
  {
    "imgUrl": "assets/images/shop1.jpg",
    "product": "Fitness tracker",
    "price": "25",
    "minPrice": "",
    "discount": "",
    "dataProduct": "creative"
  },
  {
    "imgUrl": "assets/images/shop2.jpg",
    "product": "Air pods",
    "price": "76",
    "minPrice": "52",
    "discount": "-50",
    "dataProduct": "creative"
  },
  {
    "imgUrl": "assets/images/shop3.jpg",
    "product": "Phone",
    "price": "46",
    "minPrice": "",
    "discount": "",
    "dataProduct": "awesome"
  },
  {
    "imgUrl": "assets/images/shop4.jpg",
    "product": "Notebook",
    "price": "23",
    "minPrice": "",
    "discount": "",
    "dataProduct": "awesome"
  },
  {
    "imgUrl": "assets/images/shop5.jpg",
    "product": "Mouse",
    "price": "98",
    "minPrice": "",
    "discount": "",
    "dataProduct": "responsive"
  },
  {
    "imgUrl": "assets/images/shop6.jpg",
    "product": "Media player",
    "price": "22",
    "minPrice": "",
    "discount": "",
    "dataProduct": "responsive"
  },
  {
    "imgUrl": "assets/images/shop7.jpg",
    "product": "Red cap",
    "price": "55",
    "minPrice": "",
    "discount": "",
    "dataProduct": "animated"
  }
]

/************************************ Hamburger logic ***********************************************/
//add active
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navContainer.classList.toggle("active-nav");
  html.classList.toggle("html-scroll"); // prevent scrolling
})

//remove active
navLink.forEach(e => {
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navContainer.classList.remove("active-nav");
    html.classList.remove("html-scroll"); // remove prevent scrolling or user can scroll
  })
});

/***************** Contact form validation ************************/
// set input error value empty initially
const inputError = document.querySelectorAll(".input-error");
inputError.forEach((errorInput) => (errorInput.innerHTML = ""));

sendBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent contact form submitting

  if (validateFields()) {
    emptyFormFields();
    alert("Your message is submitted successfully!");
  }
});

function validateFields() {
  let isValidFullName = checkField(fullName);
  let isValidFirstName = checkField(firstName);
  let isValidEmail = checkEmail();
  let isValidMessage = checkMessage();

  // check all form fields are valid or not
  if (!isValidFullName || !isValidFirstName || !isValidEmail || !isValidMessage) {
    return false;
  } else {
    return true;
  }
}

// check contact fields on focus out
fullName.addEventListener("focusout", () => checkField(fullName));
firstName.addEventListener("focusout", () => checkField(firstName));
email.addEventListener("focusout", () => checkEmail());
message.addEventListener("focusout", () => checkMessage());

function checkField(inputField) {
  const fieldValue = inputField.value.trim();

  if (fieldValue === "") {
    const errorText = "*this field is required!";
    const errorParent = inputField.parentElement;

    showError(errorText, errorParent);
    return false;
  } else if (fieldValue.length < 3) {
    const errorText = "*this field should be greater than 3 characters!";
    const errorParent = inputField.parentElement;

    showError(errorText, errorParent);
    return false;
  } else if (!isNaN(fieldValue)) {
    const errorText = "*this field should not have numbers!";
    const errorParent = inputField.parentElement;

    showError(errorText, errorParent);
    return false;
  } else {
    showSuccess(inputField);
    return true;
  }
}

function checkEmail() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    const errorText = "*this field is required!";
    const errorParent = email.parentElement;

    showError(errorText, errorParent);
    return false;
  } else if (emailValue.match(emailPattern) == null) {
    const errorText = "*valid email is required!";
    const errorParent = email.parentElement;

    showError(errorText, errorParent);
    return false;
  } else {
    showSuccess(email);
    return true;
  }
}

function checkMessage() {
  const messageValue = message.value.trim();

  if (messageValue === "") {
    const errorText = "*this field is required!";
    const errorParent = message.parentElement;

    showError(errorText, errorParent);
    return false;
  } else if (messageValue.length < 8) {
    const errorText = "*this field should be greater than 8 characters!";
    const errorParent = message.parentElement;

    showError(errorText, errorParent);
    return false;
  } else {
    showSuccess(message);
    return true;
  }
}

function showError(errorText, errorParent) {
  const showError = errorParent.querySelector(".input-error");
  showError.innerText = errorText;
}

function showSuccess(element) {
  const successParent = element.parentElement;
  const showError = successParent.querySelector(".input-error");

  showError.innerText = "";
}

// empty contact input fields
function emptyFormFields() {
  fullName.value = "";
  firstName.value = "";
  email.value = "";
  message.value = "";
}

/*************** Faq accordion logic ************************/
faqTexts.forEach((faqText, idx) => {
  faqText.addEventListener("click", () => showAccordion(idx));
});

const showAccordion = (idx) => {
  if (faqLists[idx].classList.contains("active-faq"))
    faqLists[idx].classList.remove("active-faq");
  else {
    removeAccordion();
    faqLists[idx].classList.add("active-faq");
  }
};

// remove previous active accordion
const removeAccordion = () => {
  const active = document.querySelector(".active-faq");

  if (active != null) active.classList.remove("active-faq");
};

/*************** Tabs logic ************************/
tabNav.forEach((tab, idx) => tab.addEventListener("click", () => changeTab(idx)));

const changeTab = idx => {
  removeActive();

  tabNav[idx].classList.add("active-tab");
  tabList[idx].classList.add("active-content");
}

// remove previous active nav and active content
function removeActive() {
  const activeContent = document.querySelector(".active-content");
  const activeTab = document.querySelector(".active-tab");

  activeContent.classList.remove("active-content");
  activeTab.classList.remove("active-tab");
}

/*************** Sale Countdown counter logic ************************/
function counter() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // set date, time, year, month and sale's date and time
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    sale = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > sale) {
    sale = dayMonth + nextYear;
  }

  const countDown = new Date(sale).getTime(); // set sale time
  const x = setInterval(function () {
    const now = new Date().getTime(); // get current time
    const distance = countDown - now;

    document.querySelector(".days").innerText = Math.floor(distance / (day));
    document.querySelector(".hours").innerText = Math.floor((distance % (day)) / (hour));
    document.querySelector(".minutes").innerText = Math.floor((distance % (hour)) / (minute));
    document.querySelector(".seconds").innerText = Math.floor((distance % (minute)) / second);

    //clearInterval when date is reached
    if (distance < 0) {
      clearInterval(x);
    }

  }, 0)
}

window.addEventListener("load", () => counter());

/*************** Demos slider logic ************************/
let activeSlide = 0;

slideRight.addEventListener("click", classRight);
slideLeft.addEventListener("click", classLeft);

function classRight() {
  activeSlide++;

  if (activeSlide > demoSlides.length - 1) {
    activeSlide = 0;
    sliderContainer.scrollLeft -= 1300 * 2; // scroll to first slide
  } else
    sliderContainer.scrollLeft += 1300; // scroll sliderContainer to 1300px horizontally
}

function classLeft() {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = demoSlides.length - 1;
    sliderContainer.scrollLeft += 1300 * 2; // scroll to last slide
  } else
    sliderContainer.scrollLeft -= 1300; // scroll sliderContainer to -1300px horizontally
}

/************************************ Show shop images logic ***********************************************/
const showProducts = products => {
  if (filterFlag == 1) {
    removeProducts();
    filterFlag = 0;
  }

  for (const product of products) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const div = document.createElement("div");
    const span = document.createElement("span");
    const minPrice = document.createElement("span");
    const discount = document.createElement("span");

    li.dataset.product = `${product.dataProduct}`;

    img.src = `${product.imgUrl}`;
    img.alt = `${product.product}`;

    discount.classList.add("discount");
    discount.innerHTML = `${product.discount}`;

    h3.classList.add("product-heading");
    h3.classList.add("purple");
    h3.innerHTML = `${product.product}`;

    div.classList.add("price-container");

    span.classList.add("price");
    span.innerHTML = `${product.price}`;

    minPrice.classList.add("line-through");
    minPrice.innerHTML = `${product.minPrice}`;

    if (product.discount != "" && product.minPrice != "") {
      div.append(span, minPrice);
      li.append(img, discount, h3, div);
      imgContainer.append(li);
    } else {
      div.append(span);
      li.append(img, h3, div);
      imgContainer.append(li);
    }
  }
}

// remove all current products
const removeProducts = () => {
  const products = document.querySelectorAll(".img-container > li");

  for (const product of products) {
    product.remove();
  }
}

/************************************* Price Range Filter Logic *******************************************/
/* Get Range Slider Value logic */
minRange.addEventListener("input", () => {
  if (minRange.value >= 50)
    minRange.value = 50; // prevent minRange to slide after 50th value
  minPrice.innerHTML = minRange.value;
});

maxRange.addEventListener("input", () => {
  if (maxRange.value <= 55)
    maxRange.value = 55; // prevent maxRange to slide before 55th value
  maxPrice.innerHTML = maxRange.value;
});

// filter btn functionality
filterBtn.addEventListener("click", () => {
  const minPrice = minRange.value, maxPrice = maxRange.value;

  const filterProducts = productList.filter(product => {
    if (product.price >= minPrice && product.price <= maxPrice) {
      filterFlag = 1;
      return product;
    }
  });
  showProducts(filterProducts);
});

// show all btn functionality
showAllBtn.addEventListener("click", () => {
  removeProducts();
  showProducts(productList);
});

/************************************ Price sorting logic ***********************************************/
defaultSort.addEventListener("click", () => {
  previousActive();
  defaultSort.classList.add("active-sort");

  removeProducts();
  showProducts(productList);
});

lowSort.addEventListener("click", () => {
  previousActive();
  lowSort.classList.add("active-sort");

  const sort = productList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  removeProducts();
  showProducts(sort);
});

highSort.addEventListener("click", () => {
  previousActive();
  highSort.classList.add("active-sort");

  const sort = productList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  removeProducts();
  showProducts(sort);
});

// remove previous active sort class
const previousActive = () => {
  const activeSort = document.querySelector(".active-sort");
  activeSort.classList.remove("active-sort");
}

/************************************ Product type filter logic ***********************************************/
filterNavs.forEach(nav => nav.addEventListener("click", () => changeImageList(nav)));

const changeImageList = nav => {
  const getNavData = nav.getAttribute("data-nav");

  const activeNav = document.querySelector(".active-filter");
  activeNav.classList.remove("active-filter"); // remove previous active nav

  nav.classList.add("active-filter"); // set current active nav

  // if "all" button is clicked
  if (getNavData == "all") {
    filterFlag = 1;
    showProducts(productList);
    return;
  }

  const filterProducts = productList.filter(product => {
    if (product.dataProduct == getNavData) {
      filterFlag = 1;
      return product;
    }
  });
  showProducts(filterProducts);
}

// triggers when page is loaded
window.addEventListener("load", () => {
  counter();
  showProducts(productList);
});