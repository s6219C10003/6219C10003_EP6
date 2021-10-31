//การตั้งชื่อใดๆ ขึ้นองในการ Dev. เช่น ชื่อตัวแปร ชื่อฟังก์ชั่น ชื่อออปเจ็กต์ ชื่อค่าคงที่ ..... ต้องเป็นไปตามกฏการตั้งชื่อภาษาโปรแกรมนั้นๆ

//Function **********

//คือการทำงานหนั่ง
//ฟังก์ชั่น จะไม่ทำงานหากไม่มีการเรียกใช้ฟังก์ชัน call function
//ฟังก์ชัน จะเรียกใช้ให้ทำงานตอนไหน ที่ไหน กี่ครั้ง ก็ได้

//function show_iot(){
//    console.log('Welcome to thailand')
//}

//show_iot()
//show_iot()
//show_iot()
//show_iot()
//console.log ('Good moring')
//ฟังชั่นจะมีอยู่ 4 ลักษณะ


//1 ทำงานเสร็จในตัวเอง (ไม่ส่งค่ากลับ) และไม่มีพารามิเตอร์
function iotFunc1(){//ไม่มีอะไรในวงเล็บหลังฟังก์ชั่น
    console.log('Hello...')
}

//2 ทำงานเสร็จในตัวเอง (ไม่ส่งค่ากลับ) และมีพารามิเตอร์
function iotFunc2(a, num){//ไม่มีอะไรในวงเล็บหลังฟังก์ชั่น
    console.log('Hi...')
    console.log(a + num)
}

//3 ทำงานเสร็จและมีการส่งค่ากลับ (return) และไม่มีพารามิเตอร์
//*** ค่าที่ส่งกลับควรจะนำไปใช้ทำอะไรเสมอ
function iotFunc3(){//ไม่มีอะไรในวงเล็บหลังฟังก์ชั่น
    console.log('Hey...')
    return 999;
}

//4 ทำงานเสร็จและมีการส่งค่ากลับ (return) และมีพารามิเตอร์
//*** ค่าที่ส่งกลับควรจะนำไปใช้ทำอะไรเสมอ
function iotFunc4(b, z){//ไม่มีอะไรในวงเล็บหลังฟังก์ชั่น
    console.log('Hoo...')
    return 'สวัสดีชาวโลก';
}

iotFunc1()
iotFunc2(50, 100)

console.log ( iotFunc3() )

let sau = iotFunc4(555, 'Wow')
console.log (sau)

function iotFunc5(a, b = 20){
    console.log(a)
    console.log(b)
    console.log(a + b)
}

iotFunc5(1, 5)
iotFunc5(100)

//javascript มีฟังชั่นแบบไม่มีชื่อ
let mod = function (){
    console.log('Wow Wow Wow')
}

let med = () =>{
    console.log('Wee Wee Wee')
}