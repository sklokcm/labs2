import chalk from 'chalk';

export function* Color() {
    const colors = [
        chalk.red,
        chalk.green,
        chalk.yellow,
        chalk.blue,
        chalk.magenta,
        chalk.cyan
    ];
    let i = 0;
    while(true){
        yield colors[i];
        i++;
        if(i === colors.length) i=0;
    }
    }