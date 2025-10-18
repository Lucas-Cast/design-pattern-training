import { ask, closeReadline } from "../questions"
import { CommandInvoker } from "./command/command-setup"
import { RegisterCommand } from "./command/RegisterCommand"
import { UpdatePackagesCommand } from "./command/UpdatePackagesCommand"
import { WatchAllCommand } from "./command/WatchAllCommand"
import { WatchStatusCommand } from "./command/WatchStatusCommand"

async function run() {
  const invoker = new CommandInvoker()
  const updateCommand = new UpdatePackagesCommand()
  let exit = false
  while (!exit) {
    const command = await ask("Enter command: ")
    const [action, code] = command.split(" ")

    switch (action) {
      case "register": {
        if (!code) break
        const registerCommand = new RegisterCommand(code)
        invoker.executeCommand(registerCommand)

        break
      }
      case "watch": {
        if (!code) break
        const watchStatusCommand = new WatchStatusCommand(code)
        invoker.executeCommand(watchStatusCommand)

        break
      }
      case "watch-all": {
        const watchAllCommand = new WatchAllCommand()
        invoker.executeCommand(watchAllCommand)

        break
      }
      case "exit": {
        exit = true
        closeReadline()
        break
      }
      default: {
        console.log("Unknown command.")
      }
    }
    !exit && invoker.executeCommand(updateCommand)
  }
}

run()
