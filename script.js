document.getElementById("calculer").addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const budget = parseFloat(document.getElementById('budget').value);
    const personne = parseFloat(document.getElementById('personne').value);
    const jour = parseFloat(document.getElementById('jour').value);
    const transport = parseFloat(document.getElementById('transport').value);
    const hebergement = parseFloat(document.getElementById('hebergement').value);
    const repas = parseFloat(document.getElementById('repas').value);
   
    const T1 = transport + hebergement + repas;
    const T2 = T1 * personne;
    const T3 = T2 * jour;
    const reste = budget - T3;

    if (reste >= 0) {
        document.querySelector('h3').style.color = "green";
        document.getElementById("resultat").innerText += `Bonjour ${name}\n`
        document.getElementById("resultat").innerText += `Budget ${budget} Ar \n`
        document.getElementById("resultat").innerText += `Nombre de personne ${personne} \n`
        document.getElementById("resultat").innerText += `Total de votre voyage ${T3} \n`
        document.getElementById("resultat").innerText += `Reste de votre budget ${reste} \n`
    }
    else {
        document.querySelector('h3').style.color = "red";
        document.getElementById("resultat").innerText += `Bonjour ${name}\n`
        document.getElementById("resultat").innerText += `Budget ${budget} Ar \n`
        document.getElementById("resultat").innerText += `Attention votre budget est depasse ${reste}\n`
    }

})