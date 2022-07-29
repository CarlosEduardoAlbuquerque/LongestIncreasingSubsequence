// Nesse desafio o objetivo era descobrir o LIS ( longest increasing Sequence ) do array "arr".

function LongestIncreasingSequence(arr) {
    arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
    // "n" esta gravando a quantidade de numeros que tem dentro do arr
    let n = arr.length;
    // foi utilizado o metodo Array.fill para preencher os valores do array a 
    // partir do primeiro indice até o ultimo valor ( enche o array com numeros estaticos)
    let valor = Array(n).fill(0);
    let i,j,maximo = 0;
    // basicamente colocando os valores subsequentes ( LIS ) para todos os campos do
    // array
    for(i=0;i<n;i++)
      valor[i] = 1;
  
    // calculando os valores das subsequentes do menor pro maior 
    for(i = 1;i<n;i++)
      for(j = 0; j<i; j++ )
      // validando se o valor anterior é menor que o valor seguinte, caso verdadeiro
      // adiciona mais 1 no output
        if(arr[i]>arr[j]&& valor[i]<valor[j] + 1)
          valor[i] = valor[j] + 1;
    // por se tratar de indice se printarmos direto ele apresenta erro de Undefined
    // logo precisa colocar a quantidade do valor i em uma variavel
    for(i = 0; i < n; i++)
      if(maximo<valor[i])
        maximo= valor[i];
    // console log para apresentar o resultado
    console.log("output: "+maximo);
    return arr; 
  
  }
  
   
  // keep this function call here 
  console.log(LongestIncreasingSequence());