import chalk from "chalk";
import { sleep } from "./utils.js";

export async function showSpinner(text , cycles = 12) {
    console.clear();
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

    process.stdout.write(chalk.cyan(`\n  ${text} `));
    for (let i = 0; i < cycles; i++) {
        process.stdout.write(chalk.cyan(frames[i % frames.length]));
        await sleep(80);
        process.stdout.write('\b');
    }
    console.log(chalk.green('✓\n'));
    await sleep(200);
}

