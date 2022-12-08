    let speechData = async () => {
    let rawFiguresOfSpeechData = await fetch('figuresOfSpeech.json');
        console.log(speechData);
    let data = await rawFiguresOfSpeechData.json();
        console.log(data);
    let groupedData = _.groupBy(data, 'category');
        console.log(groupedData);
      //console.log(groupedData.friendsAndLovers);
      //console.log(groupedData.translation);

    // categoryDataVariables
  
    let comingsAndGoings1 = groupedData.comingsAndGoings;
    let friendsAndLovers2 = groupedData.friendsAndLovers;
    let timeAndSpace3 = groupedData.timeAndSpace;
    let bodyAndHealth4 = groupedData.bodyAndHealth;
    let mistakesAndFailures5 = groupedData.mistakesAndFailures;
    let feelingsAndMood6 = groupedData.feelingsAndMood;
    let familyAndChildren7 = groupedData.familyAndChildren;
    let nature8 = groupedData.nature;
    let abundanceAndExcess9 = groupedData.abundanceAndExcess;
    let lagniappe10 = groupedData.lagniappe;

    // paragraphQuerySelectorVariables

    let paragraph1 = document.querySelector('#figuresOfSpeech');
    let paragraph2 = document.querySelector('#translation');
    let paragraph3 = document.querySelector('#audio');

     // buttonQuerySelectorVariables for: ---- Comings And Goings ----

    let comingsAndGoingsButton1 = document.querySelector('#premiere1');
    let comingsAndGoingsButton2 = document.querySelector('#premiere2');
    let comingsAndGoingsButton3 = document.querySelector('#premiere3');
    let comingsAndGoingsButton4 = document.querySelector('#premiere4');
    let comingsAndGoingsButton5 = document.querySelector('#premiere5');
    let comingsAndGoingsButton6 = document.querySelector('#premiere6');
    let comingsAndGoingsButton7 = document.querySelector('#premiere7');
    let comingsAndGoingsButton8 = document.querySelector('#premiere8');
    let comingsAndGoingsButton9 = document.querySelector('#premiere9');
    let comingsAndGoingsButton10 = document.querySelector('#premiere10');

     // buttonQuerySelectorVariables for:

    let friendsAndLoversButton1 = document.querySelector('#deuxieme1');
    let friendsAndLoversButton2 = document.querySelector('#deuxieme2');
    let friendsAndLoversButton3 = document.querySelector('#deuxieme3');    
    let friendsAndLoversButton4 = document.querySelector('#deuxieme4');
    let friendsAndLoversButton5 = document.querySelector('#deuxieme5');
    let friendsAndLoversButton6 = document.querySelector('#deuxieme6');
    let friendsAndLoversButton7 = document.querySelector('#deuxieme7');
    let friendsAndLoversButton8 = document.querySelector('#deuxieme8');
    let friendsAndLoversButton9 = document.querySelector('#deuxieme9');
    let friendsAndLoversButton10 = document.querySelector('#deuxieme10');

    // buttonQuerySelectorVariables for:

    let timeAndSpaceButton1 = document.querySelector('#troisieme1');
    let timeAndSpaceButton2 = document.querySelector('#troisieme2');
    let timeAndSpaceButton3 = document.querySelector('#troisieme3');
    let timeAndSpaceButton4 = document.querySelector('#troisieme4');
    let timeAndSpaceButton5 = document.querySelector('#troisieme5');
    let timeAndSpaceButton6 = document.querySelector('#troisieme6');
    let timeAndSpaceButton7 = document.querySelector('#troisieme7');
    let timeAndSpaceButton8 = document.querySelector('#troisieme8');
    let timeAndSpaceButton9 = document.querySelector('#troisieme9');
    let timeAndSpaceButton10 = document.querySelector('#troisieme10');

    // buttonQuerySelectorVariables for:

    let bodyAndHealthButton1 = document.querySelector('#quatrieme1');
    let bodyAndHealthButton2 = document.querySelector('#quatrieme2');
    let bodyAndHealthButton3 = document.querySelector('#quatrieme3');
    let bodyAndHealthButton4 = document.querySelector('#quatrieme4');
    let bodyAndHealthButton5 = document.querySelector('#quatrieme5');
    let bodyAndHealthButton6 = document.querySelector('#quatrieme6');
    let bodyAndHealthButton7 = document.querySelector('#quatrieme7');
    let bodyAndHealthButton8 = document.querySelector('#quatrieme8');
    let bodyAndHealthButton9 = document.querySelector('#quatrieme9');
    let bodyAndHealthButton10 = document.querySelector('#quatrieme10');
   
    // buttonQuerySelectorVariables for:

    let mistakesAndFailuresButton1 = document.querySelector('#cinquieme1');
    let mistakesAndFailuresButton2 = document.querySelector('#cinquieme2');
    let mistakesAndFailuresButton3 = document.querySelector('#cinquieme3');
    let mistakesAndFailuresButton4 = document.querySelector('#cinquieme4');
    let mistakesAndFailuresButton5 = document.querySelector('#cinquieme5');
    let mistakesAndFailuresButton6 = document.querySelector('#cinquieme6');
    let mistakesAndFailuresButton7 = document.querySelector('#cinquieme7');
    let mistakesAndFailuresButton8 = document.querySelector('#cinquieme8');
    let mistakesAndFailuresButton9 = document.querySelector('#cinquieme9');
    let mistakesAndFailuresButton10 = document.querySelector('#cinquieme10');
    
    // buttonQuerySelectorVariables for:

    let feelingsAndMoodButton1 = document.querySelector('#sixieme1');
    let feelingsAndMoodButton2 = document.querySelector('#sixieme2');
    let feelingsAndMoodButton3 = document.querySelector('#sixieme3');
    let feelingsAndMoodButton4 = document.querySelector('#sixieme4');
    let feelingsAndMoodButton5 = document.querySelector('#sixieme5');
    let feelingsAndMoodButton6 = document.querySelector('#sixieme6');
    let feelingsAndMoodButton7 = document.querySelector('#sixieme7');
    let feelingsAndMoodButton8 = document.querySelector('#sixieme8');
    let feelingsAndMoodButton9 = document.querySelector('#sixieme9');
    let feelingsAndMoodButton10 = document.querySelector('#sixieme10');

    // buttonQuerySelectorVariables for:

    let familyAndChildrenButton1 = document.querySelector('#septieme1');
    let familyAndChildrenButton2 = document.querySelector('#septieme2');
    let familyAndChildrenButton3 = document.querySelector('#septieme3');
    let familyAndChildrenButton4 = document.querySelector('#septieme4');
    let familyAndChildrenButton5 = document.querySelector('#septieme5');
    let familyAndChildrenButton6 = document.querySelector('#septieme6');
    let familyAndChildrenButton7 = document.querySelector('#septieme7');
    let familyAndChildrenButton8 = document.querySelector('#septieme8');
    let familyAndChildrenButton9 = document.querySelector('#septieme9');
    let familyAndChildrenButton10 = document.querySelector('#septieme10');

    // buttonQuerySelectorVariables for:

    let natureButton1 = document.querySelector('#huitieme1');
    let natureButton2 = document.querySelector('#huitieme2');
    let natureButton3 = document.querySelector('#huitieme3');
    let natureButton4 = document.querySelector('#huitieme4');
    let natureButton5 = document.querySelector('#huitieme5');
    let natureButton6 = document.querySelector('#huitieme6');
    let natureButton7 = document.querySelector('#huitieme7');
    let natureButton8 = document.querySelector('#huitieme8');
    let natureButton9 = document.querySelector('#huitieme9');
    let natureButton10 = document.querySelector('#huitieme10');

    // buttonQuerySelectorVariables for:

    let abundanceAndExcessButton1 = document.querySelector('#neuvieme1');
    let abundanceAndExcessButton2 = document.querySelector('#neuvieme2');
    let abundanceAndExcessButton3 = document.querySelector('#neuvieme3');
    let abundanceAndExcessButton4 = document.querySelector('#neuvieme4');
    let abundanceAndExcessButton5 = document.querySelector('#neuvieme5');
    let abundanceAndExcessButton6 = document.querySelector('#neuvieme6');
    let abundanceAndExcessButton7 = document.querySelector('#neuvieme7');
    let abundanceAndExcessButton8 = document.querySelector('#neuvieme8');
    let abundanceAndExcessButton9 = document.querySelector('#neuvieme9');
    let abundanceAndExcessButton10 = document.querySelector('#neuvieme10');

    // buttonQuerySelectorVariables for:

    let lagniappeButton1 = document.querySelector('#dixieme1');
    let lagniappeButton2 = document.querySelector('#dixieme2');
    let lagniappeButton3 = document.querySelector('#dixieme3');
    let lagniappeButton4 = document.querySelector('#dixieme4');
    let lagniappeButton5 = document.querySelector('#dixieme5');
    let lagniappeButton6 = document.querySelector('#dixieme6');
    let lagniappeButton7 = document.querySelector('#dixieme7');
    let lagniappeButton8 = document.querySelector('#dixieme8');
    let lagniappeButton9 = document.querySelector('#dixieme9');
    let lagniappeButton10 = document.querySelector('#dixieme10');


    // audioFileVariables:
    // let comingsAndGoingsAudio1 = new Audio("New Recording.m4a")
    // comingsAndGoingsAudio1.play();
    



   













    // function everything (buttonQuerySelectorVariable, index, categoryDataVariable){}
   // function call for category: ---- Comings And Goings ----
    
    everything(comingsAndGoingsButton1, 0, comingsAndGoings1);
    everything(comingsAndGoingsButton2, 1, comingsAndGoings1);
    everything(comingsAndGoingsButton3, 2, comingsAndGoings1);
    everything(comingsAndGoingsButton4, 3, comingsAndGoings1);
    everything(comingsAndGoingsButton5, 4, comingsAndGoings1);
    everything(comingsAndGoingsButton6, 5, comingsAndGoings1);
    everything(comingsAndGoingsButton7, 6, comingsAndGoings1);
    everything(comingsAndGoingsButton8, 7, comingsAndGoings1);
    everything(comingsAndGoingsButton9, 8, comingsAndGoings1);
    everything(comingsAndGoingsButton10, 9, comingsAndGoings1);

    // function everything (buttonQuerySelectorVariable, index, categoryDataVariable){}
   // function call for category: ---- Friends And Lovers ----

    everything(friendsAndLoversButton1, 0, friendsAndLovers2);
    everything(friendsAndLoversButton2, 1, friendsAndLovers2);  
    everything(friendsAndLoversButton3, 2, friendsAndLovers2);  
    everything(friendsAndLoversButton4, 3, friendsAndLovers2);  
    everything(friendsAndLoversButton5, 4, friendsAndLovers2);  
    everything(friendsAndLoversButton6, 5, friendsAndLovers2);  
    everything(friendsAndLoversButton7, 6, friendsAndLovers2);  
    everything(friendsAndLoversButton8, 7, friendsAndLovers2);  
    everything(friendsAndLoversButton9, 8, friendsAndLovers2);  
    everything(friendsAndLoversButton10, 9, friendsAndLovers2);  
    

    // function everything (buttonQuerySelectorVariable, index, categoryDataVariable){}
   // function call for category: ---- Time And Space ----

   everything(timeAndSpaceButton1, 0, timeAndSpace3);
   everything(timeAndSpaceButton2, 1, timeAndSpace3);  
   everything(timeAndSpaceButton3, 2, timeAndSpace3);  
   everything(timeAndSpaceButton4, 3, timeAndSpace3);  
   everything(timeAndSpaceButton5, 4, timeAndSpace3);  
   everything(timeAndSpaceButton6, 5, timeAndSpace3);  
   everything(timeAndSpaceButton7, 6, timeAndSpace3);  
   everything(timeAndSpaceButton8, 7, timeAndSpace3);  
   everything(timeAndSpaceButton9, 8, timeAndSpace3);  
   everything(timeAndSpaceButton10, 9, timeAndSpace3);  

    // function everything (buttonQuerySelectorVariable, index, categoryDataVariable){}
   // function call for category: ---- Body And Health ----

   everything(bodyAndHealthButton1, 0, bodyAndHealth4);
   everything(bodyAndHealthButton2, 1, bodyAndHealth4);  
   everything(bodyAndHealthButton3, 2, bodyAndHealth4);  
   everything(bodyAndHealthButton4, 3, bodyAndHealth4);  
   everything(bodyAndHealthButton5, 4, bodyAndHealth4);  
   everything(bodyAndHealthButton6, 5, bodyAndHealth4);  
   everything(bodyAndHealthButton7, 6, bodyAndHealth4);  
   everything(bodyAndHealthButton8, 7, bodyAndHealth4);  
   everything(bodyAndHealthButton9, 8, bodyAndHealth4);  
   everything(bodyAndHealthButton10, 9, bodyAndHealth4);  

   // function everything (buttonQuerySelectorVariable, index, categoryDataVariable){}
  // function call for category: ---- Mistakes And Failures ----

  everything(mistakesAndFailuresButton1, 0, mistakesAndFailures5);
  everything(mistakesAndFailuresButton2, 1, mistakesAndFailures5);  
  everything(mistakesAndFailuresButton3, 2, mistakesAndFailures5);  
  everything(mistakesAndFailuresButton4, 3, mistakesAndFailures5);  
  everything(mistakesAndFailuresButton5, 4, mistakesAndFailures5);  
  everything(mistakesAndFailuresButton6, 5, mistakesAndFailures5);  
  everything(mistakesAndFailuresButton7, 6, mistakesAndFailures5);  
  everything(mistakesAndFailuresButton8, 7, mistakesAndFailures5);  
  everything(mistakesAndFailuresButton9, 8, mistakesAndFailures5);  
  everything(mistakesAndFailuresButton10, 9, mistakesAndFailures5);  

    // function everything (buttonQuerySelectorVariable, index, categoryDataVariable){}
   // function call for category: ---- Feelings And Mood ----

   everything(feelingsAndMoodButton1, 0, feelingsAndMood6);
   everything(feelingsAndMoodButton2, 1, feelingsAndMood6);  
   everything(feelingsAndMoodButton3, 2, feelingsAndMood6);  
   everything(feelingsAndMoodButton4, 3, feelingsAndMood6);  
   everything(feelingsAndMoodButton5, 4, feelingsAndMood6);  
   everything(feelingsAndMoodButton6, 5, feelingsAndMood6);  
   everything(feelingsAndMoodButton7, 6, feelingsAndMood6);  
   everything(feelingsAndMoodButton8, 7, feelingsAndMood6);  
   everything(feelingsAndMoodButton9, 8, feelingsAndMood6);  
   everything(feelingsAndMoodButton10, 9, feelingsAndMood6);  

    // function everything (buttonQuerySelectorVariable, index, categoryDataVariable){}
   // function call for category: ---- Family And Children ----

   everything(familyAndChildrenButton1, 0, familyAndChildren7);
   everything(familyAndChildrenButton2, 1, familyAndChildren7);  
   everything(familyAndChildrenButton3, 2, familyAndChildren7);  
   everything(familyAndChildrenButton4, 3, familyAndChildren7);  
   everything(familyAndChildrenButton5, 4, familyAndChildren7);  
   everything(familyAndChildrenButton6, 5, familyAndChildren7);  
   everything(familyAndChildrenButton7, 6, familyAndChildren7);  
   everything(familyAndChildrenButton8, 7, familyAndChildren7);  
   everything(familyAndChildrenButton9, 8, familyAndChildren7);  
   everything(familyAndChildrenButton10, 9, familyAndChildren7);  

   // function everything (buttonQuerySelectorVariable, index, categoryDataVariable){}
  // function call for category: ---- Nature ----

  everything(natureButton1, 0, nature8);
  everything(natureButton2, 1, nature8);  
  everything(natureButton3, 2, nature8);  
  everything(natureButton4, 3, nature8);  
  everything(natureButton5, 4, nature8);  
  everything(natureButton6, 5, nature8);  
  everything(natureButton7, 6, nature8);  
  everything(natureButton8, 7, nature8);  
  everything(natureButton9, 8, nature8);  
  everything(natureButton10, 9, nature8);  

    // function everything (buttonQuerySelectorVariable, index, categoryDataVariable){}
   // function call for category: ---- Abundance And Excess ----

   everything(abundanceAndExcessButton1, 0, abundanceAndExcess9);
   everything(abundanceAndExcessButton2, 1, abundanceAndExcess9);  
   everything(abundanceAndExcessButton3, 2, abundanceAndExcess9);  
   everything(abundanceAndExcessButton4, 3, abundanceAndExcess9);  
   everything(abundanceAndExcessButton5, 4, abundanceAndExcess9);  
   everything(abundanceAndExcessButton6, 5, abundanceAndExcess9);  
   everything(abundanceAndExcessButton7, 6, abundanceAndExcess9);  
   everything(abundanceAndExcessButton8, 7, abundanceAndExcess9);  
   everything(abundanceAndExcessButton9, 8, abundanceAndExcess9);  
   everything(abundanceAndExcessButton10, 9, abundanceAndExcess9);  

    // function everything (buttonQuerySelectorVariable, index, categoryDataVariable){}
   // function call for category: ---- Lagniappe ----

   everything(lagniappeButton1, 0, lagniappe10);
   everything(lagniappeButton2, 1, lagniappe10);  
   everything(lagniappeButton3, 2, lagniappe10);  
   everything(lagniappeButton4, 3, lagniappe10);  
   everything(lagniappeButton5, 4, lagniappe10);  
   everything(lagniappeButton6, 5, lagniappe10);  
   everything(lagniappeButton7, 6, lagniappe10);  
   everything(lagniappeButton8, 7, lagniappe10);  
   everything(lagniappeButton9, 8, lagniappe10);  
   everything(lagniappeButton10, 9, lagniappe10);  
    















   



    
       

   
// console.log(comingsAndGoings1)

// comingsAndGoingsButton1.addEventListener('click', function(){
//     for(let i = 0; i < comingsAndGoings1.length; i++){
//     paragraph1.innerText = `Figure of Speech:  ${comingsAndGoings1[0].figureOfSpeech}`
//     paragraph2.innerText = `Translation:  ${comingsAndGoings1[0].translation}`
        
//     console.log(comingsAndGoings1[0].figureOfSpeech)
//     console.log(comingsAndGoings1[0].translation)
// };
// });













// comingsAndGoingsButton2.addEventListener('click', function(){
//     for(let i = 0; i < comingsAndGoings1.length; i++){
//     paragraph1.innerText = `Figure of Speech:  ${comingsAndGoings1[1].figureOfSpeech}`
//     paragraph2.innerText = `Translation:  ${comingsAndGoings1[1].translation}`
//     console.log(comingsAndGoings1[1].figureOfSpeech)
//     console.log(comingsAndGoings1[1].translation)
// };
// });

// friendsAndLoversButton2.addEventListener('click', function(){
//     for(let i = 0; i < friendsAndLovers2.length; i++){
//     paragraph1.innerText = `Figure of Speech:  ${friendsAndLovers2[i].figureOfSpeech}`
//     paragraph2.innerText = `Translation:  ${friendsAndLovers2[i].translation}`
//     console.log(friendsAndLovers2[i].figureOfSpeech)
//     console.log(friendsAndLovers2[i].translation)
// };
// });

// timeAndSpaceButton3.addEventListener('click', function(){
//     for(let i = 0; i < timeAndSpace3.length; i++){
//     paragraph1.innerText = `Figure of Speech:  ${timeAndSpace3[i].figureOfSpeech}`
//     paragraph2.innerText = `Translation:  ${timeAndSpace3[i].translation}`
//     console.log(timeAndSpace3[i].figureOfSpeech)
//     console.log(timeAndSpace3[i].translation)
// };
// });

// bodyAndHealthButton4.addEventListener('click', function(){
//     for(let i = 0; i < bodyAndHealth4.length; i++){
//     paragraph1.innerText = `Figure of Speech:  ${bodyAndHealth4[i].figureOfSpeech}`
//     paragraph2.innerText = `Translation:  ${bodyAndHealth4[i].translation}`
//     console.log(bodyAndHealth4[i].figureOfSpeech)
//     console.log(bodyAndHealth4[i].translation)
// };
// });

// mistakesAndFailuresButton5.addEventListener('click', function(){
//     for(let i = 0; i <  mistakesAndFailures5.length; i++){
//     paragraph1.innerText = `Figure of Speech:  ${mistakesAndFailures5[i].figureOfSpeech}`
//     paragraph2.innerText = `Translation:  ${mistakesAndFailures5[i].translation}`
//     console.log(mistakesAndFailures5[i].figureOfSpeech)
//     console.log(mistakesAndFailures5[i].translation)
// };
// });

// feelingsAndMoodButton6.addEventListener('click', function(){
//     for(let i = 0; i < feelingsAndMood6.length; i++){
//         paragraph1.innerText = `Figure of Speech:  ${feelingsAndMood6[i].figureOfSpeech}`
//         paragraph2.innerText = `Translation:  ${feelingsAndMood6[i].translation}`
//         console.log(feelingsAndMood6[i].figureOfSpeech)
//         console.log(feelingsAndMood6[i].translation)
//     };
//     });

// familyAndChildrenButton7.addEventListener('click', function(){
//     for(let i = 0; i < familyAndChildren7.length; i++){
//         paragraph1.innerText = `Figure of Speech:  ${familyAndChildren7[i].figureOfSpeech}`
//         paragraph2.innerText = `Translation:  ${familyAndChildren7[i].translation}`
//         console.log(familyAndChildren7[i].figureOfSpeech)
//         console.log(familyAndChildren7[i].translation)
//     };
//     });

// natureButton8.addEventListener('click', function(){
//     for(let i = 0; i < nature8.length; i++){
//         paragraph1.innerText = `Figure of Speech:  ${nature8[i].figureOfSpeech}`
//         paragraph2.innerText = `Translation:  ${nature8[i].translation}`
//         console.log(nature8[i].figureOfSpeech)
//         console.log(nature8[i].translation)
//     };
//     });

// abundanceAndExcessButton9.addEventListener('click', function(){
//     for(let i = 0; i < abundanceAndExcess9.length; i++){
//         paragraph1.innerText = `Figure of Speech:  ${abundanceAndExcess9[i].figureOfSpeech}`
//         paragraph2.innerText = `Translation:  ${abundanceAndExcess9[i].translation}`
//         console.log(abundanceAndExcess9[i].figureOfSpeech)
//         console.log(abundanceAndExcess9[i].translation)
//     };
//     });

// lagniappeButton10.addEventListener('click', function(){
//     for(let i = 0; i < lagniappe10.length; i++){
//         paragraph1.innerText = `Figure of Speech:  ${lagniappe10[i].figureOfSpeech}`
//         paragraph2.innerText = `Translation:  ${lagniappe10[i].translation}`
//         console.log(lagniappe10[i].figureOfSpeech)
//         console.log(lagniappe10[i].translation)
//     };
//     });

                            
                            
            
        
    





   









 


// functions buttons(buttonQuerySelectorVariable, index, categoryDataVariable){}
   
function everything (buttonQuerySelectorVariable, index, categoryDataVariable){

    buttonQuerySelectorVariable.addEventListener('click', function(){
        for(let i = 0; i < categoryDataVariable.length; i++){
            
        paragraph1.innerText = `Figure of Speech:  ${categoryDataVariable[index].figureOfSpeech}`
        paragraph2.innerText = `Translation:  ${categoryDataVariable[index].translation}`
       
        console.log(categoryDataVariable[index].figureOfSpeech)
        console.log(categoryDataVariable[index].translation)
    };
    });




}




    













}

speechData();





























