const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] ENTER A REPORT*\n\n*EXAMPLE:*\n*${usedPrefix + command} the command ${usedPrefix}bot is not playing music*`;
  if (text.length < 10) throw `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] THE REPORT MUST BE AT LEAST 10 CHARACTERS!*`;
  if (text.length > 1000) throw `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] THE REPORT MUST BE A MAXIMUM OF 1000 CHARACTERS!*`;
  const teks = `https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *❒═════[𝐑𝐄𝐏𝐎𝐑𝐓]═════❒*\n*┬*\n*├❧ NUMBER:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ MESSAGE:* ${text}\n*┴*`;
  conn.reply('254702713600@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('254746764468@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[ 🔥 ] REPORT SUCCESSFULLY SENT TO THE CREATOR OF THE BOT, YOUR REPORT WILL BE ATTENDED AS SOON AS POSSIBLE, IF IT IS FALSE OR JOKE IT WILL ONLY BE IGNORED*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;
