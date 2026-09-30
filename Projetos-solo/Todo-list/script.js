const btn = document.querySelector('button');
const input = document.querySelector('input');
const reg = document.querySelector('#taskList');

btn.addEventListener('click', () => {
    registerUser();
});

addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        registerUser();
    }
});

registerUser = () => {
    if (input.value === '') {
        alert('Por favor, escreva algo antes de enviar.');
        input.style.borderColor = 'red';
        input.focus();
    } else {
        console.log(input.value);
        reg.innerHTML += `
        <section class="task">
            <img src="./archives/circle-open.png">
            <li>${input.value}</li>
        </section>
        `;
        input.style.borderColor = '#ccc';
        input.value = '';
    }
}