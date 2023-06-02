const form = document.querySelector('.sign-up');
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const feedback = document.querySelector('.feedback');
const email = document.querySelector('#email');


form.addEventListener('submit', e => {
    e.preventDefault();
    
    if(regex.test(form.email.value)){
        return (true);
      } else{
        feedback.textContent='Please enter a valid email address';
      }
})
email.addEventListener('keydown', e =>{
  feedback.textContent='';
});