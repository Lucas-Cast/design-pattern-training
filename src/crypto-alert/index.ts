import "dotenv/config"
import { getCoinPrice } from "./configs/api-config"
import { askAlertConfig, closeReadline, quitQuestion } from "../questions"
import { Context, ThresholdStrategy, VariationStrategy } from "./context"

let previousPrice: undefined | number = undefined

async function run() {
  const alertConfig = await askAlertConfig()
  const validationMilliseconds =
    Number(alertConfig.variationMinutes) * 60 * 1000

  const variationStrategy = new VariationStrategy()
  const thresholdStrategy = new ThresholdStrategy()
  const context = new Context(variationStrategy)
  console.log("Starting price monitoring...")
  console.log("Current configuration:", alertConfig)
  setInterval(async () => {
    const currentPrice = await getCoinPrice(
      alertConfig.coinId,
      alertConfig.currency
    )
    console.log(`Current price of ${alertConfig.coinId}: $${currentPrice}`)
    context.executeStrategy({ currentPrice, alertConfig, previousPrice })
    context.setStrategy(thresholdStrategy)

    context.executeStrategy({ currentPrice, alertConfig, previousPrice })
    context.setStrategy(variationStrategy)
    previousPrice = currentPrice

    const shouldQuit = await quitQuestion()

    if (shouldQuit.toLowerCase() === "y") {
      console.log("Exiting...")
      closeReadline()
      process.exit(0)
    }
  }, validationMilliseconds)
}

run()
