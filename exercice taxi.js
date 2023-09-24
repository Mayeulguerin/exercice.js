'use script';

let playlist
let prenom="Mayeul" 
let santeMentale=10
let feu=30
let Taxi=1
let MusiqueTrajet=["ma casio","correction 9","anissaWejdene","tout donner","Montana"]

console.log("le nombre de musique dans playlist est de "+ MusiqueTrajet.length)//afficher et créé une probabilité de tomber sur l'une des 5 musiques parmis la varible musiqueTajet

for (let i=29;i>=0;i--){
  playlist=MusiqueTrajet[Math.floor(Math.random() * MusiqueTrajet.length)];// créé une probabilité (vue sur l'exemple que vous nous avez envoyé)
  if(playlist=="anissaWejdene"){// Paul perd de la vie a chaque fois qu'il tombe sur anissa, santeMentale--;
    santeMentale--;
    Taxi++;
    console.log("Mayeul vient de perdre 1 de sante mental. Mayeul a "+santeMentale+" points de santé mentale et il reste"+i+" feux rouges.");
  }

  if (i==0){//si i est égal a zéro alors mayeul a survécu et il peut rentrer chez lui
    console.log("Mayeul rentre chez lui "+Taxi+" taxis.")
    break
  }
  if (playlist=="ma casio"){// si mayeul tombe sur ma casio, on affiche via console.log que mayeul aime la chanson et on affiche combiem de feux rouges ils lui restent
    console.log("Mayeul aime bien la chanson, il reste "+i+" feux rouges")
  }
  if (playlist=="tout donner"){
    console.log("Mayeul aime bien la chanson, il reste "+i+" feux rouges")
  }
  if (playlist=="Montana"){
    console.log("Mayeul aime bien la chanson, il reste "+i+" feux rouges")
  }
  if (playlist=="correction 9"){
    console.log("Mayeul aime bien la chanson, il reste "+i+" feux rouges")
  }
  if (santeMentale==0){//
    console.log("Mayeul n'a plus de sante mental, explosion")//Si mayeul n'a plus de sante mental, on affiche via console.log explosion. 
    break
  }
}
