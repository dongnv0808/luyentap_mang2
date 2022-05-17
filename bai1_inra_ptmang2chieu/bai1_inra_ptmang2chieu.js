let a = [
    [11, 22, 2, 24],
    [6, 11, 7, 4],
    [7, 0, 7, 26],
    [5, 4, 38, 1]
];

for(i = 0; i < a.length; i++){
    document.write(`row${[i]}<br>`)
    for(j = 0; j < a.length; j++){
        document.write(` ${a[i][j]}<br>`)
    }
}