import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `ππππΌ ππππππππππΏπ`
  
let vn = './media/Me anda buscando anonymous.mp3'
conn.sendFile(m.chat, vn, 'Me anda buscando anonymous.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Me anda buscando anonymous|me anda buscando anonymous|Me estΓ‘ buscando anonymous|me estΓ‘ buscando anonymous|Me estΓ‘ buscando anonimo|Me esta buscando anonimo|anonimus|anΓ³nimo/i
handler.command = new RegExp
handler.group = true
export default handler
