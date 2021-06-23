const Discord = require("discord.js");
const client = new Discord.Client();
const bots = require("../database/models/botlist/bots.js");
module.exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send("Error: Lütfen bot id yaz.");
  let b = await bots.findOne({
    botID: args[0]
  });
  if (!b) return message.channel.send("Invalid bot id.");
  let website = b.website ? " | [Website](" + b.website + ")" : "";
  let github = b.github ? " | [Github](" + b.github + ")" : "";
  let discord = b.support ? " | [Destek Sunucusu](" + b.support + ")" : "";
  let coowner;
  if (!b.coowners.length <= 0) {
    coowner = b.coowners.map(a => "<@" + a + ">").join("\n");
  } else {
    coowner = "";
  }
  const embed = new Discord.MessageEmbed()
    .setThumbnail(b.avatar)
    .setAuthor(b.username + "#" + b.discrim, b.avatar)
    .setDescription(
      "**[Vote for the bot named " +
        b.username +
        "#" +
        b.discrim +
        " isimli bota oy ver.](https://vortex-botlistcodeshare.glitch.me/bot/" +
        b.botID +
        "/vote)**"
    )
    .addField("ID", b.botID, true)
    .addField("Kullanıcı Adı", b.username, true)
    .addField("Etiket", b.discrim, true)
    .addField("Oylar", b.votes, true)
    .addField("Sertifika", b.certificate, true)
    .addField("Kısa Açıklama", b.shortDesc, true)
    .setColor("#7289da")
    .addField("Sunucu Sayısı", `${b.serverCount || "N/A"}`, true)
    .addField(
      "Sahipler",
      `<@${b.ownerID}>\n${coowner.replace("<@>", "")}`,
      true
    )
    .addField(
      "Linkler",
      `[Invite](https://discord.com/oauth2/authorize?client_id=${b.botID}&scope=bot&permissions=8)${website}${discord}${github}`,
      true
    );
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "bot-info",
  description: "",
  usage: ""
};
