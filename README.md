# MC-BOT
![minecraft-icon-1](https://user-images.githubusercontent.com/89299065/209523257-c6163efb-b64c-4c2a-97b7-1975ad54220b.png)

MC BOT is a Discord bot made using Discord.js for fetching the status of a minecraft server running on a public domain

`-status` command can be used to fetch status of your minecraft server this will tell you if the server is online or not directly into your discord chat.

Use `-hello` command for a  surprise!

## How to run?
1. Make sure you have node and VScode installed.
2. Go to [Discord Developer portal](https://discord.com/developers/applications) and create application and then build a bot there and make sure to give it permissions 
3. After creating bot click on reset token then copy that token and keep at a safe place
4. Copy permission ID and Client ID of your application, then add them in this link and then open this link `https://discord.com/oauth2/authorize?client_id=[client ID]&scope=bot&permissions=[permission ID]`
5. You can run it by following these steps:
  1. Clone this repo
  2. Run `npm install`
  3. Create a .env file
  4. Add TOKEN, URL which you use to connect to minecraft server inside game and then add PORT as well
  5. run `node .`
