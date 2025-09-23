import { StrategyContext } from "./configs/types"

interface Strategy {
  execute(context: StrategyContext): void
}

export class Context {
  constructor(private strategy: Strategy) {}

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  public executeStrategy(context: StrategyContext) {
    this.strategy.execute(context)
  }
}

export class ThresholdStrategy implements Strategy {
  public execute(context: StrategyContext): void {
    const coinPrice = context.currentPrice
    const alertConfig = context.alertConfig
    if (coinPrice <= Number(alertConfig.buyThreshold)) {
      console.log(`Buying ${alertConfig.coinId} at $${coinPrice}`)
      return
    }
    if (coinPrice >= Number(alertConfig.sellThreshold)) {
      console.log(`Selling ${alertConfig.coinId} at $${coinPrice}`)
      return
    }
  }
}

export class VariationStrategy implements Strategy {
  public execute(context: StrategyContext): void {
    const currentPrice = context.currentPrice
    const previousPrice = context.previousPrice

    if (!previousPrice || previousPrice === currentPrice) return

    const variationPercentage =
      Number(context.alertConfig.variationPercentage) / 100

    const variation = previousPrice * variationPercentage
    const hasVariation =
      currentPrice - previousPrice >= variation ||
      previousPrice - currentPrice >= variation

    hasVariation &&
      console.log(
        `The price has changed ${context.alertConfig.variationPercentage}% from $${previousPrice} to $${currentPrice}`
      )
  }
}
