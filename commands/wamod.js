const Secktor = require('../lib')
Secktor.cmd({
        pattern: "modwha",
        desc: "To check ping",
        category: "downloader",
        filename: __filename,
    },
    async(Void, citel) => {
     try {
const wamodz = request("../lib/wa_modz.js")

const url = wamodz.result.url
citel.reply(url)
} catch(error) {
citel.reply(error)
} }
);
