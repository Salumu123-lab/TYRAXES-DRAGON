import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] uhm.. where is the text?\n\nusage:\n${usedPrefix + command} <teks>\n\nexample:\n${usedPrefix + command} plugins/melcanz.js`
    if (!m.quoted.text) throw `balas pesan nya!`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗]  stored in* ${path}`)
}
handler.help = ['sf'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = true
export default handler
