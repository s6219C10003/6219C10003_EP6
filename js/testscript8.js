let tx_midterm = document.getElementById('tx_midterm')
let tx_final = document.getElementById('tx_final')
let tx_quiz = document.getElementById('tx_quiz')
let bt_cal = document.getElementById('bt_cal')
let bt_cancel = document.getElementById('bt_cancel')
let show_sum_score = document.getElementById('show_sum_score')
let show_grade = document.getElementById('show_grade')

tx_quiz.addEventListener('keydown', (evt)=>{
    //เอา evt ซึ่งคือปุ่มที่ผู้ใช้กดมาพิสูจน์ว่าเป็นตัวเลขขหรือไม่
    //console.log(evt)
    //let key = Number (evt.key)
    if(isNaN(Number(evt.key)) && 
    evt.key != '.' && 
    evt.key != 'Backspace' && 
    evt.key != 'Delete' && 
    evt.key != 'ArrowRight' &&
    evt.key != 'ArrowLeft'){
        evt.preventDefault()
    }
})

//tx_quiz.onkeydown = (evt) => {
//
//}

function calScoreGrade(){
    let sum_score = Number(tx_midterm.value) + Number(tx_final.value) + Number(tx_quiz.value.trim())
    show_sum_score.innerHTML = sum_score
    show_sum_score.style.color = '#ff0000'
    show_sum_score.style.fontWeight = 'bold'
    show_sum_score.style.fontSize = '20px'

    if( sum_score >= 80){
        show_grade.innerHTML = 'A'
    }else if(sum_score >= 50){
        show_grade.innerHTML = 'B'
    }else(
        show_grade.innerHTML = 'C'
    )
    show_grade.style.color = '#ff0000'
    show_grade.style.fontWeight = 'bold'
    show_grade.style.fontSize = '20px'
}

function cancelInput(){
    //cleardata
}

bt_cal.addEventListener('click',calScoreGrade)

bt_cancel.addEventListener('click', calScoreGrade)