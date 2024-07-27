const profile = {
username: "Jacob",
playTime: 300,
getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
},
changeUsername(newUserName){
    this.username = newUserName;
return `${this.username} has ${this.playTime} active hours!`
},
updatePlayTime(updatedTime){
return this.playTime += updatedTime;
},
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"




/* !!!Для звернення до властивостей об’єкта в його методах використовується this

1) Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
Значення властивості changeUsername — це функція

2) Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
Значення властивості updatePlayTime — це функція

3) Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.
Значення властивості getInfo — це функція */