const vaxTrail=information=>{
    
    let arr_A=[];
    let arr_B=[];
    let arr_C=[];
    let arr_D=[];
   let obj={};
   for(let data of information){
        if(data.temperature<100){
            
                if(data.age>=20 && data.age<=30){
                    (data.age%2===0)?arr_A.unshift(data):arr_A.push(data); 
                    
                }
            
                if(data.age>=31 && data.age<=40){
                    (data.age%2===0)?arr_B.unshift(data):arr_B.push(data); 
                    
                }
                
                if(data.age>=41 && data.age<=50){
                    (data.age%2===0)?arr_C.unshift(data):arr_C.push(data); 
                
                }
            
        }
        
        else{
            (data.age%2===0)?arr_D.unshift(data):arr_D.push(data); 
            
        }
      
        obj.A=arr_A;
        obj.B=arr_B; 
        obj.C=arr_C;
        obj.D=arr_D; 
  }
  return obj;
}

console.log(vaxTrail([
    { name: 'Asif', age: 48, temperature: 98 },
    { name: 'ria', age: 47, temperature: 98 },
    { name: 'sunil', age: 21, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'suva', age: 31, temperature: 98 },
    { name: 'safia', age: 36, temperature: 98 },
    
    { name: 'fatema', age: 41, temperature: 102 },
    { name: 'afia', age: 86, temperature: 104 },

    ]));
  
