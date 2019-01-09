!function(t){function i(){v={color:"#780011",webcamElm:document.getElementById("webcam"),webcamMirror:document.getElementById("webcamMirror"),trackedElm:document.getElementById("tracked"),frequencyElm:!1,noteElm:!1,cOffset:20,sizeOffset:5,useTimbre:!1}}function e(){var t=v.webcamElm,i=function(t){alert("Webcam error!",t)};navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then(function(i){t.srcObject=i,t.play()})}function r(t,i){for(var e in i)t[e]=i[e];return t}function n(t,i){var e=String(t);if(e.length<i)for(var r=i-e.length,n=0;n<r;n++)e='<span class="inactive">0</span>'+e;return e}function o(t){var i=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],e=t%12,r=Math.floor(t/12)-1,n=i[e];return n+(n.length<2?"-":"")+r}function h(t){return Math.round(12*Math.log(t/440)+69)}function a(t){return o(h(t))}function s(){if(v.frequencyElm&&(v.frequencyElm.innerHTML=n(Math.round(g.frequency),4)+" Hz"),v.noteElm){var t=a(g.frequency);v.noteElm.innerHTML=t,synth.triggerAttackRelease(t,"10n")}}function d(){var t=0,i,e,r=2*Math.PI;this.samplingRate=44100,e=1/this.samplingRate,this.pitchBase=50,this.pitchBend=0,this.pitchRange=2e3,this.volume=.5,this.maxVolume=.5,this.frequency=this.pitchBase,i=this.pitchBase,this.getBuffer=function(n){for(var o=[],h=this.volume*this.maxVolume,a=0;a<n;a++)for(o[a]=h*Math.sin(t*r),t+=i*e;t>1;)t-=1},this.setPitchBend=function(t){this.pitchBend=t,this.frequency=this.pitchBase+this.pitchBend*this.pitchRange,i=this.frequency}}function c(t){var i=t.outputBuffer,e=i.getChannelData(0),r=i.getChannelData(1),n=e.length,o=[];if(playing){o=g.getBuffer(n);for(var h=0;h<o.length;h++)e[h]=o[h],r[h]=o[h]}else for(var h=0;h<n;h++)e[h]=0,r[h]=0}function l(){g=new d,f=new AudioContext,m=f.createScriptProcessor(4096),m.onaudioprocess=c,m.connect(f.destination)}function u(t){var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null}var f,m,g,v={};i(),window.onload=function(){i(),e();try{l()}catch(t){console.log(t),alert("Your browser does not support webkitAudioContext")}};var y={doLoad:function(){var t=this;this.video=v.webcamElm,this.mirrorVideo=v.webcamMirror,this.mirrorVideoCtx=this.mirrorVideo.getContext("2d"),this.twElement=v.trackedElm,this.pageLoaded=!0,this.startPlayer()},videoIsPlaying:function(){this.timerCallback()},videoIsReady:function(){this.videoLoaded=!0,this.startPlayer()},startPlayer:function(){this.videoLoaded&&this.pageLoaded&&(this.width=this.video.width,this.height=this.video.height,this.mirrorVideo.width=this.width,this.mirrorVideo.height=this.height,this.mirrorVideoCtx.fillStyle="white",this.mirrorVideoCtx.strokeStyle="black",this.mirrorVideoCtx.translate(this.mirrorVideo.width,0),this.mirrorVideoCtx.scale(-1,1),this.playVideo())},playVideo:function(){this.video.play(),this.videoIsPlaying()},stopVideo:function(){this.video.pause(),clearTimeout(this.timeout)},timerCallback:function(){if(!this.video.paused&&!this.video.ended){this.computeFrame();var t=this;this.timeout=setTimeout(function(){t.timerCallback()},50)}},dist:function(t,i,e,r){return Math.sqrt((t-e)*(t-e)+(i-r)*(i-r))},computeFrame:function(){var t=u(v.color),i=t.r,e=t.g,r=t.b,n=v.sizeOffset,o=v.cOffset;this.mirrorVideoCtx.clearRect(0,0,this.width,this.height);try{this.mirrorVideoCtx.drawImage(this.video,0,0,this.width,this.height)}catch(t){return}for(var h=this.mirrorVideoCtx.getImageData(0,0,this.width,this.height),a,d,c=null,l,f,m,a,d,y=20,p=h.data.length/4,w=4,b=0;b<p;b+=4)if(l=h.data[4*b+0],f=h.data[4*b+1],m=h.data[4*b+2],a=b%this.width,d=Math.round(b/this.width),l>i-o&&l<i+o&&f>e-o&&f<e+o&&m>r-o&&m<r+o)if(c){var x=this.dist(a,d,c.x,c.y);x<y&&(c.x+=1/(c.weight+1)*(a-c.x),c.y+=1/(c.weight+1)*(d-c.y),c.rgb=l+","+f+","+m,c.weight++)}else c={},c.x=a,c.y=d,c.rgb=l+","+f+","+m,c.weight=1;if(!c)return void(playing=!1);c.weight>n?(this.twElement.style.top=c.y+"px",this.twElement.style.left=c.x+"px",this.twElement.style.backgroundColor="rgb("+c.rgb+")",playing=!0,g.setPitchBend(c.x/this.width),g.volume=1-c.y/this.height,s()):playing=!1}},p={init:function(t){r(v,t),y.doLoad(),y.videoIsReady()},set:function(t,i){v[t]=i}};t.ARSynth=p}(window);