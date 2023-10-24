 cmd({

            pattern: "testsong",

            desc: "song dl",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {    

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

            if (!text) return     

            

const tsong = await fetchJson(`https://legendarmy-api.onrender.com/api/dowloader/yt?url=${anu.url}&apikey=db16e3b7`)

const videolink = tsong.download

            citel.reply (`🎵 ━━━━━━━━━━ *𝗔𝗨𝗗𝗜𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 🎵\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n🖇️ *Url:* ${anu.url}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}`);

            return Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                mimetype: "video/mp4",

                

            }, {

                quoted: citel,

            });

        }

    )
