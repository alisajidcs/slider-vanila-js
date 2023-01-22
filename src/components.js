export function Slide({ text, image, name, designation }) {
  const el = document.createElement("template");
  el.innerHTML = `
  <div class="slide bg-aqua">
    <p class="text">
      ${text}
    </p>
    <img
      class="profile"
      src="${image}"
    />
    <h4 class="name">${name}</h4> 
    <h4 class="designation">${designation}</h4>
    <Button class="view-cv">View CV Sample</Botton>
  </div>
  `.trim();
  return el.content.firstChild;
}

export function Circle(active = false) {
  const el = document.createElement("span");
  el.className = `circle ${active ? "active" : ""}`;
  return el;
}

export function SlideShow() {
  const el = document.createElement("template");
  el.innerHTML = `
    <div class="slide-show">
      <div class="slide-show-container">
        <div class="arrow left"><</div>
        <div class="arrow right">></div>
        <div class="slides"></div>
      </div>
      <div class="pagination" />
    </div>
  `.trim();
  return el.content.firstChild;
}
