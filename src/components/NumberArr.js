/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
export default function NumberArr(){

    const numArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    const box_block = document.createElement("div");
    box_block.classList.add("box_block");
    document.querySelector("body").append(box_block);
    numArr.map((num) => {
        console.log(num);
        const box = document.createElement("div");
        box.classList.add("box");
        if(num % 2 == 0 ){
        box.classList.add("box_green");
        }

        if(num % 2 != 0 ){
            box.classList.add("box_yellow");
        }
            box.textContent  = num;
            box_block.append(box);
    })
}