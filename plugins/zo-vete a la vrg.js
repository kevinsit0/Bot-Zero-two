import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/vete a la verga.mp3'
conn.sendFile(m.chat, vn, 'vete a la verga.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /vetealavrg|vete a la vrg|vete a la verga/i
handler.command = new RegExp
handler.fail = null
handler.group = true
export default handler
