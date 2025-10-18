import { Command, PackageCommandReceiver } from "./command-setup"

export class WatchStatusCommand implements Command {
  private packageCommandReceiver: PackageCommandReceiver
  constructor(private code: string) {
    this.packageCommandReceiver = PackageCommandReceiver.getInstance()
  }
  execute(): void {
    console.log("WatchStatusCommand: Executing watch status.")
    this.packageCommandReceiver.getPackageDescription(this.code)
  }
}
