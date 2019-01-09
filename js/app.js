function initialize(){
  ARSynth.init({
    noteElm: $('#note')[0],
    frequencyElm: $('#frequency')[0]
  });

  $('#color').bind('change', function(){
    ARSynth.set('color', this.value); // hex color
  });

  $('#color-offset').bind('change', function(){
    ARSynth.set('cOffset', parseInt(this.value, 10));
  });

  $('#size-offset').bind('change', function(){
    ARSynth.set('sizeOffset', parseInt(this.value, 10));
  });
}

var synth = new Tone.Synth().toMaster();

// //play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C#3", "20n");





/* Euer Code */

function checkIfColorVisible(){

  // Hier wird der Text auf den Screen geschrieben, ob sichtbar oder nicht
  $("#debugger").text("farbe sichtbar: " + farbe1);


  // Hier schauen wir if-else mäßig, ob Farbe1 sichtbar ist oder nicht
  if(farbe1 == true){
    // Ist sichtbar
    fadeInSound1();
  }else{
    // Ist nicht sichtbar
    fadeOutSound1();
  }


  // Die Check Funktion ruft sich hier alle 100ms wieder selber auf
  setTimeout(function(){
    checkIfColorVisible();
  },100)

}

checkIfColorVisible();




function fadeInSound1(){

}
function fadeOutSound1(){

}


































