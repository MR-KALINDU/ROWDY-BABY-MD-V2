/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/SuhailTechInfo
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.8
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/
 
const {tlang, getAdmin, prefix, Config, sck,sck1, fetchJson,getBuffer, runtime,smd } = require('../lib')
let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const fs = require('fs')
const axios = require('axios')
const fetch = require("node-fetch");
 //---------------------------------------------------------------------------
cmd({
   pattern: "welcome",
   alias:["setwelcome"],
   desc: "sets welcome message in specific group.",
   category: "misc",
filename: __filename
},
async(Suhail, msg, text,{ isCreator }) => {

       let grp =msg.chat;
       if (!msg.isGroup) return msg.reply(tlang().group);
       const groupAdmins = await getAdmin(Suhail.bot, msg)	
       const isAdmins = groupAdmins.includes(msg.sender) 
       if (!isAdmins && !isCreator) return msg.reply(tlang().admin);

     let Group = await sck.findOne({ id: msg.chat });
     if (!text)  {  return await msg.reply ("*Wellcome Message :* "+Group.welcome)  }
     await await sck.updateOne({ id: msg.chat }, { welcome:text ,events:'true'})
     let metadata = await Suhail.bot.groupMetadata(msg.chat);
     var ppuser;
     let num = msg.sender;
 
     var welcome_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, metadata.participants.length);
     try {  ppuser = await Suhail.bot.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }
     return await Suhail.bot.sendMessage(msg.chat, { image: { url: ppuser }, caption: welcome_messages,mentions: [num] } )

 
}
)
//---------------------------------------------------------------------------
cmd({
   pattern: "goodbye",
   alias: ["setgoodbye","setbye"],
   desc: "sets goodbye message in specific group.",
   category: "misc",
filename: __filename
},
async(Suhail, msg, text,{ isCreator }) => {

   if (!msg.isGroup) return msg.reply(tlang().group);
   const groupAdmins = await getAdmin(Suhail.bot, msg)	
   const isAdmins = groupAdmins.includes(msg.sender) 
   if (!isAdmins && !isCreator) return msg.reply(tlang().admin);

   let Group = await sck.findOne({ id: msg.chat })
   if (!text)  {  return await msg.reply ("*_Goodbye Message Is:_* "+Group.goodbye)  }
   await sck.updateOne({ id: msg.chat }, { goodbye:text,events:'true' }) 

   let metadata = await Suhail.bot.groupMetadata(msg.chat);
   var ppuser;
   let num = msg.sender;
   var goodbye_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, metadata.participants.length);
   try {  ppuser = await Suhail.bot.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }

       return await Suhail.bot.sendMessage(msg.chat, { image: { url: ppuser }, caption: goodbye_messages, mentions: [num] })

})

//---------------------------------------------------------------------------




    //---------------------------------------------------------------------------


/*

cmd({
            pattern: "exec",
            desc: "Evaluates quoted code with given language.",
            category: "misc",
            filename: __filename
        },
        async(Suhail.bot, msg, text) => {
 if (!msg.quoted) return msg.reply("*Reply to A Code Of Statements to Execute*")
            try {
                const code = {
                    script: msg.quoted.text,
                    language: text[1],
                    versionIndex: "0",
                    stdin: text.slice(2).join(" "),
                    clientId: '694805244d4f825fc02a9d6260a54a99',
                    clientSecret: '741b8b6a57446508285bb5893f106df3e20f1226fa3858a1f2aba813799d4734'
                };
                request({
                    url: "https://api.jdoodle.com/v1/execute",
                    method: "POST",
                    json: code
                }, function(_error, _response, body) {  msg.reply("> " + text[1] + "\n\n" + "```" + body.output + "```");  });
            } catch (error) {return await msg.reply("*Error In Your Code :* "+error);  }
        }
    )
    */

