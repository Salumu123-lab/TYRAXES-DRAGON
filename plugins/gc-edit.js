const handler = async (m, {
  conn,
  text,
  command,
  isBotAdmin,
}) => {
  if (!m.quoted) throw 'https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q *[❗𝐈𝐍𝐅𝐎❗] Reply to the message you want to edit*'; if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] No Text*'; if (!m.quoted.isBaileys) throw '*[❗𝐈𝐍𝐅𝐎❗] Messages are not sent by bots*';

  try {
    await conn.sendMessage(m.chat, {
      text: text,
      edit: m.quoted.vM.key,
    });
  } catch (e) {
    try {
      const edit = m.quoted.sender ? m.message.extendedTextMessage.contextInfo.participant : m.key.participant;
      const bang = m.quoted.id ? m.message.extendedTextMessage.contextInfo.stanzaId : m.key.id;
      await conn.sendMessage(m.chat, {
        text: text,
        edit: {
          remoteJid: m.chat,
          fromMe: false,
          id: bang,
          participant: edit,
        },
      });
    } catch (e) {
      try {
        await conn.relayMessage(m.chat, {
          protocolMessage: {
            key: m.quoted.vM.key,
            type: 14,
            editedMessage: {
              conversation: text,
            },
          },
        }, {});
      } catch (e) {
        await m.reply(eror);
      }
    }
  }
};
handler.help = ['edit text ( Reply the person )'];
handler.tags = ['main'];
handler.command = ['edit'];

export default handler;

function checkTrue(input) {
  return input === false;
}
