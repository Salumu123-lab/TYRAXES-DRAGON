let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    if (!text) throw "https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗]Mention whose you want to check character*"
    const mentionedUser = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
 const userChar = [
      "Sigma",
      "Generous",
      "Grumpy",
      "Hoe",
      "Jealous",
      "Good",
      "Simp",
      "Bully",
      "Patient",
      "Pervert",
      "Gay",
      "Helpful",
      "Brilliant",
      "Sexy",
      "Hot",
      "Gorgeous",
      "Cute",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q Character of @${mentionedUser.split("@")[0]}  is *${userCharacterSeletion}* 🔥💀☠`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(character)/i

export default handler 
