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
global.devs = "15489945301";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "15489945301";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
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

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pxQ0QvSm1SbXROT2FYT3FFTjJORWkyUktHREJuZ1MzQ2owVWxhRDIyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUtxU3h1Qk9UWGhCQlBsMFRDUkU2OUpGV21KTEJtZTEzYitjdDRWNTBIND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTEtxb1YvT0FtSkx2aGFQOW1RM2VMSFVpNjhkMnhTMnBndFB2d1Rha0d3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaekdTMVpSTlRLWkkydGJjYjVIc04rV3R1bkhQYnorbkZtMzdmQmFpc25FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGQjFITCt1M3NTWjlqdzV0ZHpRTHkrMnZDTkRuWTJveUpvK2gwaERiMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE4QnI1OU8xcGRzOHFsUnhqK0FvRk1tRGt4RzJwalZobm54U0p5L1JVa0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkhYaWlXV0NGakxCaDdzVDhvTWY0RXMyVG83MkxNVmh2RzVrcFhnSFZFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVI1SGw1UWJtSmdKUDFiNzhHUXByenlkclcyc2VYRlpoZnBST3Z2dG1Ccz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFXbnJhOFJTQktWVkpqRVhFa21abG5xbXF6UnZQZnUvWDJzM2JEN29xNWZSMUw1WmYwRndEQ2VTN1lOdHplTUVGYzdVRkVBWXE3MVBYUGQxQ2NOd2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiJhV05ad2JUQ0pTNUE2eVB1NEcwbGREUGhQQkVDYVFMd2xrQUQxTkFjTEhJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE1NDg5OTQ1MzAxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkExOTIwMDlGNUE5NDExM0VCMDI1QjRFODEwNzIzNjA1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwOTQ1Mzd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE1NDg5OTQ1MzAxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRBNzAzOTlERkJEMEU2Q0FFNjRFNTlEOTA5NDIwREE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwOTQ1Mzd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE1NDg5OTQ1MzAxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgyNDFFOTc2QkVBM0QyQjM1NEVEMTZGMjJCNzgyRkIxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwOTQ1Mzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE1NDg5OTQ1MzAxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZBQTA2RTRFNzJBMDQxMUEzRDQ4REJGMzVDMjJCN0FEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwOTQ1Mzl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InNfYjJ6WXhkUV8tZDMxa0NYUEZMVmciLCJwaG9uZUlkIjoiMWNkMzQ1YTEtNmVkNC00NDRhLWI5OTYtOGY0NmRmMzY1NTA4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJaGRldEFJL0Z6elZMakIwTTJUajBaOW9Jdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhU2dwUW85WnhIWlNlb1lZdHVNS1M4UlNmL2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjNFUTgzRjEiLCJtZSI6eyJpZCI6IjE1NDg5OTQ1MzAxOjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkxvcmQgRGVhdGgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pQc21hRURFTHVubExVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRDYkl4Q1B1aXB1S2x5TEk0amRnZVFFMDkrRW9udnBmUVYrZDg1VFg1Q289IiwiYWNjb3VudFNpZ25hdHVyZSI6InJ0TWVUNGZPaVM4emVrMXJWWFNyTjVjWW5mc2szU3pDQ0orQ0NlUXdNM0dJcHIyUU0vT3lnaWJ1WWNKNlhpeWk0bTI0ZjBIMW15TGthcUdjM29Bc0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJneXBHeUltaDllQnZqNy9iVnkwRXlVVTRGL1JFZkVOeEJPWHZuVFIrZml3VTVXaG5yTVNyeGNFemZqVUpuWlBVL3ZvckN6Rm1yTGFWUFp4NlFYblpqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE1NDg5OTQ1MzAxOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVBbXlNUWo3b3FiaXBjaXlPSTNZSGtCTlBmaEtKNzZYMEZmbmZPVTErUXEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIwOTQ1MzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWR6In0="
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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
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
