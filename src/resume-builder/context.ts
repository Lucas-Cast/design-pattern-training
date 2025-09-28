import { Resume } from "./resume"
import * as fs from "fs"

interface Strategy {
  execute(data: Resume): void
}

export class Context {
  private static instance: Context
  private strategy!: Strategy
  private constructor() {
    this.reset()
  }

  public static getInstance(): Context {
    if (!Context.instance) {
      Context.instance = new Context()
    }
    return Context.instance
  }

  public reset() {
    this.strategy = {} as Strategy
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }
  public executeStrategy(data: Resume) {
    this.strategy.execute(data)
  }
}

export class TxtExportStrategy implements Strategy {
  execute(data: Resume): void {
    const folderPath = "resumes"
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath)
    const txt = `Name: ${data.name}\nContact: ${
      data.contactDetails
    }\n\nExperience:\n${data.experience.join(
      "\n"
    )}\nEducation:\n${data.education.join("\n")}`
    const filename = `${folderPath}/${data.name
      .replace(/\s+/g, "_")
      .toLowerCase()}_resume.txt`
    fs.writeFileSync(filename, txt)
  }
}

export class JsonExportStrategy implements Strategy {
  execute(data: Resume): void {
    const folderPath = "resumes"
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath)

    const json = JSON.stringify(data, null, 2)
    const filename = `${folderPath}/${data.name
      .replace(/\s+/g, "_")
      .toLowerCase()}_resume.json`
    fs.writeFileSync(filename, json, {})
  }
}
