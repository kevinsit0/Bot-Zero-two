import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `πππΎπππ½πΌ ππ πππππ ππΌππΌ ππΌπ½ππΌπ πΎππππππ\n\nπππππππ\n*${usedPrefix + command} Hola Asuna Bot*`
let res = await fetch(global.API('https://api-sv2.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
let json = await res.json()
if (json.success) m.reply(json.success)
  else throw json
}
handler.help = ['asuna']
handler.tags = ['fun']
handler.command = ['asuna', 'bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'okgoogle']
export default handler
