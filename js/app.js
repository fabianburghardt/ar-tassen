function initialize(){
  ARSynth.init({
    noteElm: $('#note')[0],
    frequencyElm: $('#frequency')[0]
  });

  $('#color').bind('change', function(){
    ARSynth.set('color', this.value); // hex color
  });
  $('#color2').bind('change', function(){
    ARSynth.set('color2', this.value); // hex color
  });

  $('#color-offset').bind('change', function(){
    ARSynth.set('cOffset', parseInt(this.value, 10));
  });

  $('#size-offset').bind('change', function(){
    ARSynth.set('sizeOffset', parseInt(this.value, 10));
  });
}

// var synth = new Tone.Synth().toMaster();



/* Euer Code */

function checkIfColorVisible(){

  // Hier wird der Text auf den Screen geschrieben, ob sichtbar oder nicht
  $("#debugger").text("farbe sichtbar: " + farbe1);
  $("#debugger2").text("farbe 2 sichtbar: " + farbe2);

  // Hier schauen wir if-else mäßig, ob Farbe1 sichtbar ist oder nicht
  if(farbe1 == true){
    fadeInSound1(); // Ist sichtbar
  }else{
    fadeOutSound1(); // Ist nicht sichtbar
  }

  // Hier schauen wir if-else mäßig, ob Farbe2 sichtbar ist oder nicht
  if(farbe1 == true){
    fadeInSound2(); // Ist sichtbar
  }else{
    fadeOutSound2(); // Ist nicht sichtbar
  }


  // Die Check Funktion ruft sich hier alle 100ms wieder selber auf
  setTimeout(function(){
    checkIfColorVisible();
  },1000)

}
checkIfColorVisible();



/* Hier passieren dann die Audio sachen */
function fadeInSound1(){

}
function fadeOutSound1(){

}

function fadeInSound2(){

}
function fadeOutSound2(){

}


































