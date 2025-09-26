class MenuItem {
  img;
  title;
  description;
  price;

  constructor(_img, _title, _description, _price = 150) {
    this.img = _img;
    this.title = _title;
    this.description = _description;
    this.price = _price;
  }
}

let items = [
  new MenuItem(
    "cake1",
    "Кремовый замок",
    "Нежный крем любого цвета на выбор, вафельная основа"
  ),
  new MenuItem(
    "cake2",
    "Малиновый рай",
    "Воздушный крем, темная основа и ягода малины"
  ),
  new MenuItem("cake3", "Фейерверк", "Разноцветный крем, с бисквитной основой"),
  new MenuItem(
    "cake4",
    "Шоколадный мир",
    "Ореховая стружка, нежный крем и шоколадная основа"
  ),
  new MenuItem(
    "cake5",
    "Слезы дракона",
    "Нежный крем любого цвета на выбор, вафельная основа"
  ),
  new MenuItem(
    "cake6",
    "Летняя фантазия",
    "Украшения в форме сердец, для любимого человека"
  ),
  new MenuItem(
    "cake7",
    "Мыс безумия",
    "Разноцветная основа, стружка и нежный крем"
  ),
  new MenuItem(
    "cake8",
    "Облачная сказка",
    "Светлая основа, нежный крем со стружкой сверху"
  ),
  new MenuItem(
    "cake9",
    "Темный рыцарь",
    "Темная основа, нежный крем и вкусные шарики"
  ),
];

let isLoaded = false;

const catalog = document.querySelector(".menu_catalog");

function initCatalog() {
  if (!catalog) {
    console.error("Элемент не найден!");
  } else if (!isLoaded) {
    items.forEach((item) => {
      let div = document.createElement("div");
      div.className = "menu_item";
      div.innerHTML =
        '<img src="assets/images/' +
        item.img +
        '.png" alt="" class="item_img" />' +
        '<p style="font-weight: bold; font-size: 1.5rem">' +
        item.title +
        "</p>" +
        "<p>" +
        item.description +
        "</p>" +
        '<p style="font-size: 120%">' +
        item.price +
        " &#8381;/шт.</p>" +
        '<a href="#form_section" class="bttn">Заказать</a>';
      console.log(div);
      catalog.appendChild(div);
    });
    isLoaded = true;
  }
}

let toCatalog = document.querySelector(".main_button .bttn");
toCatalog.addEventListener("click", initCatalog);

const callback = (entries, options) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isLoaded) {
      console.log("Есть контакт");
      initCatalog();
    }
  });
};

const options = {
  rootMargin: "0px 0px 0px 0px",
  theshold: 0,
};

const observer = new IntersectionObserver(callback, options);
observer.observe(catalog);

let orderButton = document.querySelector(".form_input .bttn");
let orderPhone = document.querySelector(".form_input input");
let isPoliticsConfirmed = document.querySelector("#confirm_conditions");
if (!orderButton) {
  console.error("Элемент не найден!");
}
if (!orderPhone) {
  console.error("Элемент не найден!");
}
if (!isPoliticsConfirmed) {
  console.error("Элемент не найден!");
}
function confirmOrder() {
  if (!orderPhone.value) {
    alert("Введите номер телефона!");
  } else if (!isPoliticsConfirmed.checked) {
    alert("Вы не приняли условия обработки персональных данных!");
  } else {
    alert(`Мы вам перезвоним по номеру: ${orderPhone.value}`);
    orderPhone.value = "";
    !isPoliticsConfirmed.checked;
  }
}
orderButton.addEventListener("click", confirmOrder);
