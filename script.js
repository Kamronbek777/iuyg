let randomNumber = Math.round(Math.random() * 100);
// let randomNumber = 12;git
let tries = [4, 3, 2, 1];

tries.forEach(item => {
    let message = +prompt(`Random raqamni kiriting (1 dan 100 gacha). Urinishlar soni: ${item++}`)
    if (message < randomNumber) {
        alert(`Siz kiritgan son random raqamdan kichik. Qayta urinib koring.`);
    }else if (message > randomNumber) {
        alert(`Siz kiritgan son random raqamdan katta. Qayta urinib koring.`);
    }else if (message == randomNumber) {
        alert(`Tabriklaymiz siz topdingiz`);
        script.stop;
    }
});
alert (`Random son ${randomNumber} edi`);