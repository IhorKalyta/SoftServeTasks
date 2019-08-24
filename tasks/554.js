function pifagor(n){
    const result = [];
    for (let i = 1; i < n; i++) {
      for (let j = 1; j < i; j++) {
        const k = Math.sqrt(i * i + j * j);
        if (k % 1 === 0) {
          result.push(`${j}, ${i}, ${k}`);
        }
      }
    }
    return result;
}
