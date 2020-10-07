var button = document.getElementById('button')
var buttonOpen =  true;

button.addEventListener('click', () => {
    if(buttonOpen){
        button.classList.add('open')
        buttonOpen = false
    }else{
        button.classList.remove('open')
        buttonOpen = true
    }
})