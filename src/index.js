module.exports = function check(str, bracketsConfig) {
    let strBracketsConfig = bracketsConfig.map((item) => item.join('')); //убрали подмассивы, остался один массив
    let n = strBracketsConfig.length;  
    let i = 0;     
    while (i < n) {
        if (str.includes(strBracketsConfig[i])) {         //если элемент есть в строке str
            str = str.replace(strBracketsConfig[i], ''); // удаляем его
            i = 0;
        } else {
            i++;
        }
    }   

    if (str.length === 0){
        return true
      } else {
        return false
      }
   
     
}





    /*let list = []; 

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '('||'{'||'[') {
            list.push(str[i]);
        } else if (str[i] === ')') {
            if (list.length === 0 || list[length-1] !== '('){
                return false;
            } else{
               list.pop(str[i-1]) 
            }
            
        } else if (str[i] === '}'){
            if (list.length === 0 || list[length-1] !== '{'){
              return false;
            } else{
               list.pop(str[i-1]) 
            }
        } else if (str[i] === ']'){
            if (list.length === 0 || list[length-1] !== '['){
              return false;
            } else{
               list.pop(str[i-1]) 
            }
        }
  
    }
    if (list.length > 0) {return false};
  
    
  }*/
  