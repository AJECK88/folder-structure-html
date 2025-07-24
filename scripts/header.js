const header = document.querySelector("header");
// const headerHeight = header.offsetHeight;
const headerContent = `
  <nav class="header__container">
    <div class="header__logo">
      <a href="index.html">
        <img src="./../images/img1.jpg" class="img1" alt="Logo">
      </a>
    </div>
    <div class="header__links">
      <ul class="header__list">
        <li class="header__item"><a href="index.html">Home</a></li>
        <li class="header__item"><a href="./pages/about.html">About</a></li>
        <li class="header__item"><a href="contact.html">Contact</a></li>
        <li class="header__item"><a href="gallery.html">Gallery</a></li>
      </ul>
    </div>
    </nav>

`;

header.innerHTML = headerContent;
