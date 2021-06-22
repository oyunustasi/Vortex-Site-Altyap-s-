module.exports = {
    bot: {
        token: "",
        prefix: "-",
        owners: ["552154968426283024"],
        mongourl: "mongodb+srv://oyun_ustasi:yunusctn34@botlistcodeshare.xgdqp.mongodb.net/BotlistCodeShare?retryWrites=true&w=majority"
    },

    website: {
        callback: "https://vortex-botlistcodeshare.glitch.me/callback",
        secret: "rPwOeQ6UymoJkqRJihU58w3zprFa4t7v",
        clientID: "841265518458699797",
        tags: [ "Moderasyon", "Eğlence", "Minecraft","Ekonomi","Güvenlik","Level","Anime","Davet","Müzik","Karşılama", "Web Gösterge Paneli", "Reddit", "Youtube", "Twitch", "Kripto", "Logo", "Oyun", "Teknoloji", "Fortnite", "Türkçe" ]    
    },

    server: {
        id: "SERVER ID",
        roles: {
            yonetici: "ADMINISTRATOR ROLE ID",
            moderator: "MODERATOR ROLE ID",
            profile: {
                booster: "",
                sponsor: "",
                supporter: "",
                partnerRole: ""
            },
            codeshare: {
                javascript: "JS",
                html: "HTML",
                altyapilar: "substructure",
                bdfd: "BDFD",
                besdavet: "5 INVITES",
                ondavet: "10 INVITES",
                onbesdavet: "15 INVITES",
                yirmidavet: "20 INVITES"
            },
            botlist: {
                developer: "",
                certified_developer: "",
                bot: "",
                certified_bot: ""
            }
        },
        channels: {
            codelog: "CODE-LOG",
            login: "LOGIN-LOG",
            webstatus: "WEBSITE-STATUS",
            uptimelog: "UPTIME-LOG",
            botlog: "BOT-LOG",
            votes: "VOTE-LOG"
        }
    }


}