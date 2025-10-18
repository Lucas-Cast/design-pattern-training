import { PackageContext } from "../context"
import { Command, PackageCommandReceiver } from "./command-setup"

export class RegisterCommand implements Command {
  private packageCommandReceiver: PackageCommandReceiver
  constructor(private code: string) {
    this.packageCommandReceiver = PackageCommandReceiver.getInstance()
  }
  execute(): void {
    console.log("RegisterCommand: Executing registration.")
    this.packageCommandReceiver.registerPackage(this.code)
  }
}
