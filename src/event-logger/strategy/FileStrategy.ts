import { Strategy } from "../types"
import * as fs from "fs"

export class FileStrategy implements Strategy {
  execute(events: string[]): void {
    fs.mkdirSync("logs", { recursive: true })
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
    const logFilePath = `logs/event-log-${timestamp}.txt`
    fs.appendFileSync(logFilePath, events.join("\n") + "\n")
  }
}
