const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

const bookingModal = document.getElementById("bookingModal");
const modalClose = document.getElementById("modalClose");
const modalRoomName = document.getElementById("modalRoomName");
const modalRoomPrice = document.getElementById("modalRoomPrice");
const modalTelegramLink = document.getElementById("modalTelegramLink");

const roomButtons = document.querySelectorAll(".room-btn");

const telegramBotUrl = "https://t.me/hotelsupport01_bot";

burgerBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

mobileMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
});

roomButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const roomName = button.dataset.room;
    const roomPrice = button.dataset.price;

    modalRoomName.textContent = roomName;
    modalRoomPrice.textContent = `${formatPrice(roomPrice)} ₽ / ночь`;

    const startParam = `booking_${roomName.toLowerCase()}`;
    modalTelegramLink.href = `${telegramBotUrl}?start=${encodeURIComponent(startParam)}`;

    bookingModal.classList.add("active");
  });
});

modalClose.addEventListener("click", function () {
  bookingModal.classList.remove("active");
});

bookingModal.addEventListener("click", function (event) {
  if (event.target === bookingModal) {
    bookingModal.classList.remove("active");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    bookingModal.classList.remove("active");
  }
});

function formatPrice(price) {
  return new Intl.NumberFormat("ru-RU").format(Number(price));
}
