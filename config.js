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
global.owner = process.env.OWNER_NUMBER || "";
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
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdQemxsTDdRY1Q5OUlsZm5ucXh5MHdrRzBCZDM4OTB3ZFZlSGdIZFdsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEE2eUErYURZMWd3VXBEQnoxZ3l4UHAxVmY0SlBNOVgzM2lxa2R6VkRscz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUDRsOUxLT2tVWTZxVTJGMXJzcUVDR1RxV003ak9mdEt5YkI4L3Z3Tm1zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxL3lNRGhXTlN4WmNRQzFNNGVTaCtYRC9NT0lvWnRwVDBSQ1BQU0xvcldJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCaXpzeDBOdGlxMFFjZ3hFTU9WazM0Z3JtSnZLVi8wV1N6aU90T2gzbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRVSUxLRnc0Lzl4OXVUenc1L1dpT2I5cHVkTE9ublZJVzk4aVRlL2Rqems9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVnZm43WUQ3ZXJjSUxvd3hMcnJXcjZpUEhSZ0dQa0N5bXNLWXN6dHJHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUNXUVZKT3ZleDl3UUtqMW92QmZKVEJpZjFtVXNqMmp5aHJqOVpHQTcxZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdDK0xCbGMrSVBDZlB2MXE2S0VjVFRlZVhURmZMR0V3UzJHd1lDT0phUysyUlRVSGp5UlV4aFB2MVdiNG5rZUl2dWFMVWo3SnRveExZZ1ZLRStBSWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6Iml5UzVRTVl5dTNQWTZoYWpRUVBEK21NcHVKNXhIekNoN3FjSXRBOE9NMjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRvZElQelBYVE1xd2ttZDNLUDloU1EiLCJwaG9uZUlkIjoiYzQ4OWUwYzUtMjU0Ny00NDRiLTlhYjMtN2E3Zjg3YWNkN2NlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpZMzY0clRtV084azJ5NStRZkpxUkJPV0ZkVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRWNYa1pBUUdhNVlJQ0dVRDBscUFTNTloTFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0cyQ1dYOTciLCJtZSI6eyJpZCI6IjIzNDgwNjk5MjIxNTI6MTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08vcmpPY0JFSW1LNGJZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlhclpLMTJCeFJUckVwRFJKK3FxbXE5ZkF3VlN5d2hURWwzRmhqL2lOV0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9zeERqd1A3VTQ0MTBDRWlBSTZQaVpVWmUyaGJOeEprcnNBa3dSL2hldDlNSE8wZ1AxalVnNFhkU05QQ3FNSUZBWjMyZWFDVWNKMFJyMENLdGJUeUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKVTZnOFlNMzV0VjdvMkx4NU1OQU5mL0dwQUswaWtsUE1FamFBd0RQWEFnUEI1OEU0N1dzU241cThvZzlyU1hzSGRvck41V2FkWG1Iem4wMnIrSnJpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwNjk5MjIxNTI6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY21xMlN0ZGdjVVU2eEtRMFNmcXFwcXZYd01GVXNzSVV4SmR4WVkvNGpWZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTQ0OTQ5NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHMTkifQ==
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
