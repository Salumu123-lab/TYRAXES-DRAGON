
let ro = 3000
let handler = async (m, { conn, usedPrefix, command}) => {
    let time = global.db.data.users[m.sender].lastrob + 7200000
    if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] ⏱️Hey! Wait* *${msToTime(time - new Date())}* *to steal again*`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
     if (!who) throw `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q  *[❗𝐈𝐍𝐅𝐎❗] Tag someone to steal*`
     if (!(who in global.db.data.users)) throw `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] The user is not found in my database*`
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
    if (users.exp < rob) return m.reply(`[❗𝐈𝐍𝐅𝐎❗] 🔖 @${who.split`@`[0]} *has less than* *${ro} xp*\n*Don't steal from a mighty*":`, null, { mentions: [who] })    
   global.db.data.users[m.sender].exp += rob
   global.db.data.users[who].exp -= rob
  
    m.reply(`https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q 
  ‣ you stole *${rob} XP* a @${who.split`@`[0]}
  `, null, { mentions: [who] })
    global.db.data.users[m.sender].lastrob = new Date * 1
  }

  handler.help = ['rob']
  handler.tags = ['econ']
  handler.command = ['robar', 'rob']
  
  export default handler
  
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return hours + " Hora(s) " + minutes + " Minuto(s)"
  }
  
