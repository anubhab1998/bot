const dbd = require('dbd.js');

const bot = new dbd.Bot({
	token: `NzgyODUxMDE2NjM0NDAwNzY5.X8SM0w.AqIkLsJQK1NiCudd4bpM7glWzew`,
	prefix: '$getServerVar[prefix]'
});

bot.onMessage();
//commands

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
code: command.code
})
} 
}

//Dev cmds

bot.readyCommand({
channel: "785227253700100096",
code: `I was restarted and I am now back online. This is most likely due to a new update or a crash.<@765917032281276426>`
})

//No prefix Command

bot.command({
name: "<@782851016634400769>",
code: `$author[$username[782851016634400769];$userAvatar[782851016634400769]]
$thumbnail[$userAvatar[782851016634400769]]
$color[ff0000]
$addField[SUPPORT SERVER LINK;[Support Server\\]($getServerInvite[777177349887361064])]
$addField[BOT INVITE LINK;[Invite Me\\](https://discord.com/oauth2/authorize?client_id=782851016634400769&scope=bot&permissions=2146958847)]
$addField[FOR HELP;\`$getServerVar[prefix]help\`]
$addField[BOT'S SERVER PREFIX;\`$getServerVar[prefix]\`]
$addField[BOT'S GLOBAL PREFIX;\`$getVar[prefix]\`]
$footer[Bot developed by $username[765917032281276426]#$discriminator[765917032281276426];$userAvatar[765917032281276426]]
$addTimestamp`,
nonPrefixed: true
})

//status

bot.status({
	text: 'This is the beta version',
	type: 'PLAYING',
	time: 12
});

bot.status({
	text: 'High quality music',
	type: 'STREAMING',
	time: 12
}); 

bot.status({
	text: 'Developed by ANUBHAB',
	type: 'LISTENING',
	time: 12
});

bot.status({
  text: '!help | $pingms ping',
  type: 'LISTENING',
  time: 12
});


//variables

bot.variables({
	prefix: '!',
	Name2: ''
});


