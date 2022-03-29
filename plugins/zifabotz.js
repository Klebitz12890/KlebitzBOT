let handler = async (m, { conn }) => {
let caption = `WHAT DO YOU WANT!!?!!?`

conn.sendButton( m.chat, caption, `©️ KlebitzBOT`, `>>zifabotz<<`, `.menu`, m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
