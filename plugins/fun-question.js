let handler = async (m, { command, text }) => m.reply(`https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q 
*⁉️ 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡𝗦 ⁉️*
  
*Questions:* ${text}
*Response:* [❗𝐈𝐍𝐅𝐎❗] ${['Yes', 'Maybe yes', 'Possibly', 'Probably not', 'No', 'Impossible', 'I dont know', 'can never be'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^question|preguntas|apakah$/i
export default handler
