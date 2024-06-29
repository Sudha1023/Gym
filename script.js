
const ham = document.querySelector(".ham");
const mobile_Ul = document.querySelector(".res_mobile");
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");

ham.addEventListener("click", () => {
  openMenu.classList.toggle("close");
  mobile_Ul.classList.toggle("toggle_mobileres");
  closeMenu.classList.toggle("close");
});


const contact_modal = document.querySelector(".contact_modal");
const close_modal = document.querySelector(".close_contact");
const joinUsButton = document.querySelector(".login_button");

joinUsButton.addEventListener("click",()=>{
  contact_modal.classList.toggle("display");
})


close_modal.addEventListener("click",()=>{
  contact_modal.classList.toggle("display");
})