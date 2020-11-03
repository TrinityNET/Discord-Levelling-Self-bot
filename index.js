const config = require('./config.json');
const Discord = require('discord.js');
const util = require('util');
const bot = new Discord.Client({
    disabledEvents: ['TYPING_START']
});

bot.on("ready", () => {
    var setTitle = require('console-title');
    console.log(`===============================================================\nLogged in as ${bot.user.tag}`);

    var msgArray = [
        'hi',
        '?',
        '$disconnect',
        '$help',
        '$play',
        'lol wut',
        'xd',
        'lol',
        'anyone active'
    ];
    
    var messages = 0;
    var interval = setInterval (function () {
        bot.channels.get('507790788453990401').send(msgArray[Math.floor(Math.random()*msgArray.length)]); // Get the channel ID with CTRL + Right-Click
        // bot.channels.get('channel id').send(msgArray[Math.floor(Math.random()*msgArray.length)]); // Uncomment this for multiple channel sends
        setTitle(`Messages sent: ${++messages}`);
      }, 1 * 61000); // 61000 is 61 seconds
});

process.on('uncaughtException', (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
    console.error('Uncaught Exception: ', errorMsg);
});

process.on('unhandledRejection', err => {
    console.error('Uncaught Promise Error: ', err);
});

bot.login(config.token);