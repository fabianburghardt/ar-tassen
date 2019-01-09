function initialize(){ARSynth.init({noteElm: $('#note')[0], frequencyElm: $('#frequency')[0] }); $('#color').bind('change', function(){ARSynth.set('color', this.value); // hex color }); $('#color-offset').bind('change', function(){ARSynth.set('cOffset', parseInt(this.value, 10)); }); $('#size-offset').bind('change', function(){ARSynth.set('sizeOffset', parseInt(this.value, 10)); }); }
// var synth = new Tone.Synth().toMaster();
// synth.triggerAttackRelease("C#3", "20n");




/* Hier die Farbe zum Tracken eintragen, wenn ihr sie Fix machen wollt */

ARSynth.set('color', "#780011"); //

/* Euer Code */

function checkIfColorVisible(){

  // Hier wird der Text auf den Screen geschrieben, ob sichtbar oder nicht
  $("#debugger").text("farbe sichtbar: " + farbe1);

  // Hier schauen wir if-else mäßig, ob Farbe1 sichtbar ist oder nicht
  if(farbe1 == true){
    fadeInSound1(); // Ist sichtbar
  }else{
    fadeOutSound1(); // Ist nicht sichtbar
  }


  // Die Check Funktion ruft sich hier alle 100ms wieder selber auf
  setTimeout(function(){
    checkIfColorVisible();
  },100)

}
checkIfColorVisible();



/* Hier passieren dann die Audio sachen */
function fadeInSound1(){

}
function fadeOutSound1(){

}


































