#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import { info } from "../src/info.js";
import { showSpinner } from "../src/spinner.js";
import { link } from "../src/utils.js";

async function main() {
    await showSpinner("Loading");
    console.log(
        boxen(
            chalk.white(`
${info.name}@${info.hostname}:~$ ${chalk.cyan('gitfetch')}

${chalk.cyan('                   .~vVeZNgQBBBQQg9Ze1v~.')}
${chalk.cyan('              \`^}%B@@@@@@@@@@@@@@@@@@@@@@8%}= \`')}
${chalk.cyan('           -Lq#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#qr-')}                 ${chalk.bold.cyan(`${info.name}@${info.hostname}`)}
${chalk.cyan('        .V0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0?.')}              ${chalk.gray('─────────────────────────────────')}
${chalk.cyan('      _l#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#l\`')}            ${chalk.yellow('OS:')}       ${chalk.white('Arch Linux x86_64')} ${chalk.cyan('🐧')}
${chalk.cyan('    \`o@@@@@@@@v^r}P0@@@@@@@@@@@@@@@@@@@@ghlr<r@@@@@@@#o\`')}          ${chalk.yellow('Uptime:')}   ${chalk.magenta(`${info.age} years`)} ${chalk.red('🚗💨')}
${chalk.cyan('   ;0@@@@@@@@0      .?szL?*;!!!!~*|]Vox_      P@@@@@@@@0.')}         ${chalk.yellow('Packages:')} ${chalk.white('6969 (pacman), 69 (pnpm)')}
${chalk.cyan('  ?@@@@@@@@@@q                                z@@@@@@@@@#?')}        ${chalk.yellow('Shell:')}    ${chalk.white('/bin/fish')} ${chalk.cyan('🐟')}
${chalk.cyan(' :@@@@@@@@@@@Q                                R@@@@@@@@@@@"')}       ${chalk.yellow('Editors:')}  ${chalk.white('nvim, vscode')} ${chalk.green('⚡')}
${chalk.cyan('_g@@@@@@@@@@2-                                \`M@@@@@@@@@@0')}       ${chalk.yellow('Theme:')}    ${chalk.white('Catppuccin')} ${chalk.magenta('✨')}
${chalk.cyan('a@@@@@@@@@@2                                    v@@@@@@@@@@;')}
${chalk.cyan('#@@@@@@@@@@_                                     @@@@@@@@@@y')}      ${chalk.bold.green('⚙️  tech stack')}
${chalk.cyan('@@@@@@@@@@@.                                     @@@@@@@@@@%')}      ${chalk.gray('─────────────────────────────────')}
${chalk.cyan('#@@@@@@@@@@r                                    :@@@@@@@@@@s')}      ${chalk.cyan('▓▓▓▓▓▓▓▓▓▓')} ${chalk.white('JavaScript/Golang/Python/C/C++')}
${chalk.cyan('W@@@@@@@@@@Q\`                                  _0@@@@@@@@@@*')}      ${chalk.blue('▓▓▓▓▓▓▓▓▓░')} ${chalk.white('React/Next.js')} ${chalk.cyan('⚛️')} 
${chalk.cyan('~#@@@@@@@@@@9!                                ,Q@@@@@@@@@@#')}       ${chalk.green('▓▓▓▓▓▓▓▓░░')} ${chalk.white('Node.js/Express')} ${chalk.green('🟢')}
${chalk.cyan(' ;@@@@@@@@@@@@6^.                          \`\\p@@@@@@@@@@@@~')}       ${chalk.red('▓▓▓▓▓▓▓░░░')} ${chalk.white('MongoDB/MySQL')} ${chalk.green('🍃')}
${chalk.cyan('  n@@@@@PlVd@@@@#6Vv~_\`              \`_!?zd#@@@@@@@@@@@@#n')}        ${chalk.magenta('▓▓▓▓▓▓░░░░')} ${chalk.white('Docker/Git')} ${chalk.blue('🐳')}
${chalk.cyan('   2#@@@#hr _Y#@@@@@@@#q\`          \`X#@@@@@@@@@@@@@@@@@#~')}
${chalk.cyan('    .d@@@@@D\` .n6#@@@#V\`             Q@@@@@@@@@@@@@@@@d.')}          ${chalk.bold.magenta('🔗 contact & links')}
${chalk.cyan('      x0@@@@0^   \`__\`-                M@@@@@@@@@@@@@@0=')}           ${chalk.gray('─────────────────────────────────')}
${chalk.cyan('        =p#@@@#%Il]]L1,              M@@@@@@@@@@@#V=')}            ${chalk.blue('  GitHub:')}    ${chalk.cyan(link('github.com/anirbandotdev', info.github))}
${chalk.cyan('          \`vR#@@@@@@@@?              M@@@@@@@@#Pv\`')}              ${chalk.red('  LinkedIn:')}  ${chalk.cyan(link('in/anirban-nath-42a63b25b', info.linkedin))}
${chalk.cyan('              "Lf8@@@@v              q@@@#Qa?:')}                  
${chalk.cyan('                  -!v|\`              _?v!\`')}
                                                                  ${chalk.dim.italic('💡 "I use arch btw !!" ')}
    `),
            {
                padding: 1,
                margin: 1,
                borderStyle: "double",
                borderColor: "cyan",
            }
        )
    );

    console.log(
        chalk.bold.cyan('\n  ⭐ Star this repo: ') +
        chalk.cyan(link('github.com/anirbandotdev/who-anirban', 'https://github.com/anirbandotdev/who-anirban')) +
        chalk.yellow(' 🚀\n')
    );

}

main().catch(err => console.error(err))