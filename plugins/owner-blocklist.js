let handler = async(m, { conn }) => {

await conn.fetchBlocklist().then(async data => {
let txt = `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *≡ Block List*\n\n*Total :* ${data.length}\n\n┌─⊷\n`
for (let i of data) {
txt += `🐝 @${i.split("@")[0]}\n`
}
txt += "└───────────"
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console. log(err);
throw 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] No numbers blocked*'
})
}

handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['blocklist', 'listblock']

export default handler
