//สร้างตัวแปรเพื่ออ้างอิงไปยังจุดต่างๆบนเว็บเพจ เพื่อการใช้งานโค้ดที่สั้นลง
let tx_money = document.getElementById('tx_money')
let tx_person = document.getElementById('tx_person')
let bt_cal = document.getElementById('bt_cal')
let bt_cancel = document.getElementById('bt_cancel')
let show_result = document.getElementById('show_result')

bt_cal.addEventListener('click', ()=> {
    //console.log('Hi....')
    //ตรวจสอบก่อนว่าป้อนหรือยัง
    if( tx_money.value.trim().tength == 0){
        alert('ป้อนเงินด้วย....')
    }else if( tx_person.value.trim().tength == 0){
        alert('ป้อนคนด้วย....')
    }else{
        let result = Number(tx_money.value.trim()) / Number(tx_person.value.trim())
        show_result.innerHTML = result.toFixed(2)
    }
} )

bt_cancel.onclick = () => {
    //console.log('Hey....')
    //เคลียทุกที่ให้เหมือนเดิม
    tx_money.value = ''
    tx_person.value =''
    show_result.innerHTML ='0.00'
}

show_result.addEventListener('mouseover', ()=>{
    show_result.style.color = '#0000ff'
})

show_result.onmouseout = () => {
    show_result.style.color = '#ff0000'
}