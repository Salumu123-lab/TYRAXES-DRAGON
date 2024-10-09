
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
❤ONLY WANT YOUR LOVE
SUPPORT ME BY MAKING 1M FOLLOWERS ON MY CHANNEL`
let img = 'https://i.imgur.com/w3lOn7Y.jpeg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
