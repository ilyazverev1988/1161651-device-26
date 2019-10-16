    var link = document.querySelector(".modal-open");
    var popup = document.querySelector(".modal-write");
    var close = document.querySelector(".popup-close");
    var name1 = document.querySelector(".your-name");
    var form = document.querySelector(".write-us");
    var email = document.querySelector("[name=email]");
    var letter = document.querySelector("[name=letter]");
    var isStorageSupport = true;
    var storage = "";

    if (storage) {
      name1.value = storage;
      email.value = storage;
    }

    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

    form.addEventListener("submit", function (evt) {
      if (!name1.value || !email.value || !letter.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("name1", name1.value);
          localStorage.setItem("email", email.value);
        }
      }
    });

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-write-open");
      name1.focus();
    });
    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-write-open");
      popup.classList.remove("modal-error");
    });

    if (storage) {
      name1.value = storage;
      email.focus();
    } else {
      name1.focus();
    }


    var closeMap = document.querySelector(".popup-close-map");
    var mapOpen = document.querySelector(".map");
    var mapPopup = document.querySelector(".map-popup");
    mapOpen.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-write-open");
    });
    closeMap.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-write-open");
    });
