let handler = async (m, { conn, args }) => {
    await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
    m.reply('https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] Success changing The description of the group*')
    }
    handler.help = ['Setdesc <text>']
    handler.tags = ['group']
    handler.command = /^setdesk|setdesc$/i
    handler.group = true
    handler.admin = true
    handler.botAdmin = true
    export default handler
