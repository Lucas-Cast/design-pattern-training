import { Command, Strategy } from "../types"
import { LogCommandReceiver } from "./LogCommandReceiver"

export class ShowAllCommand implements Command {
  private logCommandReceiver: LogCommandReceiver

  constructor() {
    this.logCommandReceiver = LogCommandReceiver.getInstance()
  }

  execute(): void {
    this.logCommandReceiver.showAllEvents()
  }
}
