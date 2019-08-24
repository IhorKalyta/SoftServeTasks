function f178v(n){
    let count = 0;
    for(let i = 2; i*i <= n; i+=2){
        count++;
    }
    return count;
}
