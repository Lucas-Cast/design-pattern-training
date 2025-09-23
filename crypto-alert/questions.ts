import * as readline from "readline"
import { alertConfig } from "./configs/alert-config"
import { AlertConfigKeyType, AlertConfigType } from "./configs/types"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const ask = (question: string) => {
  return new Promise((resolve) =>
    rl.question(question, (answer) => resolve(answer))
  )
}

export const quitQuestion = async (): Promise<string> => {
  return (await ask("Do you want to stop the application? (y/n): ")) as string
}
export const askAlertConfig = async () => {
  const keys = Object.keys(alertConfig)
  const answers: { [key: string]: string } = {}

  for (const key of keys) {
    const answer = (await ask(
      `Set value for ${key} (default: ${
        alertConfig[key as AlertConfigKeyType]
      }): `
    )) as string

    answers[key] =
      answer?.trim() === "" ? alertConfig[key as AlertConfigKeyType] : answer
  }

  return answers as AlertConfigType
}

export const closeReadline = () => {
  rl.close()
}
