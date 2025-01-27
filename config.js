//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348168185773";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0l2K3JXWERwK3dZQ3J1bXJmSFZGUWRNUTFwUVhKVG1ZdzJPSVZwNXBGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmwwYzVGejFjU095ZzZYRTloTkMxaG16aVhyK3FzU1pqZEtlcnhxVVRrZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlR3VocW8xUHF1YnFGbjVkSlZ1cERlcER0RHlGQ2NDOVppQzFSTlAyZUVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJad0lTYVpZQ2ptQmZsYUlScWJWVUR0ZlROQlVyaEM0ZW5pSHFPSlpOS1RnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBWkhmNlRZeVMvR0kwUlk1VlYvTWthZTNVSlFyRkZvL3o3b1hGbS9mbXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis5ZnpEZkdpS0pNUWdLS0h2L290ejFvb1ljakJGa3dsMTBmTlZjNkN2Vnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUxLeC8xdTlvV3I4a2luTVowZWxRemsvSnh5R2VqUTQ5UW5VRlFGWXJtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0plMjNaNHdsNy82Y0szUGVxcWtLUWU5V3F2QWRkblQwKzZFRXVrMHFqVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdVUnpvWnVOVVlVNEJwM3ZvWFFiUG5tT093cjB4ZExSR2hIRW5hR3l1Q1NxWU5Ic2NtTG9yR2tTaGQwY3RMQ0NSVXY1NDg4TENDVTlNeW96SzMyVWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYyLCJhZHZTZWNyZXRLZXkiOiJNWTdUL0NVK0puZzdWVUk2Qlh3MWJNZzJHbGZ3d3BCYlJzdlNicTFPbHJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxNjgxODU3NzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FFQTJDQTZDRTM2ODMyNzYzMDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczODAxNDQ5MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicElfdFhuay1RWktEbWVTbHhWR05FUSIsInBob25lSWQiOiIzZGM3OTg1NC0xYjgwLTQ1MjAtODkzMi1hMTNlNGZiZmMwM2UiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnN1RVVNejhnbExOaWcxcksrRExIZG9FTUVzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo0VFArYjhJTlFnYXk1czFqUjZEeTVCdHQzaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0M1JSSFBXOSIsIm1lIjp7ImlkIjoiMjM0ODE2ODE4NTc3MzoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkV2ZXJncmVlbllUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLSDF2ZE1HRUlyKzM3d0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaSjdyZWJZRUQ3R29sVUYyeW1wMHdjS1NsdEkzcjBBUFI2SzNsaFpSa213PSIsImFjY291bnRTaWduYXR1cmUiOiJIZkpoSlNhdjNyb0FNODZyRlZGeGN0dURST2RaQmtJRkpCOStHcElyWEtCRFJ3dThwN2dGUmpnMUREQ0pLc0RzV2Z0QmpkQ0hHSE9CUkZLc0VZdStnQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYThadkdnMFI1SmJSeUZQU3I3R2RDUmIySFh5TEcxTFdvcDJ5VnFhTGNDV211eVgyUWx6REJUR2pUSFI2TGxiOWQ5QVk1ZWE5c3Z5ekQzNS9tZnhialE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTY4MTg1NzczOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1NlNjNtMkJBK3hxSlZCZHNwcWRNSENrcGJTTjY5QUQwZWl0NVlXVVpKcyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4MDE0NDg4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5CNiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "EvergreenYT",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
