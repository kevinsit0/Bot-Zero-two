import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/wtf.mp3'
conn.sendFile(m.chat, vn, 'wtf.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /WTF|wtf|Wtf|wataf|watafac|watafack|what/ 
handler.command = new RegExp
handler.group = true
export default handler
