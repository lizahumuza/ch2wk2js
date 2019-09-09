str = "name";
function countvowels (str) {
var repvals= [];
var reps=0;
var vowels = [];
var val = "";
var arr=[];

 for(i=0;i<str.length;i++){
     if(str[i] =='a'|| str[i]=='e'||str[i]=='o'||str[i]=='i'||str[i]=='u'){   
      vowels.push(str[i]); 
    }
    if(val.includes(str[i])&& !(repvals.includes(str[i]))){
        reps ++;
        repvals.push(str[i]);
    }
    val += str[i];
    arr=repvals.concat(reps);
}
console.log(arr);
}
countvowels("matttheeeeeeew");

