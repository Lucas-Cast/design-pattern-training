import { Command } from "../types"

export class LogCommandInvoker {
  private history: string[] = []

  executeCommand(command: Command): void {
    command.execute()
    this.history.push(command.constructor.name)
  }
}
