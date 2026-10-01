const btn = document.querySelector('button');
const input = document.querySelector('input');
const reg = document.querySelector('#taskList');
let line = document.querySelector('li');
const paragraph = document.querySelector('p');
let memory = [];

btn.addEventListener('click', () => {
    registerUser();
});

// Monitora cliques dentro da lista de tarefas
reg.addEventListener('click', (e) => {
    // Descobre se o usuário clicou na tag <section> ou dentro dela
    const taskSection = e.target.closest('.task');
    
    // Se ele realmente clicou em uma tarefa
    if (taskSection) {
        // Busca a tag <li> que está dentro desta section específica
        const taskText = taskSection.querySelector('li').textContent;
        
        console.log(`Tarefa clicada: ${taskText}`);
        
        // Atualiza o parágrafo com o texto da tarefa
        paragraph.textContent = `${taskText}`;
    }
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
        let idTag = Date.now() + Math.random().toString(36).slice(2, 11);
        line = Math.random().toString(36).slice(2, 11);
        memory = reg.innerHTML += `
        <section class="task" id=${idTag}>
            <img src="./archives/circle-open.png">
            <li id=${line}>${input.value}</li>
        </section>
        `;
        input.style.borderColor = '#ccc';
        input.value = '';
        console.log(idTag);
        console.log(line);
    }
}