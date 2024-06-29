const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_08_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTk4LFxuICAgICAgICA0MixcbiAgICAgICAgODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNixcbiAgICAgICAgODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjRXRTaTRkMVNPeFpBc0txQ1B6a2Z6dmx2TW4wUlBjbnVvemdnT1RQWXB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2RVpTdzFpeFJ6R29tRVFCay1rU213XCIsXG4gIFwicGhvbmVJZFwiOiBcImY5NmFmNDMxLWE2YjAtNGRhYS1iMjJlLWMzZWNiNzk3ZTBkNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAxMCxcbiAgICAgIDI1NSxcbiAgICAgIDEwMCxcbiAgICAgIDIyNSxcbiAgICAgIDIyMSxcbiAgICAgIDc0LFxuICAgICAgMTk3LFxuICAgICAgNTIsXG4gICAgICA5MyxcbiAgICAgIDMxLFxuICAgICAgMTExLFxuICAgICAgNTIsXG4gICAgICAzLFxuICAgICAgNCxcbiAgICAgIDIwNSxcbiAgICAgIDE1MSxcbiAgICAgIDE5OCxcbiAgICAgIDEwNixcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDY3LFxuICAgICAgNTksXG4gICAgICAxNjMsXG4gICAgICAxMzUsXG4gICAgICAxOCxcbiAgICAgIDE0OSxcbiAgICAgIDE0MCxcbiAgICAgIDE1MyxcbiAgICAgIDE2LFxuICAgICAgNTEsXG4gICAgICAxNzksXG4gICAgICAxMDAsXG4gICAgICAyMDgsXG4gICAgICAyMzQsXG4gICAgICAyMSxcbiAgICAgIDE3OCxcbiAgICAgIDE5MCxcbiAgICAgIDEzMyxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5TDhHTFlHTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE4NzAzNTM2ODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzkxNTk5ODkzNzUxMjQ6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdjRxdXdERUovVGdiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJYVk9IVjcwVjZ3cTR5bmFQN05iemNTY1c3WitGTUJyWkpacGMvLy9uV1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNGxaU1VaOXB0WVR5a0I4TWY3YzlMMEplQmFuQ1ZFempoSG1Zc0FwZHd6NGxhREZUZk10M0l0bkVwNFlXOURTSzhFMnczS0dOVFR5cTZSQjFZRUpOQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM1NBdnJjZnEwMTBKNnRtTXNZMjdsQXVwWUdodFBPSDgzdUZGc3RLeWZQLzdwNFMwMFVQZXBwNWxKMGVDRjVKY0tGZ28rUTBseWh5dXNKVDRNb3dkakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE4NzAzNTM2ODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTY5MTY4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0zelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTN6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUFJS3M5MWlkNzUwRHEzQ3c5NTNTSGZVaGJhTEZ5ays3aVdhZlRjM25IZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDMyNTAyMjk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5NjkxNjYwOTg2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
