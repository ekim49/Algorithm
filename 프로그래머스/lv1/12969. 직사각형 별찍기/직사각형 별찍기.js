process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [width, height] = data.trim().split(' ').map(Number);
    const row = '*'.repeat(width);
    for (let i = 0; i < height; i++) {
        console.log(row);
    }
});