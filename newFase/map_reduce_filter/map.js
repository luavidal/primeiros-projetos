const MARGIN_NOTE = {
    A: 5
}

const list = [
    { name: 'Rodolfo', vip: true, note: 9, salario: 1280.30 },
    { name: 'Maria', vip: false, note: 2, salario: 3845.65 },
    { name: 'João', vip: true, note: 8, salario: 2965.45 },
    { name: 'Bruno', vip: true, note: 3, salario: 2555.54 },
    { name: 'Carla', vip: false, note: 5, salario: 3001.00 },
    { name: 'Ana', vip: true, note: 1, salario: 3010.89 },
    { name: 'Julio', vip: false, note: 7, salario: 2898.71 },
]

const newList = list.map(u => {
    return {
        name: u.name,
        braceletColor: u.vip ? 'Verde' : 'Branca',
        note: u.note >= MARGIN_NOTE.A ? 'Aprovado' : 'Reprovado',
    }
})



console.log(newList)