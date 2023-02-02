#!/usr/bin/env node
/* SHEBANG */
/* Always add a shebang to write a command line script for somebody else to use  */


// importing dependencies
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {

    const rainbowTitle = chalkAnimation.rainbow(
        'Who Wants To Be A Internet Millionaire? \n'
    );

    await sleep();

    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue('HOW TO PLAY?')}
    I am a process on your computer.
    Answer 11 easy Questions to get $1,000,000 (um...in points)
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

    `);
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
        process.exit(1);
    }
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;
}

function winner() {
    console.clear();
    const msg = `Congrats, ${playerName}! \n $ 1 , 0 0 0 , 0 0 0`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });

    process.exit(0);
}


async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: `Which of these best describes 'The Internet'? \n`,
        choices: [
            'A series of tubes',
            'A Global network of computers',
            `It doesn't weigh anything`,
            'Cables connecting countries',
        ],
    });

    return handleAnswer(answers.question_1 == 'A Global network of computers');
}

async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'Which of these best describes the World Wide Web \n',
        choices: [
            'Providers like Google, Bing or Yahoo',
            'Interlinked HTML documents',
            'Software like Chrome, Firefox or Internet Explorer',
            'A global network of computers',
        ],
    });

    return handleAnswer(answers.question_2 == 'Interlinked HTML documents');
}

async function question3() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'A Web Browser is \n',
        choices: [
            'A program to provide access to The Internet',
            'A program to search for HTML documents',
            'A program to fetch and render HTML documents',
            'A program to access Google',
        ],
    });

    return handleAnswer(answers.question_3 == 'A program to fetch and render HTML documents');
}

async function question4() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'A computer communicates on the Internet through  \n',
        choices: [
            'IP',
            'TCP/IP',
            'HTTPS',
            'Web Browser',
        ],
    });

    return handleAnswer(answers.question_4 == 'TCP/IP');
}

async function question5() {
    const answers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'The concept of Internet was originated in  \n',
        choices: [
            '1970',
            '1989',
            '1981',
            '1969',
        ],
    });

    return handleAnswer(answers.question_5 == '1969');
}

async function question6() {
    const answers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: `What does the HTTP response code '500' infer \n`,
        choices: [
            'ok — everything is fine!',
            'address changed permanently',
            'moved temporarily elsewhere',
            ' I have a bad feeling about this',
        ],
    });

    return handleAnswer(answers.question_6 == 'ok — everything is fine!');
}

async function question7() {
    const answers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: 'The browser generates an in-memory DOM tree from the parsed HTML, generates what for the parsed CSS? \n',
        choices: [
            'nothing',
            'an in-memory CSSOM structure',
            'a separate DOM for CSS',
            'generates a style doc for CSS',
        ],
    });

    return handleAnswer(answers.question_7 == 'an in-memory CSSOM structure');
}

async function question8() {
    const answers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'An identifier that sends and receives information across the Internet is called \n',
        choices: [
            'IP address',
            'www',
            'Network',
            'URL',
        ],
    });

    return handleAnswer(answers.question_8 == 'IP address');
}

async function question9() {
    const answers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: 'JavaScript was created in 10 days then released on \n',
        choices: [
            'May 23rd, 1995',
            'Nov 24th, 1995',
            'Dec 4th, 1995',
            'Dec 17, 1996',
        ],
    });

    return handleAnswer(answers.question_9 == 'Dec 4th, 1995');
}

async function question10() {
    const answers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: 'The port number for HTTP & HTTPS are respectively \n',
        choices: [
            '91, 10',
            '80, 443',
            '80, 81',
            '443, 11',
        ],
    });

    return handleAnswer(answers.question_10 == '80, 443');
}

console.clear();
await welcome()
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await question6();
await question7();
await question8();
await question9();
await question10();
winner();
