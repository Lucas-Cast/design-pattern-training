import { Command } from "../types"
import { LogCommandReceiver } from "./LogCommandReceiver"

export class CreateLogCommand implements Command {
  private logCommandReceiver
  constructor(private event?: string) {
    this.logCommandReceiver = LogCommandReceiver.getInstance()
  }

  public execute(): void {
    this.logCommandReceiver.log(this.event)
  }
}
