import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
   let user = global.db.data.users[m.sender]
   let name2 = conn.getName(m.sender)
   if (user.registered === true) throw `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] You are already registered\n\nDo you want to register again?\n\n 📌 Use this command to remove your registration* \n*${usedPrefix}unreg* <Number of series>`
   if (!Reg.test(text)) throw `⚠️ Wrong format\n\n ✳️ Command usage: *${usedPrefix + command} name.age*\n📌Example: *${usedPrefix + command}* ${ name2}.16`
   let [_, name, splitter, age] = text.match(Reg)
   if (!name) throw 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q ✳💔The name cannot be empty'
   if (!age) throw 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q ✳💔 Age cannot be empty'
   if (name.length >= 30) throw 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q ✳💚😒 The name is too long'
   age = parseInt(age)
   if (age > 100) throw 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q 👴🏻 Wow grandpa wants to play bot'
   if (age < 5) throw 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q 🚼 there is a grandpa baby hsjsj '
   user.name = name.trim()
   user.age = age
   user.regTime = + new Date
   user.registered = true
   let sn = createHash('md5').update(m.sender).digest('hex')
   m.reply(`https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q 
┌─「 *REGISTERED* 」─
❤️‍🔥 *Name:* ${name}
❤️‍🔥 *Age* : ${age} years
❤️‍🔥 *Serial number* :
${sn}
└──────────────

  *${usedPrefix}help* to see the Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'register']

export default handler
