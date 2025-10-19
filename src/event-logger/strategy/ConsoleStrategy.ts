import { Strategy } from "../types"

export class ConsoleStrategy implements Strategy {
  execute(events: string[]) {
    console.log(events.join(","))
  }
}
