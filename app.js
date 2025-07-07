let searchForm = document.querySelector('#header #search-form');
let navBar = document.querySelector('#header .navbar');
let contactInfo = document.querySelector('#contact-info');
let experienceSkill = document.querySelector('#about .experience');
let educationSkill = document.querySelector('#about .education');




document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
};


document.querySelector('#header #search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    contactInfo.classList.remove('active');
    navBar.classList.remove('active');
};
document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
};
document.querySelector('#close-contact-info').onclick = () =>{
    
    contactInfo.classList.remove('active');
};





window.onscroll = () =>{
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
}


document.querySelector('#about #experience').onclick = ()=>{
    experienceSkill.style.display = 'block';
    educationSkill.style.display = 'none';
};
document.querySelector('#about #education').onclick = ()=>{
    educationSkill.style.display = 'block';
    experienceSkill.style.display = 'none';

};


const scriptURL = 'https://script.google.com/macros/s/AKfycbwwi1TE4haTvEf8u9xcpdSu8AP_tSGNi-4hTKKJ_WG7KsUpovJJSGK45zJbWbkm3Pj1/exec'
      const form = document.forms['contact-form']

      form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
        document.getElementById('main-frm').reset();
        
      
  });