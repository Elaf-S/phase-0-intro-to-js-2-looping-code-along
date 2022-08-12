
function writeCards(name,event){
    const array=[];
 for (let i=0; i<name.length; i++){
    array.push( `Thank you, ${name[i]}, for the wonderful ${event} gift!`);
 }
 return array;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");
 
function  countDown(num){
 let i=num;
 while(i>=0){
    console.log(i);
    i--;
 }
 return num;
}
