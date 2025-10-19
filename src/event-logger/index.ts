import { ask, closeReadline } from "../questions"
import { CreateLogCommand } from "./command/CreateLogCommand"
import { LogCommandInvoker } from "./command/Invoker"
import { LogCommandReceiver } from "./command/LogCommandReceiver"
import { ShowAllCommand } from "./command/ShowAllCommand"
import { CommandFactory } from "./factory/CommandFactory"
import { StrategyFactory } from "./factory/StrategyFactory"

async function run() {
  let exit = true
  const invoker = new LogCommandInvoker()
  while (exit) {
    const command = await ask("Enter command: ")
    const [action, event] = command.split(" ")
    if (action === "exit") {
      exit = false
      closeReadline()
      break
    }
    if (!action) continue
    const logCommand = CommandFactory.create(action, event)

    if (action == "show-all") {
      const strategyType = await ask(
        "Enter strategy (console, daily-overview, file): "
      )
      const strategy = StrategyFactory.create(strategyType)
      strategy && LogCommandReceiver.setStrategy(strategy)
    }

    logCommand && invoker.executeCommand(logCommand)
  }
}

run()
