import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0 
db.data.users[m.sender].exp += 10
  
let vn = './media/basado.mp3'
conn.sendFile(m.chat, vn, 'basado.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Cada|Basado|Basada|Basadisimo|BASADO|basado|basada|Que basado|Que basada|que basado/i 
handler.command = new RegExp
export default handler
