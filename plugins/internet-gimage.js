import { googleImage } from '@bochilteam/scraper' 
 var handler = async (m, { conn, text, usedPrefix, command }) => { 
     if (!text) throw `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] Use example ${usedPrefix}${command} Minecraft*` 
     const res = await googleImage(text) 
     let image = res.getRandom() 
     let link = image 
     conn.sendFile(m.chat, link, 'google.jpg', `*${htki} ɢᴏᴏɢʟᴇ ɪᴍᴀɢᴇ ${htka}* 
 🔎 *Result:* ${text} 
 🌎 *Source:* Google 
 `,m) 
 } 
 handler.help = ['gimage <query>', 'image <query>'] 
 handler.tags = ['internet'] 
 handler.command = /^(gimage|image)$/i 
  
 export default handler
