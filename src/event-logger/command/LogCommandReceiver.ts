import { Strategy } from "../types"

export class LogCommandReceiver {
  private static instance: LogCommandReceiver
  private static strategy: Strategy
  private events: string[] = []

  private constructor() {}

  static getInstance(): LogCommandReceiver {
    if (!LogCommandReceiver.instance) {
      LogCommandReceiver.instance = new LogCommandReceiver()
    }
    return LogCommandReceiver.instance
  }

  public static setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  public log(event?: string): void {
    if (!event) {
      console.log("No event to log.")
      return
    }
    this.events.push(event)
    console.log(`Logging event: ${event}`)
  }

  public showAllEvents() {
    LogCommandReceiver.strategy.execute(this.events)
  }
}
