const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const Sirasa = require('sirasa-news');
var api = new Sirasa()

cmd({
    pattern: 'sirasa',
    alias: ['sirasanews','news2'],
    desc: 'sirasa news.',
    category: 'news',
    react: "🗞️",
    use: '<wbi>',
  },
        async(Void, citel, text) => {

       try { const latst = await api.latest_id();
            const nws = latst.results.news_id
            let nn = text || nws
            const ress = await api.news(nn);
            const res = ress.results;

            const txt2 = await Void.sendMessage(citel.chat, {image: {url: res.COVER}, caption: `\n*┏━[ _💠 ʀᴏᴡᴅʏ-ʙᴀʙʏ-ᴍᴅ 💠_ ]─*\n\n*┣━( _🧾 ᴇꜱᴀɴᴀ ɴᴇᴡꜱ 🧾_ )* \n\n*┃⿻* *🥏 ᴛɪᴛʟᴇ :* ${res.TITLE}\n\n*┃⿻* *📅 ᴅᴀᴛᴇ :* ${res.PUBLISHED}\n\n*┃⿻* *🔗 ᴜʀʟ :* ${res.URL}\n\n*┃⿻* *🗞️ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${res.DESCRIPTION}\n\n*┗━━━━━━━━━━━━━━◆*\n\n🍀 ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ-ᴋᴀʟɪɴᴅᴜ 🍀\n`}, { quoted: citel });

                await Void.sendMessage(citel.chat, { react: {
        text: "📰",
        key: txt2.key,
            } } );

    } catch (e) {
    console.log(e)
    citel.reply("❗ *" + e + "*")
  }
})
