module.exports = {
    app: {
        px: '^',
        token: 'OTU1NTA1MzE3ODgwNDIyNTIx.G45gkq.dtsgSpl1P32JtadiT2XtMu4gm21k8mAI8Qzecc',
        playing: 'by Syafa ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
