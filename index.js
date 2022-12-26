
const config =  require('dotenv')
config.config()
const Discord= require('discord.js')
const client = new Discord.Client({ intents: ['Guilds','GuildMessages','MessageContent'] })
const prefix = "-"
const ping= require('minecraft-server-util')


const options = {
    timeout: 1000 * 1, // timeout in milliseconds
    enableSRV: true // SRV record lookup
};

client.once('ready',()=>console.log('ready to go'))

client.login(process.env.TOKEN)

client.on('messageCreate', async (message)=>{
    if(!message.content.startsWith(prefix)||message.author.bot) return 

    console.log("message sent by ",message.author);

    const args= message.content.slice(prefix.length).split(/ +/)
    const command= args.shift().toLowerCase()
    if (command==="hello") {
        message.channel.send(`https://tenor.com/view/minecraft-creeper-whipping-hair-video-games-gangnam-style-gif-18649087`)
    }

    if(command==='status'){
        ping.status(process.env.URL,Number(process.env.PORT),options).then(res=>message.channel.send(`MC server version = ${res.version.name}, number of players online = ${res.players.online} and latency = ${res.roundTripLatency}`)).catch(err=>message.channel.send(`Sorry, couldn't connect to the server. Here's the error I got: ${err} `))
    }

})