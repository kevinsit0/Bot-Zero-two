import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `πππΎπππ½πΌ ππ ππππ½ππ ππΌππΌ ππ πππππ`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) { 
if (text.length < 25) throw `ππ ππππππ, ππ ππππ½ππ ππ πΏππ½π πΏπ πππ ππΌπ πΏπ 25 πΎπΌππΌπΎπππππ`  
}}
handler.help = ['setname <text>']
handler.tags = ['group','admin']
handler.command = /^(setname|newnombre)$/i
handler.group = true
handler.admin = true
export default handler
