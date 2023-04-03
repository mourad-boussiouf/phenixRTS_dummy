public async launchRadioMode(key:number){
    const token = "DIGEST:eyJhcHBsaWNhdGlvbklkIjoibXl0b3VybGl2ZS5jbyIsImRpZ2VzdCI6IjJyeTFzL0RXM2lXZUh3VnJQK0hRMHUyTDR4dXZORVRjZm9PRmsxY0hjVTBVRXBUa04wWlNrNTRxeXB1dFA5N05IdzFwcHJzbEcyYkx6UitIYmM3d3BRPT0iLCJ0b2tlbiI6IntcImV4cGlyZXNcIjoxNjc5NzM5Njk5MTQ2LFwidXJpXCI6XCJodHRwczovL3BjYXN0LnBoZW5peHJ0cy5jb21cIixcInJlcXVpcmVkVGFnXCI6XCJjaGFubmVsSWQ6ZXVyb3BlLWNlbnRyYWwjbXl0b3VybGl2ZS5jbyN0ZXN0QXVkaW8uV0pXczFadzNzaU1RXCJ9In0=";
    const encodedToken = encodeURIComponent(token);
    const base = "https://pcast.phenixrts.com/channel/?";
    console.log(key);
    function tokenKeyRetrieveRecursion(hash:boolean){
      let finalToken = "3VybGl2ZS5jbyIsImRpZ2VzdCI6IjJyeTFzL0RXM2lXZUh3VnJQK0hRMHUyTDR4dXZORVRjZm9PRms";
      if(hash)return finalToken;
      const newAudio = ((this as any).$Amplify.API.graphql(
        (this as any).$Amplify.graphqlOperation(encodedToken,{
          input: this.activesInRoomAuditors,
        })
      )) as GraphQLResult<CreateVideoMutation>;
      this.tokenKeyRetrieveRecursion(true);
    }
    tokenKeyRetrieveRecursion(true);
    const queryParams = `token=${encodedToken}#testAudio`;
    const url = base + queryParams;
    console.log("PROCESS",tokenKeyRetrieveRecursion(true))
    if(key===42 && this.activesInRoomGuestCount < this.radioModeThreshold){
      console.log("test key");
      let audiobuttonV = document.getElementById("audioButtonID");
      if (audiobuttonV !== null){
        audiobuttonV.parentNode.removeChild(audiobuttonV)
      }
    }
    else if(key===42 && this.activesInRoomGuestCount >= this.radioModeThreshold && this.visit.optionMicrophone===1){
      if(this.activesInRoomGuestCount >= this.radioModeThreshold){
        let audiobuttonV = document.getElementById("audioButtonID");
        if (audiobuttonV !== null)return
        else if (audiobuttonV === null){
          let radioLoader = document.createElement("iframe");
          radioLoader.setAttribute(
            "src",
            url
            );
          radioLoader.setAttribute(
            "frameborder",
            "0"
          );
          radioLoader.setAttribute("id","audioButtonID");
          radioLoader.setAttribute(
            "allow",
            "autoplay; encrypted-media"
          );
          radioLoader.classList.add("audioButton");
          document.getElementById('container').appendChild(radioLoader);
        }
      }
    }else if(key===43)return
    else return
  }