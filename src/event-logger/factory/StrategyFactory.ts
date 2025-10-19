import { ConsoleStrategy } from "../strategy/ConsoleStrategy"
import { DailyOverviewStrategy } from "../strategy/DailyOverviewStrategy"
import { FileStrategy } from "../strategy/FileStrategy"
import { Strategy } from "../types"

export class StrategyFactory {
  static create(strategyType: string): Strategy | undefined {
    switch (strategyType) {
      case "console":
        return new ConsoleStrategy()
      case "daily-overview":
        return new DailyOverviewStrategy()
      case "file":
        return new FileStrategy()
    }
  }
}
