const axios = require('axios')
const {Config, randomeFunfacts ,cmd } = require('../lib')
const fetch = require('node-fetch');
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
cmd({pattern: "question", desc: "Random Question.", category: "fun",filename: __filename, },async(Void, citel, text , {cmdName}) => { return await citel.reply(await randomeFunfacts(cmdName)); });
//---------------------------------------------------------------------------
cmd({pattern: "truth",desc: "truth and dare(truth game.).",category: "fun",filename: __filename, },async(Void, citel, text , {cmdName}) => { return await citel.reply(await randomeFunfacts(cmdName)); });
//---------------------------------------------------------------------------
cmd({pattern: "dare",desc: "truth and dare(dare game.).",category: "fun",filename: __filename, },async(Void, citel, text , {cmdName}) => { return await citel.reply(await randomeFunfacts(cmdName)); });
//--------------------------------------------------------------------------------
cmd({pattern: "joke",desc: "Sends Joke in chat.",category: "fun",filename: __filename, },async(Void, citel, text , {cmdName}) => { return await citel.reply(await randomeFunfacts(cmdName)); });
//---------------------------------------------------------------------------
cmd({pattern: "joke2",desc: "Sends Joke in chat.",category: "fun",filename: __filename, },async(Void, citel, text , {cmdName}) => { return await citel.reply(await randomeFunfacts(cmdName)); });
//---------------------------------------------------------------------------
cmd({pattern: "fact",desc: "Sends fact in chat.",category: "fun",filename: __filename, },async(Void, citel, text , {cmdName}) => { return await citel.reply(await randomeFunfacts(cmdName)); });
//---------------------------------------------------------------------------
cmd({pattern: "quotes",desc: "Sends quotes in chat.",category: "fun",filename: __filename, },async(Void, citel, text , {cmdName}) => { return await citel.reply(await randomeFunfacts(cmdName)); });
//---------------------------------------------------------------------------
cmd({pattern: "define",desc: "urban dictionary.",category: "fun",filename: __filename,},async(Void, citel, text) =>{try{let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`);var textt = `Word: ${text}\nDefinition: ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}\nExample: ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`;return citel.reply(textt);} catch {return citel.reply(`No result for ${text}`) }});
