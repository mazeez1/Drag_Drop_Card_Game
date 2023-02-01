let box = document.querySelectorAll(".box");

let imgBox = document.querySelector(".imgBox");
let imgBox1 = document.querySelector(".imgBox1");
let imgBox2 = document.querySelector(".imgBox2");
let imgBox3 = document.querySelector(".imgBox3");

//when drag start console 'dragstart'
//imgBox.addEventListener("dragstart",()=>{
//    console.log("dragstart");
//});

//when i drop the image 'dragend' will be trigerred
//imgBox.addEventListener("dragend",()=>{
//    console.log("dragend");
//});

for(boxes of box){
//    boxes.addEventListener("dragenter",()=>{
//        console.log("dragenter");
//    })
    boxes.addEventListener("dragover",(e)=>{
        console.log("dragover");
        e.preventDefault();
    })
//    boxes.addEventListener("dragleave",()=>{
//        console.log("dragleave");
////    })
    boxes.addEventListener("drop",(e)=>{
        console.log("drop");
        e.target.append(imgBox);
    })
}

//the others
for(boxes of box){
    //    boxes.addEventListener("dragenter",()=>{
    //        console.log("dragenter");
    //    })
        boxes.addEventListener("dragover",(e)=>{
            console.log("dragover");
            e.preventDefault();
        })
    //    boxes.addEventListener("dragleave",()=>{
    //        console.log("dragleave");
    ////    })
        boxes.addEventListener("drop",(e)=>{
            console.log("drop");
            e.target.append(imgBox1);
        })
    }


    for(boxes of box){
        //    boxes.addEventListener("dragenter",()=>{
        //        console.log("dragenter");
        //    })
            boxes.addEventListener("dragover",(e)=>{
                console.log("dragover");
                e.preventDefault();
            })
        //    boxes.addEventListener("dragleave",()=>{
        //        console.log("dragleave");
        ////    })
            boxes.addEventListener("drop",(e)=>{
                console.log("drop");
                e.target.append(imgBox2);
            })
        }
    
    
        for(boxes of box){
            //    boxes.addEventListener("dragenter",()=>{
            //        console.log("dragenter");
            //    })
                boxes.addEventListener("dragover",(e)=>{
                    console.log("dragover");
                    e.preventDefault();
                })
            //    boxes.addEventListener("dragleave",()=>{
            //        console.log("dragleave");
            ////    })
                boxes.addEventListener("drop",(e)=>{
                    console.log("drop");
                    e.target.append(imgBox3);
                })
            }

        