function _0x4c88(_0x5087a1,_0x2e056b){var _0x1ecf03=_0x1ecf();return _0x4c88=function(_0x4c8841,_0x226013){_0x4c8841=_0x4c8841-0x82;var _0x2535e8=_0x1ecf03[_0x4c8841];return _0x2535e8;},_0x4c88(_0x5087a1,_0x2e056b);}function _0x1ecf(){var _0x1630b5=['user','readmore','<reply\x20to\x20any\x20person>','fromCharCode','quoted','https://telegra.ph/file/29a8c892a1d18fdb26028.jpg','findOne','getpp','bot','*Uhh\x20Dear,\x20Give\x20Text,\x20Eg:-\x20_.readmor\x20text1\x20readmore\x20text2_*','includes','whois','\x0a╔════◇\x0a║\x20*『Person\x27s\x20\x20Information』*\x0a║\x20\x0a║\x20*🍫Name\x20:*\x20','chat','repeat','10tUSKOw','7385160TYMbLQ','calc','length','split','16truPrL','test','image','689622VJKFww','misc','join','\x20\x20*---Profile\x20Pic\x20Is\x20Here---*\x0a','\x20=\x20','profilePictureUrl','replace','Result:\x20','5942034NqDQCq','name','*Cannot\x20divide\x20by\x20zero.*','sender','\x0a║\x20\x20\x20\x20*Keep\x20Calm\x20Dude🥳*\x20\x20\x20\x20◇\x0a╚════════════════╝\x0a','sendMessage','2eRnMVO','readmor','rmore','2349756kdBKJG','status','*Please\x20Reply\x20To\x20A\x20User*','Adds\x20*readmore*\x20in\x20given\x20text.','Calculate\x20two\x20value.','match','Get\x20Profile\x20Pic\x20For\x20Given\x20User','send','316615YulzRo','\x0a║\x20*👤Num\x20:*\x20','setAt','```Profile\x20Pic\x20Not\x20Fetched```','\x0a║\x20*🌟SetAt\x20:*\x20','fetchStatus','error','\x0a║\x20*🎐Bio\x20\x20\x20\x20:*\x20\x20','some','1722860qakxQV','slice','13467798NZUOvI','Please\x20enter\x20a\x20valid\x20mathematical\x20operation.','reply','Please\x20enter\x20a\x20mathematical\x20operation.'];_0x1ecf=function(){return _0x1630b5;};return _0x1ecf();}var _0x547f1e=_0x4c88;(function(_0x3394b1,_0x1ae31c){var _0x15e62b=_0x4c88,_0x24ad10=_0x3394b1();while(!![]){try{var _0x2640d9=-parseInt(_0x15e62b(0xb9))/0x1*(parseInt(_0x15e62b(0xa5))/0x2)+-parseInt(_0x15e62b(0xa8))/0x3+parseInt(_0x15e62b(0x94))/0x4*(parseInt(_0x15e62b(0xb0))/0x5)+-parseInt(_0x15e62b(0x97))/0x6+parseInt(_0x15e62b(0x9f))/0x7+parseInt(_0x15e62b(0x90))/0x8+parseInt(_0x15e62b(0xbb))/0x9*(parseInt(_0x15e62b(0x8f))/0xa);if(_0x2640d9===_0x1ae31c)break;else _0x24ad10['push'](_0x24ad10['shift']());}catch(_0x4f511b){_0x24ad10['push'](_0x24ad10['shift']());}}}(_0x1ecf,0xdbe40),smd({'pattern':_0x547f1e(0x87),'desc':_0x547f1e(0xae),'category':_0x547f1e(0xbf),'filename':__filename},async(_0x4ed54a,_0x28aada,_0x55e064)=>{var _0x56d748=_0x547f1e;if(!_0x28aada[_0x56d748(0x84)])return _0x28aada[_0x56d748(0xbd)](_0x56d748(0xaa));let _0x19ff7d;try{_0x19ff7d=await _0x4ed54a[_0x56d748(0x88)]['profilePictureUrl'](_0x28aada[_0x56d748(0x84)][_0x56d748(0xa2)],_0x56d748(0x96));}catch(_0x505329){return _0x28aada[_0x56d748(0xbd)](_0x56d748(0xb3));}return await _0x4ed54a[_0x56d748(0x88)][_0x56d748(0xa4)](_0x28aada[_0x56d748(0x8d)],{'image':{'url':_0x19ff7d},'caption':_0x56d748(0x9a)+Config['caption']},{'quoted':_0x28aada});}),smd({'pattern':_0x547f1e(0xc0),'alias':[_0x547f1e(0xa7),_0x547f1e(0xa6)],'desc':_0x547f1e(0xab),'category':_0x547f1e(0x98),'filename':__filename},async(_0x435888,_0x4da0e5,_0x172e2d)=>{var _0x25f1af=_0x547f1e;!_0x172e2d?_0x172e2d=_0x25f1af(0x89):_0x172e2d+='\x20',_0x172e2d[_0x25f1af(0x8a)](_0x25f1af(0xc0))?await _0x4da0e5[_0x25f1af(0xbd)](_0x172e2d[_0x25f1af(0x9d)](/readmore/,String[_0x25f1af(0x83)](0x200e)[_0x25f1af(0x8e)](0xfa1))):await _0x4da0e5['reply'](_0x172e2d['replace']('\x20',String[_0x25f1af(0x83)](0x200e)[_0x25f1af(0x8e)](0xfa1)));}),smd({'pattern':_0x547f1e(0x8b),'desc':'Get\x20replied\x20person\x20info','category':_0x547f1e(0xbf),'use':_0x547f1e(0x82),'filename':__filename},async(_0x19bc46,_0x2a3cae,_0x84ef26)=>{var _0xede479=_0x547f1e;if(!_0x2a3cae[_0xede479(0x84)])return _0x2a3cae[_0xede479(0xbd)]('Please\x20Reply\x20To\x20A\x20Person');var _0x1c84a2=await _0x19bc46[_0xede479(0x88)][_0xede479(0xb5)](_0x2a3cae[_0xede479(0x84)]['sender']),_0x34e564=_0x1c84a2[_0xede479(0xa9)],_0x249384=_0x1c84a2[_0xede479(0xb2)]['toString'](),_0x4a9a3b=_0x249384[_0xede479(0x93)]('\x20');_0x4a9a3b[_0xede479(0x92)]>0x3&&(_0x249384=_0x4a9a3b[_0xede479(0xba)](0x0,0x5)[_0xede479(0x99)]('\x20'));var _0xf56ee0=_0x2a3cae[_0xede479(0x84)]['sender'][_0xede479(0x93)]('@')[0x0];let _0x1834f6;try{_0x1834f6=await _0x19bc46[_0xede479(0x88)][_0xede479(0x9c)](_0x2a3cae[_0xede479(0x84)][_0xede479(0xa2)],_0xede479(0x96));}catch(_0x44dd0e){_0x1834f6=await _0x19bc46[_0xede479(0x88)]['profilePictureUrl'](_0x2a3cae[_0xede479(0xa2)],_0xede479(0x96))||_0xede479(0x85);}let _0x4b6182=await sck1[_0xede479(0x86)]({'id':_0x2a3cae[_0xede479(0x84)][_0xede479(0xa2)]});var _0x1173d5=_0x4b6182[_0xede479(0xa0)];return await _0x19bc46[_0xede479(0x88)][_0xede479(0xa4)](_0x2a3cae[_0xede479(0x8d)],{'image':{'url':_0x1834f6},'caption':_0xede479(0x8c)+_0x1173d5+_0xede479(0xb1)+_0xf56ee0+_0xede479(0xb7)+_0x34e564+_0xede479(0xb4)+_0x249384+_0xede479(0xa3)},{'quoted':_0x2a3cae});}),smd({'pattern':_0x547f1e(0x91),'desc':_0x547f1e(0xac),'category':_0x547f1e(0x98),'filename':__filename},async(_0x1ba9b6,_0x2e64e8,_0x50d1aa)=>{var _0xdafc52=_0x547f1e;if(!_0x50d1aa)return await _0x2e64e8[_0xdafc52(0xbd)](_0xdafc52(0xbe));_0x50d1aa=_0x50d1aa['replace'](/\s+/g,'');if(!/^(\d+([-+%*/]\d+)+)$/[_0xdafc52(0x95)](_0x50d1aa))return await _0x2e64e8['reply'](_0xdafc52(0xbc));const _0x5c5207=_0x146e80=>{return new Function('return\x20'+_0x146e80)();};try{const _0x183189=_0x5c5207(_0x50d1aa);if(_0x50d1aa[_0xdafc52(0x8a)]('/')&&_0x50d1aa[_0xdafc52(0x93)]('/')[_0xdafc52(0xb8)](_0x3e2b24=>_0x3e2b24==='0'))return await _0x2e64e8[_0xdafc52(0xaf)](_0xdafc52(0xa1));if(_0x50d1aa[_0xdafc52(0x93)](/[-+%*/]/)[_0xdafc52(0x92)]<=0x2){const [_0x5319ae,_0x4bd454,_0x51a438]=_0x50d1aa[_0xdafc52(0xad)](/\d+|[-+%*/]/g);return _0x2e64e8[_0xdafc52(0xaf)](_0x5319ae+'\x20'+_0x4bd454+'\x20'+_0x51a438+_0xdafc52(0x9b)+_0x183189);}else return await _0x2e64e8['send'](_0xdafc52(0x9e)+_0x183189);}catch(_0x107620){return await _0x2e64e8[_0xdafc52(0xb6)](_0x107620);}}));





    //---------------------------------------------------------------------------
