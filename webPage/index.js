
const radios = document.querySelectorAll(".radio");

const contents = document.querySelectorAll('#content');

radios.forEach((radio, input)=>{
    radio.addEventListener('click', () => radioFunction(radio, contents[input]));
})

function radioFunction(radio, content) {
    if (radio.classList.contains('checked')) {
        radio.checked = false;
        content.classList.add('five');
        radio.classList.remove('checked');
    } else {
        radio.checked = true;
        content.classList.remove('five');
        radio.classList.add('checked');
    }
}





