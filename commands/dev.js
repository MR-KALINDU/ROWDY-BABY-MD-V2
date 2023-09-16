/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

//---------------------------------------------------------------------------
const Secktor = require('../lib')
Secktor.cmd({
        pattern: "dev",
        desc: "To check creator",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```Please wait```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '✪⦁⦁⦁⦁⚋⚋⚋⚋❬ *ᴅᴇᴠᴇʟᴏᴘᴇʀ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ* ❭⚋⚋⦁⦁⦁⦁✪\n║ ʀᴏᴡᴅʏ ʙᴀʙʏ ᴍᴅ 💃\n╚═════════════════◉\n╔═════◇\n║    *ᴅᴇᴠᴇʟᴏᴘᴇʀ :* ᴋᴀʟɪᴅᴜ ɢᴀᴡᴇꜱʜᴀɴᴀ 🤹‍♂️\n║    *ɴᴜᴍʙᴇʀ :* _wa.me//+94758179948_  💫\n║    *ᴄᴏᴜɴᴛʀʏ :* ꜱʀɪ ʟᴀɴᴋᴀ 🇱🇰\n║     *ᴀɢᴇ :* 15 ʏᴇᴀʀꜱ 🦚\n║    *ʀᴇʟᴇᴛɪᴏɴꜱʜɪᴘ :* ꜱɪɴɢʟᴇ 😜\n╚═════════════════◉\n\n⦁🇱🇰 ᖇOᗯᗪY ᗷᗩᗷY ᗰᗪ 🇱🇰⦁ ', edit: key});
    }
);
