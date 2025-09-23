import { alertConfig } from "./alert-config"

export interface StrategyContext {
  currentPrice: number
  alertConfig: AlertConfigType
  previousPrice?: number
}

export type AlertConfigType = typeof alertConfig

export type AlertConfigKeyType = keyof AlertConfigType
