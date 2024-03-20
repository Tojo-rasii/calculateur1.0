const valider = document.getElementById("icon-size");
const load = document.getElementById("img-size");
const info = document.getElementById("svg");
const close = document.getElementById("close");

document.getElementById("calculer").addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const budget = parseFloat(document.getElementById('budget').value);
    const personne = parseFloat(document.getElementById('personne').value);
    const jour = parseFloat(document.getElementById('jour').value);
    const transport = parseFloat(document.getElementById('transport').value);
    const hebergement = parseFloat(document.getElementById('hebergement').value);
    const repas = parseFloat(document.getElementById('repas').value);
    const boissons = parseFloat(document.getElementById('boissons').value);
   
    const T1 = transport + hebergement + repas + boissons;
    const T2 = T1 * personne;
    const T3 = T2 * jour;
    const reste = budget - T3;


    setTimeout(()=>{
        if (reste >= 0) {
            
            // document.querySelector('h3').style.color = "green";
            // document.getElementById("resultat").innerText += `Bonjour ${name}\n`
            // document.getElementById("resultat").innerText += `Budget ${budget} Ar \n`
            // document.getElementById("resultat").innerText += `Nombre de personne ${personne} \n`
            // document.getElementById("resultat").innerText += `Total de votre voyage ${T3} \n`
            // document.getElementById("resultat").innerText += `Reste de votre budget ${reste} \n`
            load.style.display = "none";
            valider.style.display = "block";
        
            document.getElementById("resultat").innerHTML = `
            <div>
            <h3>hello ${name}</h3>
            <h3>hello ${budget}</h3>
            <h3>hello ${personne}</h3>
            <h3>hello ${T3}</h3>
            <h3>hello ${reste}}</h3>
            </div>
            `;
        }
        else if(isNaN){
            alert("y a rien")
        }
        else {
            // document.querySelector('h3').style.color = "red";
            // document.getElementById("resultat").innerText += `Bonjour ${name}\n`
            // document.getElementById("resultat").innerText += `Budget ${budget} Ar \n`
            // document.getElementById("resultat").innerText += `Attention votre budget est depasse ${reste}\n`
            load.style.display = "none";
            valider.style.display = "block";

            document.getElementById("resultat").innerHTML = `
            <div>
               <h3>Ravi de vous avoir, ${name} !</h3>
                 <p>En utilisant Travel Calculator, nous avons estimé que votre budget pour le voyage est de ${budget} Ar, <br /> pour ${personne} personnes, avec un séjour de ${T3} heures et hébergement dans un(e) ${hebergement}.<br> C'est fantastique !
                 De plus, vous avez choisi ${transport} comme moyen de transport. Nous avons pris en compte une estimation de repas de ${repas} Ar, n'oubliant pas de budget pour les boissons, estimé à ${boissons} Ar. <br>
                 Ainsi, le coût total estimé pour votre voyage est de ${reste} Ar. <br>
                À vous maintenant de vérifier et d'ajuster les détails selon vos préférences. <br> Merci d'avoir choisi Travel Calculator !</p>
            </div>
`;
        }
    },1000)

  

   setTimeout(()=>{
     load.style.display = "block";
    valider.style.display = "none";
   },3)
   

})

// SHOW POP
info.addEventListener("click", infoPop);

function infoPop(){
    const pop = document.querySelector(".pop");
    pop.style.display = "block";
    pop.classList.remove("scale");
}

// hide POP
close.addEventListener("click", closePop);

function closePop(){
    const pop = document.querySelector(".pop");
    pop.classList.add("scale");
}

// ABOUT
 // Function to show content based on the selected component
 function showContent(component) {
    // Hide all content sections
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => section.classList.remove('active'));

    // Deactivate all navigation links
    const navLinks = document.querySelectorAll('.pagination-slide a');
    navLinks.forEach(link => link.classList.remove('active'));

    // Show the selected content section
    document.getElementById(component).classList.add('active');

    // Activate the selected navigation link
    const activeLink = document.querySelector(`nav a[href="#"][onclick="showContent('${component}')"]`);
    activeLink.classList.add('active');
  }