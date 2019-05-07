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
  var size = availableModules.length;
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

loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation"));

function loadModule(index){
  
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
  
}

function resetLARRY(){
  for(var i= 0; i < 10; i++){
    LARRY.quack();
  }
}
resetLARRY();

