let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `*—◉ 𝙽𝚄𝙼𝙱𝙴𝚁 𝙾𝙵 𝙼𝚈 𝙲𝚁𝙴𝙰𝚃𝙾𝚁  wa.me/254707713600*
*—◉ 𝙽𝚄𝙼𝙱𝙴𝚁 𝙾𝙵 𝙼𝚈 𝙲𝚁𝙴𝙰𝚃𝙾𝚁  wa.me/254746764468*

*—◉ 𝙽𝚄𝙼𝙱𝙴𝚁 𝙾𝙵 𝙼𝚈 𝙲𝚁𝙴𝙰𝚃𝙾𝚁  wa.me/254702713600*`.trim()   
let buttonMessage= {
'document': { url: `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q',
'mediaType': 2,
'previewType': 'pdf',
'title':   '  𝖙𝖗𝖆𝖓𝖘𝖋𝖔𝖗𝖒𝖊𝖗𝖘 𝖗𝖎𝖘𝖊⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(tyraxesowner||creador|propietario)$/i
export default handler
