let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗] The welcome message is configured*')
} else throw `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗] ENTER THE WELCOME MESSAGE YOU WANT TO ADD, 𝚄𝚂𝙴:*\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
