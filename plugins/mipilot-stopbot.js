import fs from "fs"
async function handler(m, {conn, usedPrefix}) {
   if (conn.user.jid == global.conn.user.jid) return m.reply(`https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗] *You can't turn off the main Bot.*`)
   m.reply(`https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗] *You will stop being a Sub Bot in 5 seconds...*`)
   conn.fstop = true
   conn.ws.close()
}
handler.command = handler.help = ['stopbot', 'byebot'];
handler.tags = ['jadibot'];
handler.owner = true
export default handler; 
