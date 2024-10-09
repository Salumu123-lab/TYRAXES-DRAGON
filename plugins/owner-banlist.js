//import db from '../lib/database.js'

let handler = async(m, { conn, usedPrefix }) => {
     let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
     let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    
     m.reply(`https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q 
     [❗𝐈𝐍𝐅𝐎❗] 
≡ *USERS BANNED*

📢 Total : *${users.length}*

${users ? '\n' + users.map(([jid], i) => `
${i + 1}. ${conn.getName(jid) == undefined ? 'Unknown' : conn.getName(jid)}
📢 ${jid}
`.trim()).join('\n') : ''}
`.trim())
}
handler.help = ['listban']
handler.tags = ['owner']
handler.command = ['banlist', 'listban']

export default handler
