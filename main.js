let speechData = async () => {

    let rawFiguresOfSpeechData = await fetch('figuresOfSpeech.json');

    console.log(speechData);

    let data = await rawFiguresOfSpeechData.json();
    console.log(data);

    let groupedData = _.groupBy(data, 'category');

    console.log(groupedData);

    console.log(groupedData.friendsAndLovers);
    //console.log(groupedData.translation)
  

 

    let comingsAndGoings1 = groupedData.comingsAndGoings;
    let friendsAndLovers2 = groupedData.friendsAndLovers;
    let timeAndSpace3 = groupedData.timeAndSpace;
    let bodyAndHealth4 = groupedData.foodAndDrink;
    let mistakesAndFailures5 = groupedData.mistakesAndFailures;
    let feelingsAndMood6 = groupedData.feelingsAndMood;
    let familyAndChildren7 = groupedData.familyAndChildren;
    let nature8 = groupedData.nature;
    let abundanceAndExcess9 = groupedData.abundanceAndExcess;
    let lagniappe10 = groupedData.lagniappe;

    let comingsAndGoingsButton1 = document.querySelector('#premiere');
    let friendsAndLoversButton2 = document.querySelector('#deuxieme');
    let timeAndSpaceButton3 = document.querySelector('#troisieme');
    let bodyAndHealthButton4 = document.querySelector('#quatrieme');
    let mistakesAndFailuresButton5 = document.querySelector('#cinquieme');
    let feelingsAndMoodButton6 = document.querySelector('#sixieme');
    let familyAndChildrenButton7 = document.querySelector('#septieme');
    let natureButton8 = document.querySelector('#huitieme');
    let abundanceAndExcessButton9 = document.querySelector('#neuvieme');
    let lagniappeButton10 = document.querySelector('#dixieme');

    let paragraph1 = document.querySelector('#figuresOfSpeech');
    let paragraph2 = document.querySelector('#translation');

    //console.log(comingsAndGoings1[0].translation)

    // let createButtonElement = document.createElement('button');

    
       

   


comingsAndGoingsButton1.addEventListener('click', function(){
    for(let i = 0; i < comingsAndGoings1.length; i++){
    paragraph1.innerText = `Figure of Speech:  ${comingsAndGoings1[i].figureOfSpeech}`
    paragraph2.innerText = `Translation:  ${comingsAndGoings1[i].translation}`
    

    console.log(comingsAndGoings1[i].figureOfSpeech)
    console.log(comingsAndGoings1[i].translation)
};
});

friendsAndLoversButton2.addEventListener('click', function(){
    for(let i = 0; i < friendsAndLovers2.length; i++){
    paragraph1.innerText = `Figure of Speech:  ${friendsAndLovers2[i].figureOfSpeech}`
    paragraph2.innerText = `Translation:  ${friendsAndLovers2[i].translation}`
    console.log(friendsAndLovers2[i].figureOfSpeech)
    console.log(friendsAndLovers2[i].translation)
};
});

timeAndSpaceButton3.addEventListener('click', function(){
    for(let i = 0; i < timeAndSpace3.length; i++){
    paragraph1.innerText = `Figure of Speech:  ${timeAndSpace3[i].figureOfSpeech}`
    paragraph2.innerText = `Translation:  ${timeAndSpace3[i].translation}`
    console.log(timeAndSpace3[i].figureOfSpeech)
    console.log(timeAndSpace3[i].translation)
};
});

bodyAndHealthButton4.addEventListener('click', function(){
    for(let i = 0; i < bodyAndHealth4.length; i++){
    paragraph1.innerText = `Figure of Speech:  ${bodyAndHealth4[i].figureOfSpeech}`
    paragraph2.innerText = `Translation:  ${bodyAndHealth4[i].translation}`
    console.log(bodyAndHealth4[i].figureOfSpeech)
    console.log(bodyAndHealth4[i].translation)
};
});

mistakesAndFailuresButton5.addEventListener('click', function(){
    for(let i = 0; i <  mistakesAndFailures5.length; i++){
    paragraph1.innerText = `Figure of Speech:  ${mistakesAndFailures5[i].figureOfSpeech}`
    paragraph2.innerText = `Translation:  ${mistakesAndFailures5[i].translation}`
    console.log(mistakesAndFailures5[i].figureOfSpeech)
    console.log(mistakesAndFailures5[i].translation)
};
});

feelingsAndMoodButton6.addEventListener('click', function(){
    for(let i = 0; i < feelingsAndMood6.length; i++){
        paragraph1.innerText = `Figure of Speech:  ${feelingsAndMood6[i].figureOfSpeech}`
        paragraph2.innerText = `Translation:  ${feelingsAndMood6[i].translation}`
        console.log(feelingsAndMood6[i].figureOfSpeech)
        console.log(feelingsAndMood6[i].translation)
    };
    });

familyAndChildrenButton7.addEventListener('click', function(){
    for(let i = 0; i < familyAndChildren7.length; i++){
        paragraph1.innerText = `Figure of Speech:  ${familyAndChildren7[i].figureOfSpeech}`
        paragraph2.innerText = `Translation:  ${familyAndChildren7[i].translation}`
        console.log(familyAndChildren7[i].figureOfSpeech)
        console.log(familyAndChildren7[i].translation)
    };
    });

natureButton8.addEventListener('click', function(){
    for(let i = 0; i < nature8.length; i++){
        paragraph1.innerText = `Figure of Speech:  ${nature8[i].figureOfSpeech}`
        paragraph2.innerText = `Translation:  ${nature8[i].translation}`
        console.log(nature8[i].figureOfSpeech)
        console.log(nature8[i].translation)
    };
    });

abundanceAndExcessButton9.addEventListener('click', function(){
    for(let i = 0; i < abundanceAndExcess9.length; i++){
        paragraph1.innerText = `Figure of Speech:  ${abundanceAndExcess9[i].figureOfSpeech}`
        paragraph2.innerText = `Translation:  ${abundanceAndExcess9[i].translation}`
        console.log(abundanceAndExcess9[i].figureOfSpeech)
        console.log(abundanceAndExcess9[i].translation)
    };
    });

lagniappeButton10.addEventListener('click', function(){
    for(let i = 0; i < lagniappe10.length; i++){
        paragraph1.innerText = `Figure of Speech:  ${lagniappe10[i].figureOfSpeech}`
        paragraph2.innerText = `Translation:  ${lagniappe10[i].translation}`
        console.log(lagniappe10[i].figureOfSpeech)
        console.log(lagniappe10[i].translation)
    };
    });

                            
                            
            
        
    





   









 



   
        
    













}

