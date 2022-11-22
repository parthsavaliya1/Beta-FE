export function addBlackClass() {
  let body = document.body;
  if (!body.classList.contains("bg-black")) {
    body.classList.add("bg-black");
  }
  if (body.classList.contains("bg-gray")) {
    body.classList.remove("bg-gray");
  }
}

export function addGrayClass() {
  let body = document.body;
  if (body.classList.contains("bg-black")) {
    body.classList.remove("bg-black");
  }
  if (!body.classList.contains("bg-gray")) {
    body.classList.add("bg-gray");
  }
}
