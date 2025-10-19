import { CreateLogCommand } from "../command/CreateLogCommand"
import { ShowAllCommand } from "../command/ShowAllCommand"
import { Command } from "../types"

export class CommandFactory {
  static create(action: string, event?: string): Command | undefined {
    switch (action) {
      case "log":
        return new CreateLogCommand(event)

      case "show-all":
        return new ShowAllCommand()
    }
  }
}
