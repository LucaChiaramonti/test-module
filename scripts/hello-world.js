console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("chatMessage", (dialog, $element, targets) => {
  if($element=="Hello") {
    ChatMessage.create({
      "content":" HELLO WORLD",
      "speaker": {
          "alias": "Spiffy"
      }
    }).then()
  }
});

Hooks.on("updateDocument", (document, change, options, userId) => {
//    console.log(document);
//   console.log(change);
//    console.log(options);
//    console.log(userId);

    ChatMessage.create({
      "content":"Update!",
      "speaker": {
          "alias": "Spiffy"
      }
    }).then()
});

const myHookId = Hooks.on('updateActor', this.onUpdateActor.bind(this));

//function declaration (same context) the argument are declared in the same order as the original call
function onUpdateActor(actor, data, options, userId){
  if(options.diff == true) {
    var name = actor.data.name
    ChatMessage.create({
      "content":"Updated: " +name + " \n UserId: " + userId,
      "speaker": {
          "alias": "Spiffy"
      }
    }).then()
  }
    console.log(actor);
    console.log(data);
    console.log(options);
    console.log(userId);
}

