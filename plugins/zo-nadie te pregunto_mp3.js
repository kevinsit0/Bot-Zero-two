import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/nadie te pregunto.mp3'
conn.sendFile(m.chat, vn, 'nadie te pregunto.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /nadie te pregunto|Nadie te pregunto|Nadie te preguntΓ³|nadie te preguntΓ³/ 
handler.command = new RegExp
handler.group = true
export default handler