speechData();































// {
//     "category": "comingsAndGoings",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "comingsAndGoings",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "comingsAndGoings",
//     "figureOfSpeech": "",
//     "translation": ""
// },
// {
//     "category": "comingsAndGoings",
//     "figureOfSpeech": "",
//     "translation": ""
// },
// {
//     "category": "comingsAndGoings",
//     "figureOfSpeech": "",
//     "translation": ""
// },
// {
//     "category": "comingsAndGoings",
//     "figureOfSpeech": "",
//     "translation": ""
// },
// {
//     "category": "comingsAndGoings",
//     "figureOfSpeech": "",
//     "translation": ""
// },
// {
//     "category": "comingsAndGoings",
//     "figureOfSpeech": "",
//     "translation": ""
// },
// {
//     "category": "comingsAndGoings",
//     "figureOfSpeech": "",
//     "translation": ""
// },




// {
//     "category": "friendsAndLovers",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "friendsAndLovers",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "friendsAndLovers",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "friendsAndLovers",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "friendsAndLovers",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "friendsAndLovers",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "friendsAndLovers",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "friendsAndLovers",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "friendsAndLovers",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "timeAndSpace",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "foodAndDrink",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "",
//     "figureOfSpeech": "",
//     "translation": ""
// },

// {
//     "category": "",
//     "figureOfSpeech": "",
//     "translation": ""
// },
// {
//     "category": "",
//     "figureOfSpeech": "",
//     "translation": ""
// },


