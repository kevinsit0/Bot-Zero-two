import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
db.data.users[m.sender].exp += 10
  
let vn = './media/admin-calzones.mp3'
conn.sendFile(m.chat, vn, 'admin-calzones.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /TENGO LOS CALZONES|Tengo los calzones|tengo los calzones/i 
handler.command = new RegExp
export default handler
