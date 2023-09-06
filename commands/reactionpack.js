
const { smd,sendAnimeReaction,} = require('../lib')
//-----------------------------------------------------------------------
smd({pattern: "poke", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime poke reaction." },async(Suhail, msg ,text, {cmdName}) => { await sendAnimeReaction(msg,'poke', 'poked to' , 'poked to everyone.' ) })
//-----------------------------------------------------------------------
smd({pattern: "hug",  category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime hug reaction."  },async(Suhail, msg ,text, {cmdName}) => { await sendAnimeReaction(msg,cmdName, 'hug to' , 'hug with everyone.' ) })
//-----------------------------------------------------------------------
smd({pattern: "hold", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime hand hold reaction."},async(Suhail, msg) => { await sendAnimeReaction(msg,'handhold', 'hold hand of' , 'holded hand of everyone' ) })
//-----------------------------------------------------------------------
smd({pattern: "hifi", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime hifi reaction."  },async(Suhail, msg) => { await sendAnimeReaction(msg,'highfive', 'highfive with' , 'highfive with everyone.' ) })
    //---------------------------------------------------------------------------
smd({pattern: "bite", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime bite reaction."  },async(Suhail, msg ,text, {cmdName}) => { await sendAnimeReaction(msg,cmdName, 'bitten to' , 'bitten to everyone.' ) })
    //---------------------------------------------------------------------------
smd({pattern: "blush",category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime blush reaction." },async(Suhail, msg ,text,  {cmdName}) => {await sendAnimeReaction(msg,cmdName, 'blushed to' , 'blushed to everyone.' )})
    //---------------------------------------------------------------------------
smd({pattern: "punch",category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime punch reaction." },async(Suhail, msg ) => {  await sendAnimeReaction(msg,'kick', 'punched to' , 'punched everyone.' ) })
    //---------------------------------------------------------------------------
smd({pattern: "pat",  category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime pated reaction." },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'patted with' , 'patted with everyone.' ) })
    //---------------------------------------------------------------------------
smd({pattern: "kiss", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime kiss reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'kissed with' , 'kissed with everyone.' ) })
    //---------------------------------------------------------------------------
smd({pattern: "kill", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime kill reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'kill ' , 'kill everyone over here' ) })
    //---------------------------------------------------------------------------
smd({pattern: "happy", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime happy reaction."},async(Suhail, msg) => {  await sendAnimeReaction(msg,'dance', 'feel happy with' , 'feel happy with everyone') })
    //---------------------------------------------------------------------------
smd({pattern: "dance", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime dance reaction."},async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'dance with' , 'dance with everyone over here' ) })
    //---------------------------------------------------------------------------
smd({pattern: "yeet", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime yeet reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'yeeted to' , 'yeeted with everyone' ) })
    //---------------------------------------------------------------------------
smd({pattern: "wink", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime wink reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'winked with' , 'winked with everyone' ) })
    //---------------------------------------------------------------------------
smd({pattern: "slap", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime slap reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'slap to' , 'slap to everyone' ) })
    //---------------------------------------------------------------------------
smd({pattern: "bonk", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime bonk reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'bonked to' , 'bonked to everyone' ) })
    //---------------------------------------------------------------------------
smd({pattern: "bully", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime bully reaction."},async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'bullied to' , 'bullied to everyone' ) })
    //---------------------------------------------------------------------------
smd({pattern: "cringe",category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime cringe reaction."},async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'cringed to' , 'cringed to everyone' ) })
    //---------------------------------------------------------------------------
smd({pattern: "cuddle",category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime cuddle reaction."},async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'cuddled with' , 'cuddled with everyone' ) })
