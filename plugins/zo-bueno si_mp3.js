import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/bueno si.mp3'
conn.sendFile(m.chat, vn, 'bueno si.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Bueno si|bueno si|bueno sΓ­|Bueno sΓ­/ 
handler.command = new RegExp
handler.group = true
export default handler
