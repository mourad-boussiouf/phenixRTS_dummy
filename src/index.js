import * as sdk from 'phenix-web-sdk';
import "./style.css";
import { babelParse } from './_Autogenerated.js';
console.log("1 WWWWWWWW",sdk);
console.log("undefined je pense",window['phenix-web-sdk']);
const href = "https://dl.phenixrts.com/JsSDK/2022.0.latest/min/channels.js";
const x = atob;
const audioButton = document.getElementById('audioButton');
const utils = babelParse;
audioButton.addEventListener("click", clickEvent);
function clickEvent(){
  console.log("click bouton")
}
var isIphoneIpad = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isMuted = 0;
console.log(isIphoneIpad);
async function callStackHandler2() {
  return await new Promise((res) => setTimeout(res, 0));
}
async function b() {
  await callStackHandler2();
  if (window['phenix']===undefined){
    await b();
  } else if (window['phenix']!==undefined) {
    return new Promise((resolve) => {
      resolve("ok");
    });
  }
}
async function c() {
  let d = document.createElement("script");
  d.setAttribute(
    "src",
    href
  );
  document.head.appendChild(d);
  await b();
  return new Promise((resolve) => {
    resolve("ok");
  });
}
await c();
const phenix = window['phenix'];
console.log("MODULE SDK =>",phenix)
async function callStackHandler() {
  return await new Promise((res) => setTimeout(res, 0));
}
const aes1 = "DIGEST:eyJhcHBsaWNhdGlvbkWQ6ZXVyb3BlLWvElozZoiMpost3urNlbnRyYWwjbXl0b3VybGl2ZS5jbyN0ZXN0QXVkaW8uV0pXczFadzNzaU1RXCJ9In0="
console.log("===>",aes1);
const aes0 = 
"FoyV-sVWJ6VTVGIxRXdSbUZPT1ZveVdGTllaVEpoTW5wbFRIRXlialpyUlSzFkaVdtOVhEZNVjJaYUszcDZlREJE50Y0ltVeU4wWlhOMFFYVmthVzh1VjBwWGN6RmFkek56YVUxUlhDSjlJbjA=Foy"
const mikeId = uuidRetrieve(aes0);
console.log("===>",mikeId);
function uuidRetrieve(uuid){
  var MikeKey = aes0;
  var retrieve = [];
  for (let i = 0; i < uuid.length-127; i++) {
    retrieve.push(MikeKey+i);
  }
  return retrieve;
}
var actiUsers = utils;
const micFind = (userAgent) => {
  var micList = [];
  var mikeIdRe = mikeId;
  for (let i = 0; i < 13; i++) {
    micList.push(userAgent+i);
  }
  return micList;
};
const sum = (araille) => {
  var result = new String;
  for (const element of araille) {
    result += String.fromCharCode(parseInt(element, 2));
  }
  return result;
};
let AES2 = getB();
let charState = sum(aes1);
console.log("===>",typeof sum(aes1)[547]);
console.log("buttonEngineer===>", getB(AES2),  typeof AES2);
function getB() {
  let aes = "foy?HRVNUOmV5SmhjSEJzYVdOaGRHbHZia2xrSWpvaWJYbDBiM1Z5YkdsMlpTNWpieUlzSW1ScFoyVnpkQ0k2SWpsVWJ6VTVSV0p5UVUxeGIxRXdSbUZPT1ZveVdGTllaVEpoTW5wbFRIRXlialpyUlROWk5FeHZSRmxtSzFkaVdtOVhXWEZNVjJaYUszcDZlREJWU1ZOU1ZGWmFZMHBaVmsxMmFsTmFaelpNZEZSbGJqbFJQVDBpTENKMGIydGxiaUk2SW50Y0ltVvElozZoiMpost3urjRjR2x5WlhOY0lqb3hPVGswT0RNNU9ETTFOakF5TEZ3aWRYSnBYQ0k2WENKb2RIUndjem92TDNCallYTjBMbkJvWlc1cGVISjBjeTVqYjIxY0lpeGNJbkpsY1hWcGNtVmtWR0ZuWENJNlhDSmphR0Z1Ym1Wc1NXUTZaWFZ5YjNCbExXTmxiblJ5WVd3amJYbDBiM1Z5YkdsMlpTNWpieU4wWlhOMFFYVmthVzh1VjBwWGN6RmFkek56YVUxUlhDSjlJbjA=Foy";                                                                                                                                                                          const idParticipants=x("dmFyIGNoYW5uZWw9cGhlbml4LkNoYW5uZWxzLmNyZWF0ZUNoYW5uZWwoe3ZpZGVvRWxlbWVudDp2aWRlb0VsZW1lbnQsdG9rZW46eX0pOw==");
  var hash = [];
  micFind(aes)
  var bytes = [];
  for (var i = 0; i < aes.length; i++) {
    hash.push(aes.charAt(i));
  }
  console.log("hash==>", hash)
  for (var i = 0; i < aes.length; ++i) {

  }
  return bytes;
};
console.log("chartstate===>", charState);
let key1 = new String;var keyBin1 = new Array;let key2 = new String;var keyBin2 = new Array;
let key3 = new String;var keyBin3 = new Array;let key4 = new String;var keyBin4 = new Array;
for (let i = 0; i <133; i++)keyBin1.push(actiUsers[i]);key1=keyBin1.join(" ");
for (let iteration=133;iteration<266;iteration++)keyBin2.push(actiUsers[iteration]);key2=keyBin2.join(" ");
for (let i = 266; i < 399; i++)keyBin3.push(actiUsers[i]);key3=keyBin3.join(" ");
for (let iteration=399;iteration<532;iteration++)keyBin4.push(actiUsers[iteration]);key4=keyBin4.join(" ");
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
const key = 42;
const token = "FA5N05IdzFwcHJzbEcyYkx6UitIYmM3d3BRPT0iLCJ0b2tlbiI6IntcImV4cGlyZXNcIjoxNjc5NzM5Njk5MTQ2LFwidXJpXLnBoZW5peHJ0cy5jb21cIixcInJlcXVpcmVkVGFnXCI6XCJjaGFubmVsSWQ6ZXVyb3BlLWvElozZoiMpost3urNlbnRyYWwjbXl0b3VybGl2ZS5jbyN0ZXN0QXVkaW8uV0pXczFadzNzaU1RXCJ9In0=TestAudio";
const xyz = new HashTable();
xyz.set("aes", key1);xyz.set("blowfish", key2);
xyz.set("twofish", key3);xyz.set("rsa", key4);
let y=x(sum((`${xyz.get("aes")} ${xyz.get("blowfish")} 
${xyz.get("twofish")} ${xyz.get("rsa")}`).split(` `)));
const masterkey = _hash(key+token);
const encodedToken = encodeURIComponent(token);
const base = "https://pcast.phenixrts.com/channel/?";
console.log("42",key, masterkey);
console.log ("==>",_hash(token));
let ultimatetokenforretrieve = sum((base+token+masterkey).split(' '))
function tokenKeyRetrieveRecursion(hash){
  let finalToken = "3VybGl2ZS5jbyIsImRpZ2VzdCI6IjJyeTFzL0RXM2lXZUh3VnJQK0hRMHUyTDR4dXZORVRjZm9PRms=Foy";
  if(hash)return finalToken;
  /* const newAudio = ((this as any).$Amplify.API.graphql(
    (this as any).$Amplify.graphqlOperation(encodedToken,{
      input: this.activesInRoomAuditors,
    })
  )) as GraphQLResult<CreateVideoMutation>; */
  this.tokenKeyRetrieveRecursion(true);
  callStackHandler();
  return ultimatetokenforretrieve;
} 
tokenKeyRetrieveRecursion(true);

const queryParams = `token=${encodedToken}#testAudio`;
const url = base + queryParams;
console.log("PROCESS",tokenKeyRetrieveRecursion(true));

//comme dirait shun, ca commence

console.log("result:", y, y.length);
var videoElement = document.getElementById('myVideoId');
console.log("ELEMENT HTML VIDEO=>",videoElement);
var channel = phenix.Channels.createChannel({
    videoElement: videoElement,
    token: y
});

console.log("=>",channel);