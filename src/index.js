import * as sdk from 'phenix-web-sdk';
import "./style.css";

console.log("1 WWWWWWWW",sdk);

console.log("2 WWWWWWWW",sdk);

console.log("3 WWWWWWWW",sdk);

const audioButton = document.getElementById('audioButton');
audioButton.addEventListener("click", clickEvent);

function clickEvent(){
    console.log("click bouton")
}

var isIphoneIpad = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
console.log(isIphoneIpad);

//bi = BigInt(AES.getBytes())
async function callStackHandler() {
  return await new Promise((res) => setTimeout(res, 0));
}

let aes1 = "RElHRVNUOmV5SmhjSEJzYVdOaGRHbHZia2xrSWpvaWJYbDBiM1Z5YkdsMlpTNWpieUlzSW1ScFoyVnpkQ0k2SWpsVWJ6VTVSV0p5UVUxeGIxRXdSbUZPT1ZveVdGTllaVEpoTW5wbFRIRXlialpyUlROWk5FeHZSRmxtSzFkaVdtOVhXWEZNVjJaYUszcDZlREJWU1ZOU1ZGWmFZMHBaVmsxMmFsTmFaelpNZEZSbGJqbFJQVDBpTENKMGIydGxiaUk2SW50Y0ltVjRjR2x5WlhOY0lqb3hPVGswT0RNNU9ETTFOakF5TEZ3aWRYSnBYQ0k2WENKb2RIUndjem92TDNCallYTjBMbkJvWlc1cGVISjBjeTVqYjIxY0lpeGNJbkpsY1hWcGNtVmtWR0ZuWENJNlhDSmphR0Z1Ym1Wc1NXUTZaWFZ5YjNCbExXTmxiblJ5WVd3amJYbDBiM1Z5YkdsMlpTNWpieU4wWlhOMFFYVmthVzh1VjBwWGN6RmFkek56YVUxUlhDSjlJbjA="

function string2Bin(str){
  var result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i).toString(2));
  }
  return result;
}

function bin2String(araille){
  var result = "";
  for (const element of araille) {
    result += String.fromCharCode(parseInt(element));
  }
  return result;
}
 //laes est un base64 du token
function getBytes() {
  let aes = "RElHRVNUOmV5SmhjSEJzYVdOaGRHbHZia2xrSWpvaWJYbDBiM1Z5YkdsMlpTNWpieUlzSW1ScFoyVnpkQ0k2SWpsVWJ6VTVSV0p5UVUxeGIxRXdSbUZPT1ZveVdGTllaVEpoTW5wbFRIRXlialpyUlROWk5FeHZSRmxtSzFkaVdtOVhXWEZNVjJaYUszcDZlREJWU1ZOU1ZGWmFZMHBaVmsxMmFsTmFaelpNZEZSbGJqbFJQVDBpTENKMGIydGxiaUk2SW50Y0ltVjRjR2x5WlhOY0lqb3hPVGswT0RNNU9ETTFOakF5TEZ3aWRYSnBYQ0k2WENKb2RIUndjem92TDNCallYTjBMbkJvWlc1cGVISjBjeTVqYjIxY0lpeGNJbkpsY1hWcGNtVmtWR0ZuWENJNlhDSmphR0Z1Ym1Wc1NXUTZaWFZ5YjNCbExXTmxiblJ5WVd3amJYbDBiM1Z5YkdsMlpTNWpieU4wWlhOMFFYVmthVzh1VjBwWGN6RmFkek56YVUxUlhDSjlJbjA="
  var hash = [];
  var bytes = [];
  for (var i = 0; i < aes.length; i++) {
    hash.push(aes.charAt(i));
  }
  console.log("tableau de lettres", hash)
  for (var i = 0; i < aes.length; ++i) {

  }
  return bytes;
};

let AES2 = getBytes();
let charState = string2Bin(aes1);
let binaryAraille = string2Bin(aes1)
console.log("on big int pas nouuuuuuus", string2Bin(aes1),  typeof string2Bin(aes1)[547]);
console.log("methode get bytes", AES2,  typeof AES2);
let key1 = "";
var keyBin1 = new Array;
let key2 = "";
var keyBin2 = new Array;
let key3 = "";
var keyBin3 = new Array;
let key4 = "";
var keyBin4 = new Array;
for (let index = 0; index < 133; index++) {
  keyBin1.push(charState[index]);
  key1 = keyBin1.join(" ");
}for (let index = 133; index < 266; index++) {
  keyBin2.push(charState[index]);
  key2 = keyBin2.join(" ");
}for (let index = 266; index < 399; index++) {
  keyBin3.push(charState[index]);
  key3 = keyBin3.join(" ");
}for (let index = 399; index < 532; index++) {
  keyBin4.push(charState[index]);
  key4 = keyBin3.join(" ");
}
console.log ("KEY1",key1,"KEY2",key2,"KEY3",key3,"KEY4",key4);

function _hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++){
    hash += key.charCodeAt(i);
  }
  return hash;
}class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log("HASH STRUCTURE:",`${index}: ${chainedValues}`);
    });
  }
}

const xyz = new HashTable();
xyz.set("aes", key1);
xyz.set("blowfish", key2);
xyz.set("twofish", key3);
xyz.set("rsa", key4);

xyz.display();
console.log

//r a voir
const key = 42;
const token = "DIGEST:eyJhcHBsaWNhdGlvbklkIjoibXl0b3VybGl2ZS5jbyIsImRpZ2VzdCI6IjJyeTFzL0RXM2lXZUh3VnJQK0hRMHUyTDR4dXZORVRjZm9PRmsxY0hjVTBVRXBUa04wWlNrNTRxeXB1dFA5N05IdzFwcHJzbEcyYkx6UitIYmM3d3BRPT0iLCJ0b2tlbiI6IntcImV4cGlyZXNcIjoxNjc5NzM5Njk5MTQ2LFwidXJpXCI6XCJodHRwczovL3BjYXN0LnBoZW5peHJ0cy5jb21cIixcInJlcXVpcmVkVGFnXCI6XCJjaGFubmVsSWQ6ZXVyb3BlLWNlbnRyYWwjbXl0b3VybGl2ZS5jbyN0ZXN0QXVkaW8uV0pXczFadzNzaU1RXCJ9In0=";
const encodedToken = encodeURIComponent(token);
const base = "https://pcast.phenixrts.com/channel/?";
console.log("42",key);
console.log (_hash(token));
console.log ("display hashtable", )

function tokenKeyRetrieveRecursion(hash){
  let finalToken = "3VybGl2ZS5jbyIsImRpZ2VzdCI6IjJyeTFzL0RXM2lXZUh3VnJQK0hRMHUyTDR4dXZORVRjZm9PRms";
  if(hash)return finalToken;
  /* const newAudio = ((this as any).$Amplify.API.graphql(
    (this as any).$Amplify.graphqlOperation(encodedToken,{
      input: this.activesInRoomAuditors,
    })
  )) as GraphQLResult<CreateVideoMutation>; */
  this.tokenKeyRetrieveRecursion(true);
} 
tokenKeyRetrieveRecursion(true);

const queryParams = `token=${encodedToken}#testAudio`;
const url = base + queryParams;
console.log("PROCESS",tokenKeyRetrieveRecursion(true));