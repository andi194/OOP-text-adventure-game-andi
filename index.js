class Room {
  constructor(kitchen) {
    this._name = kitchen;
    this._description = "";
    this._linkedRooms = {};
    this._character = "";
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get character() {
    return this._character
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("description is too short.");
      return;
    }
    this._description = value;
  }

  set character(value) {
    this._character = value;
  }


  describe() {
    return "Looking around the " + this._name + " you can see " + this._description;
  }


  linkRoom(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
  }


  getDetails() {
    const entries = Object.entries(this._linkedRooms);
    let details = []
    for (const [direction, room] of entries) {
      let text = " The " + room._name + " is to the " + direction;
      details.push(text);
    }
    return details;
  }


  move(direction) {
    if (direction in this._linkedRooms) {
      return this._linkedRooms[direction];
    } else {
      alert("You can't go that way",);
      alert(this._name)
      return this;
    }
  }
}


class Item {
  constructor(name) {
    this._name = name,
      this._description = ""
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Decription is too short.");
      return;
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }


  describe() {
    return "The " + this._name + " is " + this._description;
  }


}


class Character {
  constructor(name) {
    this._name = name,
      this._description = ""
    this._conversation = ""
  }
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Decription is too short.");
      return;
    }
    this._description = value;
  }

  set conversation(value) {
    if (value.length < 4) {
      alert("conversation is too short.");
      return;
    }
    this._conversation = value;
  }
  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get conversation() {
    return this._conversation;
  }


  describe() {
    return "You have met " + this._name + ", " + this._name + " is " + this._description;
  }


  converse() {
    return this._name + " says " + "'" + this._conversation + "'";
  }
}


class Enemy extends Character {
  constructor(name) {
    super(name);
    this._weakness = "";
  }


  set weakness(value) {
    if (value.length < 4) {
      alert("Decription is too short.");
      return;
    }
    this._weakness = value;
  }
}


  class Friend extends Character {
    constructor(name) {
      super(name);
        }
  

  fight(item) {
    if (item = this_weakness) {
      return true;
    } else {
      return false;
    }
  }

}

var item = "lamp";










const Kitchen = new Room("kitchen");
Kitchen.description = "a large kitchen";
const Lounge = new Room("lounge");
Lounge.description = "a large room with sofas";
const Garden = new Room("Garden");
Garden.description = "a garden with a fountain in the middle";
const Hall = new Room("hall");
Hall.description = "a large hall with statues";


Kitchen.linkRoom("south", Lounge);
Kitchen.linkRoom("east", Hall);
Lounge.linkRoom("north", Kitchen);
Lounge.linkRoom("east", Garden);
Garden.linkRoom("west", Lounge);
Garden.linkRoom("north", Hall);
Hall.linkRoom("south", Garden);
Hall.linkRoom("west", Kitchen);


const Pete = new Enemy("Pete");
Pete.conversation = "time to fight";
Pete.description = "a angry enemy";
Pete.pronoun = "he";
Pete.weakness = "fire";
Pete.weapon = "axe";


const Bob = new Friend("Bob");
Bob.conversation = "here is a item for you";
Bob.description = "a friendly character";
Bob.pronoun = "he";


Kitchen.character = Bob;
Garden.character = Pete;


















function displayRoomInfo(room) {
  let occupantMsg = ""
  if (room.character === "") {
    occupantMsg = ""
  } else {
    occupantMsg = room.character.describe() + ". " + room.character.converse()
  }


  textContent = "<p>" + room.describe() + "</p>" + "<p>" +
    occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";
  document.getElementById("textarea").innerHTML = textContent;
  document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" />';
  document.getElementById("usertext").focus();
}


function startGame() {
  currentRoom = Kitchen
  displayRoomInfo(currentRoom);


  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      command = document.getElementById("usertext").value;
      const directions = ["north", "south", "east", "west"]
      if (directions.includes(command.toLowerCase())) {
        currentRoom = currentRoom.move(command)
        displayRoomInfo(currentRoom);
      } else {
        document.getElementById("usertext").value = ""
        alert("that is not a valid command please try again")
      }

    }
  });
}
