
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  rezultat.innerHTML='';
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const d = document.getElementById('d').value;
  const zadatak = document.getElementById('zadatak').value;


  if(zadatak==='2'){
    const x = Number(a);
    if(!x){
      rezultat.innerHTML='A nije broj'
      return;
    }
    const y = Number(b);
    if(!y){
      rezultat.innerHTML='B nije broj'
      return;
    }
    const z = Number(c);
    if(!z){
      rezultat.innerHTML='C nije broj'
      return;
    }
    if (x<z&&x<z){
      rezultat.innerHTML=x
    }else if(y>x&&y<x){
      rezultat.innerHTML=y
    }else{
      rezultat.innerHTML=z
    }
    


    return;
  }


  if (zadatak==='3'){
    const x = Number(a);
    const y = Number(b);
    const z = Number(c);
    const d = Number(d);

    if (isNaN(x)) {
      rezultat.innerHTML='A nije broj'
      return;
    }
    if (isNaN(y)) {
      rezultat.innerHTML='B nije broj'
      return;
    }
    if (isNaN(z)) {
      rezultat.innerHTML='C nije broj'
      return;
    }
    if (isNaN(d)) {
      rezultat.innerHTML='D nije broj'
      return;
    }




    return;
  }


  if(zadatak==='4'){
    



    return;
  }

  // Za svaki zadatak zahtijevamo određene ulaze
  if (zadatak === '1') {
    //console.log('1. zadatak');
    //console.log(a);
    
    const x = Number(a);
    if(!x){
      rezultat.innerHTML='A nije broj'
      return;
    }

    const y = Number(b);
    if(!y){
      rezultat.innerHTML='B nije broj'
      return;
    }

    

    if(x>y){
     rezultat.innerHTML=x;
    }else if(y>x){
      rezultat.innerHTML=y;
    }else{
      rezultat.innerHTML='A i B su isti';
    }
    
    
   
    
    
    return; // short curcuiting
  }

  // Ovdje će doći drugi zadatak



  
  // ovo će se ispisati ako u HTML dodatke option za zadatak a ovdje ga ne obradite
  rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
});



