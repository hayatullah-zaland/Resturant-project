hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const btn=document.querySelector("#thems");
  let darkMode=localStorage.getItem("darkMode");

  const enableDarkMode=()=>{
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode","active");
  }

  const disableDarkMode=()=>{
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode","null");
  }

  if(darkMode==="active") enableDarkMode();

  btn.addEventListener("click",()=>{
    darkMode=localStorage.getItem("darkMode");
    if(darkMode!="active"){
      enableDarkMode();
    }else{
      disableDarkMode();
    }
  })

  let mainImage=document.querySelector(".main-image");
  const imags=document.querySelectorAll(".image")

  imags.forEach((image) => {
    image.addEventListener("click",()=>{
      mainImage.src=image.src;

      imags.forEach((result)=>{
        result.classList.remove("active");
        image.classList.add("active")
      })
    })
  });

// Keep hero dish choices accessible to keyboard and pointer users.
document.querySelectorAll('#main-content .images button').forEach((choice) => {
  choice.setAttribute('aria-pressed', String(choice.classList.contains('selected')));
  choice.addEventListener('click', () => {
    const dish = choice.querySelector('img');
    mainImage.src = dish.src;
    mainImage.alt = dish.alt;
    document.querySelectorAll('#main-content .images button').forEach((button) => {
      button.classList.toggle('selected', button === choice);
      button.setAttribute('aria-pressed', String(button === choice));
    });
  });
});
