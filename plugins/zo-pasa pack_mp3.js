import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/Elmo.mp3'
conn.sendFile(m.chat, vn, 'Elmo.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Pasa pack|vendes tu nudes|pasa video hot|pasa tu pack|pasa fotos hot|vendes tu pack|Vendes tu pack|Vendes tu pack?|vendes tu pack|Pasa Pack Bot|pasa pack Bot|pasa tu pack Bot|PΓ‘same tus fotos desnudas|pΓ‘same tu pack|me pasas tu pak|me pasas tu pack|pasa pack/
handler.command = new RegExp
handler.group = true
export default handler
