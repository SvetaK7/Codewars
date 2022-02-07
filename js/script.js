function remove(string) {
    let nn = string.split('');
       
    for (i = string.length-1; i >=0; i--){
        newAr = nn.pop();
        
        if(newAr !== '!'){
            nn.push(newAr);
            return nn.join('');
        } 
     }
     }
    

    //  function remove(s){
    //     return s.replace(/!+$/, '');
    //   }


    // while(s && s.slice(-1) == "!") 
    // { 
    //     s = s.slice(0,-1) 
    // }
    // return s;

console.log(remove('!sveta!!!'));





