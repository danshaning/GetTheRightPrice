// Etape 1 - Sélectionner nos éléments
let input = document.getElementById('price');

let formulaire = document.getElementById('formulaire');

let error = document.querySelector('small');

let hit = 0;

let choosenNum;

// Etape 2 - Cacher l'erreur
error.style.display = 'none';
// Etape 3 - Générer un nombre aléatoire

function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let nbreAleatoire = genererNombreEntier(1001);

// Etape 6 - Créer la fonction vérifier
function verify(number) {  
    let instruction = document.createElement("div");

    if(number < nbreAleatoire){
       instruction.textContent ="#"+ hit + "("+ number +") It is more" 
       instruction.classList.add('instruction', "pus")
      
    }else if(number > nbreAleatoire){
        instruction.textContent ="#"+ hit + "("+ number +") It is less" 
       instruction.classList.add('instruction', "moins")
      
    }else{
        instruction.textContent ="#"+ hit + "("+ number +") Congrat, this is the right price" 
       instruction.classList.add('instruction', "fini")
      
    }

    document.body.append(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre


input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = 'inline';
    }else{
        error.style.display = 'none';
    }
});

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if(isNaN(input.value) || input.value == "" ){
        input.style.borderColor = 'red';
    }else{
        hit++;
        input.style.borderColor = 'silver';
        choosenNum = input.value;
        input.value = "";
        verify(choosenNum);
    }

});



