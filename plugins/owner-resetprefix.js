const handler = async (m, {conn, text}) => {
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
  await m.reply(`https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[📢] Il original prefixes has been reset.*`);
};
handler.help = ['resetprefix'];
handler.tags = ['owner'];
handler.customPrefix = /resetprefix/i
handler.command = new RegExp
export default handler;
