/* 图片切换器 */
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/firefox-icon.png'){
        myImage.setAttribute('src','images/firefox2.png');
    }
    else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}

/* 欢迎信息 */
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function(){
    setUserName();
}

if(!localStorage.getItem('name')){  //检查name是否存在
    setUserName();
}
else{
    let storageName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了. ' + storageName;
}

function setUserName(){
    let myName = prompt('请输入你的名字. ');
    if(myName == null){
        setUserName();
    }
    else{
        localStorage.setItem('name',myName);
        myHeading.textContent = 'Mozilla 酷毙了, ' + myName;
    }
}









