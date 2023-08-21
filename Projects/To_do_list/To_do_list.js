const list=[];
let req=prompt("Enter the request you want to perform");
while(true){
    if(req==="quit" || req==="Quit"){
        console.log("Quitting the app");
        break;
    }
    else if(req==="add"){
        let task=prompt("Enter the task to add");
        list.push(task);
        console.log("Task added!");
    }
    else if(req==="list"){
        console.log("-------------------");
        for(let i=0;i<list.length;i++){
            console.log(list[i]);
        }
        console.log("-------------------");
    }
    else if(req==="delete"){
        let indx= +prompt("Enter the index to delete");
        list.splice(indx,1);
        console.log("1 item deleted successfully!");
    }
    else{
        console.log("Wrong request! Please try again");
    }
    req=prompt("Enter the request you want to perform");

}