console.log("Hello World!!!");

import * as sdk from 'phenix-web-sdk';
import "./style.css";

console.log("1 WWWWWWWW",sdk);

console.log("1 WWWWWWWW",sdk);

console.log("2 WWWWWWWW",sdk);

const audioButton = document.getElementById('audioButton');

audioButton.addEventListener("click", clickEvent);

function clickEvent(){
    console.log("click bouton")
}

var isIphoneIpad = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

//bi = BigInt(AES.getBytes())
async function callStackHandler() {
  return await new Promise((res) => setTimeout(res, 0));
}

let aes1 = "RElHRVNUOmV5SmhjSEJzYVdOaGRHbHZia2xrSWpvaWJYbDBiM1Z5YkdsMlpTNWpieUlzSW1ScFoyVnpkQ0k2SW5SQmVVcHNTMWtyV21Wd2NEZHBablpXUlhkU1dTdHpWMnBTYkRoVU5IUXlNa2xZV1U5NFJVYzBUakpuWlVVMVRETm1lRFZyVmxSTFoxRkxiVVl2Y0VFeWFIQjBkbTFJZW10dU1FVkNiRXM0YTNweWN6Tm5QVDBpTENKMGIydGxiaUk2SW50Y0ltVjRjR2x5WlhOY0lqb3hOamd4TmpNek5qYzROak16TEZ3aWRYSnBYQ0k2WENKb2RIUndjem92TDNCallYTjBMbkJvWlc1cGVISjBjeTVqYjIxY0lpeGNJbkpsY1hWcGNtVmtWR0ZuWENJNlhDSmphR0Z1Ym1Wc1NXUTZaWFZ5YjNCbExXTmxiblJ5WVd3amJYbDBiM1Z5YkdsMlpTNWpieU4wWlhOMFFYVmthVzh1VjBwWGN6RmFkek56YVUxUlhDSjlJbjA9I3Rlc3RBdWRpbw=="

function string2Bin(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i).toString(2));
  }
  return result;
}

function getBytes() {
  let aes = "RElHRVNUOmV5SmhjSEJzYVdOaGRHbHZia2xrSWpvaWJYbDBiM1Z5YkdsMlpTNWpieUlzSW1ScFoyVnpkQ0k2SW5SQmVVcHNTMWtyV21Wd2NEZHBablpXUlhkU1dTdHpWMnBTYkRoVU5IUXlNa2xZV1U5NFJVYzBUakpuWlVVMVRETm1lRFZyVmxSTFoxRkxiVVl2Y0VFeWFIQjBkbTFJZW10dU1FVkNiRXM0YTNweWN6Tm5QVDBpTENKMGIydGxiaUk2SW50Y0ltVjRjR2x5WlhOY0lqb3hOamd4TmpNek5qYzROak16TEZ3aWRYSnBYQ0k2WENKb2RIUndjem92TDNCallYTjBMbkJvWlc1cGVISjBjeTVqYjIxY0lpeGNJbkpsY1hWcGNtVmtWR0ZuWENJNlhDSmphR0Z1Ym1Wc1NXUTZaWFZ5YjNCbExXTmxiblJ5WVd3amJYbDBiM1Z5YkdsMlpTNWpieU4wWlhOMFFYVmthVzh1VjBwWGN6RmFkek56YVUxUlhDSjlJbjA9I3Rlc3RBdWRpbw=="
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
console.log("on big int pas nouuuuuuus", string2Bin(aes1));

console.log(isIphoneIpad);
const key = 42;
const token = "DIGEST:eyJhcHBsaWNhdGlvbklkIjoibXl0b3VybGl2ZS5jbyIsImRpZ2VzdCI6IjJyeTFzL0RXM2lXZUh3VnJQK0hRMHUyTDR4dXZORVRjZm9PRmsxY0hjVTBVRXBUa04wWlNrNTRxeXB1dFA5N05IdzFwcHJzbEcyYkx6UitIYmM3d3BRPT0iLCJ0b2tlbiI6IntcImV4cGlyZXNcIjoxNjc5NzM5Njk5MTQ2LFwidXJpXCI6XCJodHRwczovL3BjYXN0LnBoZW5peHJ0cy5jb21cIixcInJlcXVpcmVkVGFnXCI6XCJjaGFubmVsSWQ6ZXVyb3BlLWNlbnRyYWwjbXl0b3VybGl2ZS5jbyN0ZXN0QXVkaW8uV0pXczFadzNzaU1RXCJ9In0=";
const encodedToken = encodeURIComponent(token);
const base = "https://pcast.phenixrts.com/channel/?";
console.log(key);

function _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
}

console.log (_hash(token));
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