//import Connection from '../lib/connection.js'
import { randomBytes } from 'crypto'

let handler = async(m, { conn, text }) => {
   let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
   let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
   let teks = text ? text : cc.text
   conn.reply(m.chat, `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗]  Transmission made* *Total:* ${chats.length} chats`, m)
   for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast|tx/i.test(teks) ? teks : `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *🐝BROADCAST ┃TYRAXES*\n_____________________\n ${teks} ` ), true).catch(_ => _)
   m.reply('*[❗𝐈𝐍𝐅𝐎❗]  Broadcast to all chats 💌*:)')
}
handler.help = ['tx']
handler.tags = ['owner']
handler.command = /^(broadcast|bc|tx)$/i
handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
