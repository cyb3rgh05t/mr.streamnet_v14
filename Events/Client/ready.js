const {
    loadCommands
} = require("../../Handlers/commandHandler");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("The Client is now ready.")
        console.log(`Client logged in as ${client.user.username}`);
        client.user.setActivity(`with ${client.guilds.cache.size} guilds`);

        loadCommands(client);
    }
}