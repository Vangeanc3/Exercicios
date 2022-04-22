// Quando queremos ver a data atual do sistema usamos a função:
var hoje = new Date();
// Ela retorna a data atual
console.log(hoje)
// Ela retornou o ano, mês, dia, horas, minutos, segundos e miliseguindos

// Se quisermos retorna apenas o ano? dia? ou a hora? Temos as funções que fazem isso:
var dia = hoje.getDate(); // Retorna o dia do mês
var mês = hoje.getMonth(); // Retorna o mês
var ano = hoje.getFullYear(); // Retorna o ano
var dia_semana = hoje.getDay(); // Retorna o dia da semana