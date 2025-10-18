import { PackageContext } from "../context"
import { RegisteredState } from "../state/ResgisteredState"

export interface Command {
  execute(): void
}

export class PackageCommandReceiver {
  private static instance: PackageCommandReceiver
  private packageMap: Map<string, PackageContext> = new Map()

  private constructor() {}

  static getInstance(): PackageCommandReceiver {
    if (!PackageCommandReceiver.instance) {
      PackageCommandReceiver.instance = new PackageCommandReceiver()
    }
    return PackageCommandReceiver.instance
  }

  public registerPackage(code: string): void {
    this.packageMap.set(code, new PackageContext(new RegisteredState()))
  }
  public getPackageDescription(code: string): void {
    const packageContext = this.packageMap.get(code)
    if (packageContext) {
      packageContext.getDescription()
      return
    }
    console.log(`PackageCommandReceiver: Package ${code} not found.`)
  }

  public getPackageMap(): Map<string, PackageContext> {
    return this.packageMap
  }

  public updatePackage(code: string): void {
    const packageContext = this.packageMap.get(code)?.update()
  }
}

export class CommandInvoker {
  private history: Command[] = []
  executeCommand(command: Command): void {
    command.execute()
    this.history.push(command)
  }
}
