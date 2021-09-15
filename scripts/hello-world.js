Hooks.on('updateActor', async (actor, data, options, userId) => {
  if(options.diff == true) {
    
    var name = actor.data.name
    console.log(userId);
    console.log(data.data.abilities);
    console.log(actor);
    var result = checkAbilities(data.data.abilities);
    var name = actor.data.name;
    ChatMessage.create({
      "content":"Character " + name + " has been updated! " + result,
      "speaker": {
          "alias": "Spiffy"
      }
    }).then()
  }
})

function checkAbilities(data) {
  var cha = data.cha;
  var con = data.con;
  var dex = data.dex;
  var int = data.int;
  var str = data.str;
  var wis = data.wis;
  var result = "";
  if( (typeof cha.tempvalue !== 'undefined') && (typeof cha.total !== 'undefined')) {
    result+= "Charisma changed from " + cha.tempvalue[1] + " to " + cha.tempvalue[0];
  }
  if( (typeof con.tempvalue !== 'undefined') && (typeof con.total !== 'undefined')) {
    result+= "Constitution changed from " + con.tempvalue[1] + " to " + con.tempvalue[0];
  }
  if( (typeof dex.tempvalue !== 'undefined') && (typeof dex.total !== 'undefined')) {
    result+= "Dexterety changed from " + dex.tempvalue[1] + " to " + dex.tempvalue[0];
  }
  if( (typeof int.tempvalue !== 'undefined') && (typeof int.total !== 'undefined')) {
    result+= "Intelligence changed from " + int.tempvalue[1] + " to " + int.tempvalue[0];
  }
  if( (typeof str.tempvalue !== 'undefined') && (typeof str.total !== 'undefined')) {
    result+= "Strenght changed from " + str.tempvalue[1] + " to " + str.tempvalue[0];
  }
  if( (typeof wis.tempvalue !== 'undefined') && (typeof wis.total !== 'undefined')) {
    result+= "Wisdom changed from " + wis.tempvalue[1] + " to " + wis.tempvalue[0];
  }
  return result;
}