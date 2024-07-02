 // HO UNA LISTA DELLA SPESA, DEVO MOSTRARLA A VIDEO
 const ingredienti = ['Guanciale', 'Peperoni', 'Pasta', 'Olive', 'Controfiletto', 'Quaglie', 'Insalata', 'Gamberi', 'Pollo', 'Pomodori', 'Melanzane'];

 // RECUPERO L'ELEMENTO CHE DEVE CONTENERE LA MIA LISTA DELLA SPESA
 const lista_spesa = document.getElementById('lista-spesa');

 // CICLO L'ARRAY
 let i = 0;
 while (i < ingredienti.length) {
     // CREO UN NUOVO LIST ITEM
     const li = document.createElement('li');

     // GLI METTO IL TESTO ALL'INTERNO
     li.innerText = ingredienti[i];

     // APPENDO IL LIST ITEM ALL'INTERNO DELLA LISTA DELLA SPESA
     lista_spesa.append(li);

     // INCREMENTO LA VARIABILE DI INDICE
     i++;
 }