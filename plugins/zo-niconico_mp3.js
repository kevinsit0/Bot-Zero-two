import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/niconico.mp3'
conn.sendFile(m.chat, vn, 'niconico.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /niconico|NICONICO|Niconico|niconiconi|Niconiconi|NICONICONI/ 
handler.command = new RegExp
handler.group = true
export default handler
