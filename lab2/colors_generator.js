export function* Color() {
    const colors = [
        "\x1b[31m", // red
        "\x1b[32m", // green
        "\x1b[33m", // yellow
        "\x1b[34m", // blue
        "\x1b[35m", // magenta
        "\x1b[36m"  // cyan
    ];
    let i = 0;
    while(true){
        yield colors[i];
        i++;
        if(i === colors.length) i=0;
    }
    }