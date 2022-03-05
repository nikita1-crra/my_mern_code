const add =function(a,b){
    console.log(a+b);
};

 ans1 =add(23,32);
 console.log(ans1);

 function addv2(a,b){
    return a+b;
}

ans= addv2(324,54);

console.log(ans);


const checkprime = (n) => {
  var msg="this should not be visible";
    isPrime=true;
    for(let i=2;i<n;i++){
        if(n%i==0){
            isPrime=false;

            console.log('not prime');
            break;
        }
    }
     if (isPrime){
         console.log("prime");
     }
    else{
            console.log(' not prime');
        }
    
}

checkprime(17);

// console.log(msg);
