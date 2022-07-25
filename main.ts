player.onChat("tp", function () {
    agent.move(FORWARD, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.teleportToPlayer()
})
