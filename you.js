
const search = ()=>{
        let input = document.getElementById("input").value.toUpperCase();
        let love = document.querySelectorAll("#love");

        for(i=0; i < love.length; i++){
            let mark = love[i].getElementsByTagName("pre")[0];
            
                let text = mark.textContent || mark.innerHTML
                if(text.toUpperCase().indexOf(input) > -1 ){
                    love[i].style.display = "block";
                }else{
                    love[i].style.display = "none";
                }
            
        }
        
    }

//    let sera = document.getElementById("search");

//    sera.addEventListener("click",()=>{

//     let input = document.getElementById("input").value.toUpperCase();
//         let love = document.querySelectorAll("#love");
//         for(i=0; i < love.length; i++){
//             let mark = love[i].getElementsByTagName("pre")[0];
//              
//                 let text = mark.textContent || mark.innerHTML
//                 if(text.toUpperCase().indexOf(input) > -1){
//                     love[i].style.display = "";
//                 }else{
//                     love[i].style.display = "none";
//                 }
//      
//         }
//    })


  
// let bars = document.getElementById("bars");
// let side1 = document.getElementById("side1");


// bars.addEventListener("click" , ()=>{

//     side1.classList.toggle("javas");
    
// })


   










