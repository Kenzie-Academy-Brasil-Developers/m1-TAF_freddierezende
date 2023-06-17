// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
let abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
let swimDistance = process.argv[9]; // Distância da natação
let swimTime = process.argv[10]; // Tempo da natação
let diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;



/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

if (gender === "male"){
    // Caso o candidato for do gênero masculino
 if (height >= 1.70) {
    // caso tenha altura seja maior ou igual a 1.50 metros
 if (barReps >= 6 || barSeconds >= 15){
    // Caso realize no minímo 6 repetições ou consiga fazer no mínimo 15 segundo de barra
 if (abs >= 41){
    // Caso realize 41 ou mais abdominais
if ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200)) {
    // Caso realize 3km ou mais em no máximo 12 minutos, ou 5km ou mais em no máximo 20 minutos 
 if ((swimDistance >= 100 && swimTime <= 60) ||(diveTime <= 30)) {
    // Distância comparando tempo de natação ou realize o tempo de mergulho estimado
 
passed = true; 

                    }
                }
            }
        }
    }
}  else if (gender === "female") {
    // Caso o candidato for do gênero masculino 
 if (height>= 1.60){
    // Caso a altura seja maior ou igual 1.60 metros
 if(barReps >= 5 || barSeconds >= 12 ){
    // Caso realize no mínimo 5 repetições ou consiga fazer no mínimo 12 segundos de barra 
 if (abs >= 41){
    // Caso realize 41 ou mais abdominais
 if((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320)){
    // Caso realize 4km ou mais em no máximo 15 minutos, ou 6km ou mais em no máximo 22 minutos 
 if ((swimDistance >=100 && swimTime <= 60) || (diveTime <= 30)) {
    // Distância comparando tempo de natação ou realize o tempo de mergulho estimado

    passed = true;
                     }
                }
            }
        }
    }
 }



/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
