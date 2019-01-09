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

  $("#debugger").text("farbe sichtbar: " + playing);

  setTimeout(function(){
    checkIfColorVisible();
  },100)

}

checkIfColorVisible();