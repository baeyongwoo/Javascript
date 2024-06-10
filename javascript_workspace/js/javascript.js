// let btn = document.querySelector("#btn6");
// btn.addEventListener("mouseover", function (e) {
//    console.log(e.target.value);
// });



//DoMContentLoaded 이벤트. 컨텐츠가 로딩된 후 처리. #btn7이 로딩된 후 처리됨
document.addEventListener("DOMContentLoaded",function (e) {
     
        let btn2 = document.querySelector('#btn7');
        btn2.addEventListener('click', function (e) {
            console.log(e.target.value);
            
        })
})
// 위아래 비슷함
//window가 로딩이 완료된 후 처리 .  #btn8이 로딩된 후 처리됨

//문서에서 키를 눌렀을 때 동작
window.onload=function () {
    let btn8 = document.querySelector('#btn8');
    btn8.addEventListener("keydown", function (e) {
        //e.target.value는 input 태그 안에 있는 value를 가져옴
        console.log(e.target.value);
        if(e.key==='q'){
            alert('this is ' + e.key);
        }
        
    })

    //값이 변경되야 동작함
    let change = document.querySelector('#change');
    change.addEventListener("change", function (e) {
        console.log(e.target);
        
    })
}

function red1(e) {
    e.target.style.background="red";
}
function blue(e) {
    e.target.style.background="blue";
}



