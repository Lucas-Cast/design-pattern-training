import { Command, PackageCommandReceiver } from "./command-setup"

export class UpdatePackagesCommand implements Command {
  private packageCommandReceiver: PackageCommandReceiver
  constructor() {
    this.packageCommandReceiver = PackageCommandReceiver.getInstance()
  }
  execute(): void {
    this.packageCommandReceiver.getPackageMap().forEach((_, code) => {
      this.packageCommandReceiver.updatePackage(code)
    })
  }
}
