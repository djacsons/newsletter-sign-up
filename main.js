const Buttons = document.getElementsByClassName('buttons')
const Mains = document.getElementsByClassName('mains')
const emailInput = document.getElementsByClassName('emailInput')
const eErrorHead = document.getElementsByClassName('emailErrorHeading')
const desktopPic = document.getElementsByClassName('main1Right')
const mobilePic = document.getElementsByClassName('mobilePic')
const emailLink = document.getElementById('emailLink')
signUpPic = ()=>{
    if (window.innerWidth<400) {
        if(!desktopPic[0].classList.contains('eleRemove')) desktopPic[0].classList.add('eleRemove')
        else if (mobilePic[0].classList.contains('eleRemove')) mobilePic[0].classList.remove('eleRemove') 
    }
    else if (window.innerWidth>=400){
        if(desktopPic[0].classList.contains('eleRemove')) desktopPic[0].classList.remove('eleRemove') 
        else if (!mobilePic[0].classList.contains('eleRemove')) mobilePic[0].classList.add('eleRemove')
    }
}
resizer = setInterval(() => {
    signUpPic()
}, 500);

pageSwitch = ()=>{
    if (noErrors()){
        if (emailInput[0].classList.contains('errorState')) emailInput[0].classList.remove('errorState')
        else if (!eErrorHead[0].classList.contains('invisible')) eErrorHead[0].classList.add('invisible')
        for (let i = 0; i<2; i++){
            if (!Mains[i].classList.contains('eleRemove')){
                Mains[i].classList.add('eleRemove')
            }
            else if (Mains[i].classList.contains('eleRemove')){
                Mains[i].classList.remove('eleRemove')
            }
        }
        emailLink.innerHTML = emailInput[0].value
    }
    else{
        emailInput[0].classList.add('errorState')
        eErrorHead[0].classList.remove('invisible')
    }
}
correctFormat = ()=>{
    if (emailInput[0].value.indexOf('@')==-1)return false
    else return true
}
noErrors = ()=>{
    if (emailInput[0].value == '') return false
    else if (!correctFormat()) return false
    else return true
}
for (let i = 0; i<2; i++){
    Buttons[i].setAttribute('onclick', 'pageSwitch()')
}

