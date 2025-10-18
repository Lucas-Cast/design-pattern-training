import { Command, PackageCommandReceiver } from "./command-setup"

export class WatchAllCommand implements Command {
  private packageCommandReceiver: PackageCommandReceiver
  constructor() {
    this.packageCommandReceiver = PackageCommandReceiver.getInstance()
  }
  execute(): void {
    console.log("WatchAllCommand: Executing watch all.")
    this.packageCommandReceiver.getPackageMap().forEach((_, code) => {
      console.log(
        `Watching status for package: ${code} \n-------------------------`
      )
      this.packageCommandReceiver.getPackageDescription(code)
      console.log("--------------------------\n")
    })
  }
}
