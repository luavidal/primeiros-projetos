const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

/* const atualizateMarketValue = companies.map(value => {
    value.marketValue * 1.1

    return value
})

const year = atualizateMarketValue.filter(y => y.foundedOn < 1990)

const total = year.reduce((acc, tt) => acc += tt.marketValue, 0) * 1000

console.log(`Valor total de todas as empresas selecionadas: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`) */



const atualizateMarketValue = companies.map(value => {
    value.marketValue = value.marketValue * 1.1

    return value
}).filter(value => value.foundedOn < 1990).reduce((acc, value) => acc + value.marketValue, 0)

console.log(atualizateMarketValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))