smd({
            pattern: "wa",
            desc: "Makes wa me of quoted or mentioned user.",
            category: "user",
            filename: __filename
        },
        async(Suhail, msg, text) => {
            if(!msg.quoted && !msg.mentionedJid) return await msg.reply(`*Please Reply Or Mention A User*`);
            let users = msg.mentionedJid ? msg.mentionedJid[0].split('@')[0] : msg.quoted ? msg.quoted.sender.split('@')[0] : text.replace('@')[0]
           return await  msg.reply(`https://wa.me/${users}`);

        }
    )
    //---------------------------------------------------------------------------
smd({
            pattern: "mee",
            desc: "Makes wa me for user.",
            category: "user",
            filename: __filename
        },
        async(Suhail, msg, text) => {  let user = msg.sender.split('@')[0]  ; return await msg.reply( `https://wa.me/${user}` ); })
    //---------------------------------------------------------------------------
cmd({
            pattern: "pick",
            desc: "Pics random user from Group",
            category: "group",
            filename: __filename
        },
        async(Suhail, msg, match) => {
            if (!match) return msg.reply("*Which type of User you want?*");
            const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat)
                .catch((e) => {}) : "";
            const participants = msg.isGroup ? await groupMetadata.participants : "";
            let member = participants.map((u) => u.id);
            let me = msg.sender;
            let pick = member[Math.floor(Math.random() * member.length)];
            Suhail.bot.sendMessage(msg.chat, {
                text: `The most ${match} around us is *@${pick.split("@")[0]}*`,
                mentions: [pick],
            }, {
                quoted: msg,
            });
        }
    )
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
cmd({
            pattern: "npm",
            desc: "download mp4 from url.",
            category: "search",
            use: '<package name>',
            filename: __filename
        },
        async(Suhail, msg, text) => {
            if (!text) return msg.reply('Please give me package name.📦')
            axios.get(`https://api.npms.io/v2/search?q=${text}`).then(({ data }) => {
                let txt = data.results.map(({ package: pkg }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join('\n\n')
                msg.reply(txt)
            }).catch(e => console.log(e))
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "fliptext",
            desc: "Flips given text.",
            category: "misc",
            use: '<query>',
            filename: __filename
        },
        async(Suhail, msg, text) => {
            if (!text) return msg.reply(`Example : ${prefix}fliptext Back in black`)
            flipe = text.split('').reverse().join('')
            msg.reply(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*IGiven text :*\n${text}\n*Fliped text :*\n${flipe}`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "downmp4",
 
            alias:['mp4down','mp4fromurl'],
            desc: "download mp4 from url.",
            category: "downloader",
            use: '<url>',
            filename: __filename
        },
        async(Suhail, msg, text) => {
            if (!text) return msg.reply(`_give me Video Link ?_`);
            Suhail.bot.sendMessage(msg.chat, {
                video: {
                    url: text.split(" ")[0],
                },
                caption: "*HERE WE GO*",
                contextInfo: {
                    externalAdReply: {
                        title: tlang().title,
                        body: `${msg.pushName}`,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },
                },
            }, {
                quoted: msg,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "events",
            desc: "activates and deactivates events.\nuse buttons to toggle.",
            category: "misc",
            filename: __filename
        },
        async(Suhail, msg, text,{isCreator}) => {
            let checkgroup = await sck.findOne({ id: msg.chat })
            if (!msg.isGroup) return msg.reply(tlang().group);
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            //const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
            //const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
            
 if(isCreator){}
 else if (!isAdmins) return msg.reply(tlang().admin)
            //if (!isBotAdmins) return msg.reply(tlang().botadmin)
 
            if (checkgroup.events == "true") return msg.reply(`*Events* is enabled in this Chat \n For deActive Welcome Msg *type ${prefix}deact events*`);
            else return msg.reply(`*Events* is Disabled in this Chat \n For Active Welcome Msg *type ${prefix}act events*`);

        }
    )

    //---------------------------------------------------------------------------



cmd({
            pattern: "lydea",
            alias : ["chatbot"],
            desc: "activates and deactivates chatbot.\nuse buttons to toggle.",
            category: "misc",
            filename: __filename
        },
        async(Suhail, msg, text,{ isCreator }) => {
            if (!isCreator) return msg.reply(tlang().owner)
            const { chatbot } = require('../lib/');
            let chatbott= await chatbot.findOne({ id: 'chatbot' }) ||  await new chatbot({ id: 'chatbot', worktype: "true" }).save()
            switch (text.split(" ")[0])
            {
                case "on":
                    {
                        if (chatbott.worktype == "true") return msg.reply("*Lydea was already enabled.*")
                        await chatbot.updateOne({ id: 'chatbot' }, { worktype: "true" })
                        return await msg.reply('*Lydea Activated successfully.*')   
                    }
                    break
                case "off":
                    {
                               if (chatbott.worktype == "false") return msg.reply("*Lydea was already disabled.*")
                               await chatbot.updateOne({ id: 'chatbot' }, { worktype: "false" })
                               return await msg.reply('*Lydea deactivated successfully.*')
                    }
                    break
                default:
                    {
                       if (chatbott.worktype == "false") return await msg.reply(`*Lydea Chatbot Status : False* \n*Lydea Chatbot Disabled Yet, _To Enable Type : .lydea on_*`)
                       else return await msg.reply("*Lydea Chatbot Status : True* \n*Lydea Chatbot Enabled Yet, _To Disable Type : .lydea off_*")
                       /*
                           let buttons = [{  buttonId: `${prefix}chatbot on`,   buttonText: {   displayText: "Turn On" },  type: 1, },
                                         {   buttonId: `${prefix}chatbot off`,  buttonText: { displayText: "Turn Off" },   type: 1, }];
                                          
                           await Suhail.bot.sendButtonText(msg.chat, buttons, `Lydea Status: ${chatbott.worktype} `, Config.botname, msg);
                       */
                    }
            }


     })
    //---------------------------------------------------------------------------
cmd({
            pattern: "ebinary",
            desc: "encode binary",
            category: "misc",
            use: '<query>',
            filename: __filename
        },
        async(Suhail, msg, text,{ isCreator }) => {
            try {
                if (!text) return msg.reply(`Send text to be encoded.`);

                let textt = text || msg.quoted.text
                let eb = await eBinary(textt);
                msg.reply(eb);
            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "dbinary",
            desc: "decode binary",
            category: "misc",
            use: '<query>',
            filename: __filename
        },
        async(Suhail, msg, text,{ isCreator }) => {
            try {
                if (!text) return msg.reply(`Send text to be decoded.`);
                let eb = await dBinary(text);
                msg.reply(eb);
            } catch (e) {
                console.log(e)
            }
        }
    )

//-----------------------------------------------------------------------------------

if(Config.WORKTYPE != 'private')
{

cmd({
 pattern: "bot",
 desc: "activates and deactivates bot.\nuse buttons to toggle.",
 category: "misc",
 filename: __filename
},
async(Suhail, msg, text,{isCreator}) => {
 if (!msg.isGroup) return msg.reply(tlang().group);
 if(!isCreator) return msg.reply(tlang().owner)
 switch (text.split(" ")[0]) {
           case 'on':{
                   let checkgroup = await sck.findOne({ id: msg.chat })
                   if (!checkgroup) {
                       await new sck({ id: msg.chat, botenable: "true" }).save()
                       return msg.reply(`Successfully Enabled *${tlang().title}*`)
                   } else {
                       if (checkgroup.botenable == "true") return msg.reply("*Bot* was already enabled")
                       await sck.updateOne({ id: msg.chat }, { botenable: "true" })
                       return msg.reply(`Successfully Enabled *${tlang().title}*`)
                   }
               }

           break
          case 'off':{
                      {
                       let checkgroup = await sck.findOne({ id: msg.chat })
                       if (!checkgroup) {
                           await new sck({ id: msg.chat, botenable: "false" })
                               .save()
                           return msg.reply(`Successfully disabled *${tlang().title}*`)
                       } else {
                           if (checkgroup.botenable == "false") return msg.reply("*Bot* was already disabled")
                           await sck.updateOne({ id: msg.chat }, { botenable: "false" })
                           return msg.reply(`Successfully disabled *${tlang().title}*`)
                       }
                   }
          }
          break
          default:
          {
                  let checkgroup = await sck.findOne({ id: msg.chat })
                  let buttons = [{
                            buttonId: `${prefix}bot on`,
                            buttonText: {
                                displayText: "Turn On",
                            },
                            type: 1,
                        },
                        {
                            buttonId: `${prefix}bot off`,
                            buttonText: {
                                displayText: "Turn Off",
                            },
                            type: 1,
                        },
                    ];
                    await Suhail.bot.sendButtonText(msg.chat, buttons, `Bot Status in Group: ${checkgroup.botenable}`, Suhail.bot.user.name, msg);
          }
      }
})   
} // if Statements
    //---------------------------------------------------------------------------
/*
cmd({
            pattern: "antispam",
            desc: "Kick Spamers From Group.\nuse buttons to toggle.",
            category: "group",
            filename: __filename
        },
        async(Suhail.bot, msg, text , {isCreator}) => {
            if (!msg.isGroup) return msg.reply(tlang().group);
          let check = text ? text : '';
            let checkgroup = await sck.findOne({ id: msg.chat }) || await new sck({id : msg.chat , antispam : 'true'  }) .save();
            const groupAdmins = await getAdmin(Suhail.bot, msg)
            const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
            if (!isAdmins && !isCreator) return msg.reply(tlang().admin)     
            if (check.startsWith("on") || check.startsWith("enable") || check.startsWith("act"))
            { 
                try 
                {
                 await sck.updateOne({ id: msg.chat }, { antispam: "true" })
                  return await msg.reply("*_Antispam Enabled Successfuly in Group_*")
                } catch (error) {   return await msg.reply("*_There's an Error, Antispam Not Enable in Group_*")    }
            }
            else if (check.startsWith("off") || check.startsWith("disable") || check.startsWith("deact") ) 
            {
                try 
                {
                   await sck.updateOne({ id: msg.chat }, { antispam: "false" })
                   return await msg.reply("*_Antispam Disabled Successfuly in Group_*")
                } catch (error) {   return await msg.reply("*_There's an Error, Antispam Not Disable in Group_*")    }
            }      
if (checkgroup.antispam == "true") return msg.reply(`Antispam : kick Users Who Spamming in Group\n\nAntispam is enabled in this Group \n *_For Disabling : ${prefix}antispam off_*`);
else return msg.reply(`Antispam : kick Users Who Spamming in Groupn\n\nAntispam is Disabled in this Group \n *_For Enablling Antispam : ${prefix}antispam on_*`);
        
})
*/
    //---------------------------------------------------------------------------
    cmd({
       pattern: "antilink",
       desc: "activates and deactivates antilink.\nuse buttons to toggle.",
       category: "group",
       filename: __filename
   },
   async(Suhail, msg, text , {isCreator}) => {
       function _0x1dd1(_0x190e77,_0x3842b6){const _0x3a2918=_0x3a29();return _0x1dd1=function(_0x1dd110,_0xc0890d){_0x1dd110=_0x1dd110-0x12f;let _0x2f3ec3=_0x3a2918[_0x1dd110];return _0x2f3ec3;},_0x1dd1(_0x190e77,_0x3842b6);}const _0x537363=_0x1dd1;(function(_0x2a498c,_0xe9d7f2){const _0x20fff1=_0x1dd1,_0x275af4=_0x2a498c();while(!![]){try{const _0x1bf60a=-parseInt(_0x20fff1(0x135))/0x1+-parseInt(_0x20fff1(0x14a))/0x2*(-parseInt(_0x20fff1(0x14b))/0x3)+parseInt(_0x20fff1(0x12f))/0x4*(parseInt(_0x20fff1(0x14e))/0x5)+-parseInt(_0x20fff1(0x139))/0x6+parseInt(_0x20fff1(0x13b))/0x7+-parseInt(_0x20fff1(0x136))/0x8+-parseInt(_0x20fff1(0x13c))/0x9*(parseInt(_0x20fff1(0x148))/0xa);if(_0x1bf60a===_0xe9d7f2)break;else _0x275af4['push'](_0x275af4['shift']());}catch(_0x96c32a){_0x275af4['push'](_0x275af4['shift']());}}}(_0x3a29,0xebdc8));if(!msg['isGroup'])return msg['reply'](tlang()[_0x537363(0x141)]);const groupAdmins=await getAdmin(Suhail.bot,msg),isAdmins=msg[_0x537363(0x130)]?groupAdmins[_0x537363(0x143)](msg[_0x537363(0x131)]):![];if(!isAdmins&&!isCreator)return msg[_0x537363(0x149)](tlang()[_0x537363(0x137)]);let checkinfo=await sck['findOne']({'id':msg[_0x537363(0x142)]})||await new sck({'id':msg[_0x537363(0x142)]})[_0x537363(0x13f)](),textt=text?text[_0x537363(0x151)]()['trim']():![],action=textt?textt[_0x537363(0x13e)]('\x20')[0x0]:![];function _0x3a29(){const _0x5d7267=['3041848KwfWrd','admin','delete','3314166wTfUba','antilink\x20kick/delete/off_*','3559514diYetN','9CvvJaC','*_Antilink\x20','split','save','updateOne','group','chat','includes','send','deact','off','*_Uhh\x20Dear,\x20Please\x20Provide\x20Valid\x20Instruction_*\x0a*Eg:\x20_','1361390agAqTj','reply','26518zyirsz','237MuHrUF','\x0a\x0a*Antilink\x20Modes:*\x0a\x20\x20.antilink\x20kick\x20(Delete\x20Links\x20&\x20Kick\x20Senders)\x0a\x20\x20.antilink\x20delete\x20(Delete\x20Links\x20Only)\x0a\x20\x20.antilink\x20off\x20(Disable\x20Antilink\x20in\x20chat)\x0a\x0a\x0a','disable','126675qiyDRV','*_Anti_Link\x20Succesfully\x20set\x20to\x20kick\x20link\x20senders!_*','kick','toLowerCase','caption','Disabled','startsWith','antilink','196ZzhnRb','isGroup','sender','false','*_Anti_Link\x20Disabled\x20Succesfully!_*','*Current\x20Mode:*\x20_','762559wgiCsM'];_0x3a29=function(){return _0x5d7267;};return _0x3a29();}if(!action)return await msg[_0x537363(0x144)](_0x537363(0x13d)+(checkinfo[_0x537363(0x155)]===_0x537363(0x132)?_0x537363(0x153):'Enabled')+'\x20in\x20this\x20Group!_*\x20\x0a\x20'+(checkinfo[_0x537363(0x155)]==='false'?'':_0x537363(0x134)+checkinfo[_0x537363(0x155)]+'_')+_0x537363(0x14c)+Config[_0x537363(0x152)]);else{if(action[_0x537363(0x154)](_0x537363(0x146))||action[_0x537363(0x154)](_0x537363(0x145))||action['startsWith'](_0x537363(0x14d)))return await sck[_0x537363(0x140)]({'id':msg['chat']},{'antilink':_0x537363(0x132)}),await msg['send'](_0x537363(0x133));else{if(action[_0x537363(0x154)]('kick'))return await sck[_0x537363(0x140)]({'id':msg[_0x537363(0x142)]},{'antilink':_0x537363(0x150)}),await msg[_0x537363(0x144)](_0x537363(0x14f));else{if(action['startsWith']('delete'))return await sck['updateOne']({'id':msg['chat']},{'antilink':_0x537363(0x138)}),await msg[_0x537363(0x144)]('*_Anti_Link\x20Succesfully\x20set\x20to\x20delete\x20links\x20from\x20chat!_*');else return await msg[_0x537363(0x144)](_0x537363(0x147)+prefix+_0x537363(0x13a));}}}
     
})
    //---------------------------------------------------------------------------
