let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : FIKRI
║│➸ ```UMUR``` : 12thn
║│➸ ```ASAL``` : MEDAN
║│➸ ```OFFICIAL GRUP``` :
Belum Ada :v
║│➸ ```ISTAGRAM``` : http://instagram.com/12345_zeez
║│➸ ```WHATSAPP``` : http://wa.me/6281211006838
╰────────❉
`.trim(), m)
}

handler.help = ['inforozi']
handler.tags = ['main', 'utama']
handler.command = /^(infoary)$/i

handler.exp = 150

module.exports = handler
