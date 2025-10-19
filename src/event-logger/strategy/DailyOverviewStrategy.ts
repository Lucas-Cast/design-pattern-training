import { Strategy } from "../types"

export class DailyOverviewStrategy implements Strategy {
  execute(events: string[]): void {
    console.log("Daily overview events \n", events.join("|"))
  }
}
