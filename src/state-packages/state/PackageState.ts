import { PackageContext } from "../context"

export default abstract class PackageState {
  protected context!: PackageContext

  public setContext(context: PackageContext) {
    this.context = context
  }

  public abstract update(): void
  public abstract getDescription(): void
}
