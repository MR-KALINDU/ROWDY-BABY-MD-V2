cmd({
            pattern: "image",
            alias :['img'],
            category: "search",
            desc: "Searches Image on Google",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply("Provide me a query!")
            if (!text) return reply("Hey bie please tell me for which pic you're looking");
            let name1 = text.split("|")[0]
            let name2 = text.split("|")[5] || `5`
            citel.reply(`*🛸 Sending ${name2} image(s) of ${name1} in chat 🛸*`)
            let nn = name2
            for (let i = 0; i < nn; i++) {

                let n = await gis(name1)
                images = n[Math.floor(Math.random() * n.length)].url;
                    let buttonMessage = {
                        image: {
                            url: images,
                        },
                        caption: `*♣️ _ʀᴏᴡᴅʏ ʙᴀʙʏ ɪᴍᴀɢᴇ ꜱᴇᴀʀᴄʜ_ ♣️*\n*${name1}*`,
                        headerType: 4,
                    };
                    Void.sendMessage(citel.chat, buttonMessage, {
                        quoted: citel,
                    });
            }
        }
    )
