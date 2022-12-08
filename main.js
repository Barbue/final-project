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

    // paragraphQuerySelectorVariables:

    let paragraph1 = document.querySelector('#figuresOfSpeech');
    let paragraph2 = document.querySelector('#translation');
    let paragraph3 = document.querySelector('#audio');

     // buttonQuerySelectorVariables:

    let comingsAndGoingsButton1 = document.querySelectorAll('#premiere button');
    let friendsAndLoversButton1 = document.querySelectorAll('#deuxieme button');
    let timeAndSpaceButton1 = document.querySelectorAll('#troisieme button');
    let bodyAndHealthButton1 = document.querySelectorAll('#quatrieme button');
    let mistakesAndFailuresButton1 = document.querySelectorAll('#cinquieme button');
    let feelingsAndMoodButton1 = document.querySelectorAll('#sixieme button');
    let familyAndChildrenButton1 = document.querySelectorAll('#septieme button');
    let natureButton1 = document.querySelectorAll('#huitieme button');
    let abundanceAndExcessButton1 = document.querySelectorAll('#neuvieme button');
    let lagniappeButton1 = document.querySelectorAll('#dixieme button');
   


  


    // Function calls for:  function everything (buttonQuerySelectorVariable, categoryDataVariable){}
   
    everything(comingsAndGoingsButton1, comingsAndGoings1);
    everything(friendsAndLoversButton1, friendsAndLovers2);
    everything(timeAndSpaceButton1, timeAndSpace3);
    everything(bodyAndHealthButton1, bodyAndHealth4);
    everything(mistakesAndFailuresButton1, mistakesAndFailures5);
    everything(feelingsAndMoodButton1, feelingsAndMood6);
    everything(familyAndChildrenButton1, familyAndChildren7);
    everything(natureButton1, nature8);
    everything(abundanceAndExcessButton1, abundanceAndExcess9);
    everything(lagniappeButton1, lagniappe10);

    


// function everything (buttonQuerySelectorVariable, categoryDataVariable){}
   
function everything (buttonQuerySelectorVariable, categoryDataVariable){
    for(let i = 0; i < buttonQuerySelectorVariable.length; i++){
    buttonQuerySelectorVariable[i].addEventListener('click', function(){
    paragraph1.innerText = `Figure of Speech:  ${categoryDataVariable[i].figureOfSpeech}`
    paragraph2.innerText = `Translation:  ${categoryDataVariable[i].translation}`
    console.log(categoryDataVariable[i].figureOfSpeech)
    console.log(categoryDataVariable[i].translation)
    });
    };
    };




    













}
speechData();





























