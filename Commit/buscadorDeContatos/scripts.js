const btn = document.querySelector('button');
const ipt = document.querySelector('input');
const p = document.querySelector('p');


const contacts = [
    { Name: 'Luã', Number: '(41) 987840458', Sex: 'Male' },
    { Name: 'Maria', Number: '(11) 991234567', Sex: 'Female' },
    { Name: 'João', Number: '(21) 987654321', Sex: 'Male' },
    { Name: 'Ana', Number: '(31) 976543210', Sex: 'Female' },
    { Name: 'Pedro', Number: '(51) 965432109', Sex: 'Male' },
    { Name: 'Juliana', Number: '(62) 954321098', Sex: 'Female' },
    { Name: 'Carlos', Number: '(71) 943210987', Sex: 'Male' },
    { Name: 'Beatriz', Number: '(81) 932109876', Sex: 'Female' },
    { Name: 'Rafael', Number: '(91) 921098765', Sex: 'Male' },
    { Name: 'Camila', Number: '(48) 910987654', Sex: 'Female' }
];

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        clickActivate();
    }
})

function clickActivate() {


    /* for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].Name.toUpperCase() === ipt.value.toUpperCase()) {
            p.innerHTML = `Name: ${contacts[i].Name} <br> Number: ${contacts[i].Number} <br> Sex: ${contacts[i].Sex}`;
            break;
        } else {
            p.innerHTML = `Contato não encontrado!`;
        }
    } */

        let i = 0;

        while (i < contacts.length) {
            if (contacts[i].Name.toUpperCase() === ipt.value.toUpperCase()) {
                p.innerHTML = `Name: ${contacts[i].Name} <br> Number: ${contacts[i].Number} <br> Sex: ${contacts[i].Sex}`;
                break;
            } else {
                p.innerHTML = `Contato não encontrado!`;
            }
            i++;
        }

}