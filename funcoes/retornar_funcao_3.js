 function somar1(a, b) {
     return a + b;
 }

 console.log(somar1(6, 4));

 function somar2(a) {
     return function(b) {
         return a + b;
     }
 }

 console.log(somar2(5)(4));

 const somarMais10 = somar2(10); // ele aqui vai assumir um valor padrão de 10 

 console.log(somarMais10(5)); // aqui vai somar ao valor padrão 
 console.log(somarMais10(10)); //ele não acumula o valor anterior