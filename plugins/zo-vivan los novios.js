import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/vivan.mp3'
conn.sendFile(m.chat, vn, 'vivan.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /vivan!!|vivan los novios|vivanlosnovios/i
handler.command = new RegExp

handler.fail = null
handler.group = true
export default handler
