let factor=0;
    for(let i=1;i<=num;i++){
        if(num%i===0){
            factor++;
        }
    }
    if(factor==2){
        console.log("Yes");
    }else{
        console.log("No");
    }

//palindrome

let flage=0;
    for(let i=0;i<=N && N!=0;i++){
        if(str[i]!= str[N-i-1]){
            flage=1;
            break;
        }
    }
    if(flage==0){
        console.log("Yes");
    }else{
        console.log("No")
    }