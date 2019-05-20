/*
Given Global Objects:
  var navigation = {
      x: -2,
      y: "Banana",
      z: "Beep",
      speed: "raaaaid"
    };

    var ship = {
      powerOn: false,
      modules: [],
      antenna: {
        active: false
      }
    };

    var radio = {
      frequency: "Kenneth",
      message: "Bugs are cool.",
      beacon: false
    };
*/
/*
Given Array of Objects:
Each module is an object in availableModules array, with four properties:
~the name of the module is a string
~the size of the module is an integer
~the enabled and essential properties are booleans
*/

function powerOn(){
    ship.powerOn = true;
    return this.ship;
}

function countModules(){
  return availableModules.length;
}

function countEssential(){
  var count =0;
  var size = countModules();
  for(var i = 0; i < size; i++){
    if(availableModules[i].essential){
      count++;
    }
  }
  return count;
}

function findModuleIndex(inp){
  var index =0;
  var size = countModules();
  for(var i = 0; i < size; i++){
    if(availableModules[i].name === inp && availableModules[i].essential){
      index = i;
    }
  }
  return index;
}

function loadModule(index){
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}
loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation"));

/*I thought it might get confusing as to where did LARRY.quack() come from, so thought I should explain this.
In this problem, LARRY (my robotic assisstant on the spaceship) starts to malfunction. Our task was to fix him by 
calling the built-in function, "LARRY.quack()" 10 times.*/
function resetLARRY(){
  for(var i= 0; i < 10; i++){
    LARRY.quack();
  }
}
resetLARRY();

function setMessage(){
  radio.message = JSON.stringify(navigation);
  return radio.message;
}
setMessage();

function activateBeacon(){
  radio.beacon = true;
}
activateBeacon();

function setFrequency(){
  radio.frequency = (radio.range.low + radio.range.high)/2;
}

function initialize(){
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0; 
}

function calibrateX(){
  var signal = 0;
  for(var i =1; i <= 12; i++){
    signal = checkSignal();
    //console.log(checkSignal());
    if(signal !== undefined) { 
      navigation.x = signal;
      break;
    }
  }
}

function calibrateY(){
  var signal = 0;
  for(var i = 1; i <= 60; i++){
    signal = checkSignal();
    if(signal !== undefined){
      navigation.y = signal;
      break;
    }
  }
}

function calibrateZ(){
  var signal = 0;
  for(var i =1; i <= 60; i++){
    signal = checkSignal();
    if(signal !== undefined){
      navigation.z = signal;
      break;
    }
  }
}

function calibrate(){
  calibrateX();
  calibrateY();
  calibrateZ();
}

function setSpeed(s){
  var sp = parseInt(s,10);
  if (Math.sign(sp) === 1 || Math.sign(sp) === 0){
    navigation.speed = sp;
  }
}

function activateAntenna(){
  var s = ship.antenna.active = true;
  return s;
}

function sendBroadcast(){
  for(var i=1; i <= 100; i++){
    broadcast();
  }
}

function configureBroadcast(){
  setFrequency();
  activateAntenna();
  sendBroadcast();
}
configureBroadcast();
//was given a sample message which replaced vowels and one consonant, we had to determine which number corresponds to which letter
//and then write this function accordingly
function decodeMessage(message){
  var msg = message.replace(/0/g,'o')
     .replace(/1/g,'i')
     .replace(/2/g,'u')
     .replace(/3/g,'e')
     .replace(/4/g,'a')
     .replace(/5/g,'y');
  return msg;
}
