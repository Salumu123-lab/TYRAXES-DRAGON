//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
     else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
     let user = global.db.data.users[who]
     if (!who) return m.reply(`https://github.com/Khalid-official *[❗𝐈𝐍𝐅𝐎❗]  Mention the user*\n\n📌 *Example* :\n${usedPrefix + command} @tag`)
     if (!global.prems.includes(who.split`@`[0])) throw 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗]  User is not Premium*'
     let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[ ^0-9]/g, '') + '@s.whatsapp.net'))
     global.prems.splice(index, 1)
     conn.reply(m.chat, `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗]  Premium removed \n\n@${who.split('@')[0]} You are no longer premium*`, m, { mentions: [who] })
    
}
handler.help = ['delprem @user']
handler.tags = ['owner']
handler.command = ['delprem', 'delpremium']

handler.group = true
handler.owner = true

export default handler
