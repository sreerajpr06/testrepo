const validateEmail = (email) => {
    let pattern = /(\d|[a-z]|[A-Z])+@[a-z]+\.[a-z]+/;
    let result = email.match(pattern);
    if(result)
        return true;
    else
        return false;
}

const empForm = document.getElementById("create-emp");
empForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(empForm);
    if(!validateEmail(formData.get("email"))){
        alert("Invalid email address!")
        document.getElementById("email").focus();
    }
    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj)
})

const submitForm = () => {
    document.getElementById("create").style.backgroundColor = "grey";
}

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function saveInput(){
    console.log('Saving data');
}

const processChange = debounce(() => saveInput());