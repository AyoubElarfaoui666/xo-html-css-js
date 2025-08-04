let items = document.querySelectorAll(".item") ;
let title = document.querySelector(".title")

turn = "x" ;

items.forEach((ele,index,arr) => {
    ele.onclick = (e) => {
        ele.innerHTML = turn ;
        if(turn === "x"){
            turn = "o" ;
            title.innerHTML = turn ;
            ele.classList.add("x") ;
            checkAll()
        }else{
            turn = "x" ;
            title.innerHTML = turn ;
            ele.classList.add("o") ;
            checkAll()
        }
    }
})

function check(arr, number){
    let one = number[0];
    let two = number[1];
    let three = number[2];
    if(
        arr[one].innerHTML != "" &&
        arr[one].innerHTML == arr[two].innerHTML &&
        arr[two].innerHTML == arr[three].innerHTML
    ){
        number.map((num) => {
            arr[num].classList.add("black");
        });
        let span = document.createElement("span")
        span.innerHTML = arr[one].classList.item(1) ;
        let text = document.createTextNode(" Winner")
        title.innerHTML="" ;
        title.append(span,text) ;
        setTimeout(()=>{
            title.innerHTML += "."
            setTimeout(()=>{
                title.innerHTML += "."
                setTimeout(()=>{
                    title.innerHTML += "."
                    location.reload();
                },1000)
            },1000)
        },1000)
    }
}

function checkAll(){
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];
    winPatterns.forEach(pattern => check(items, pattern));
}

