import PackageState from "./PackageState"

export class DeliveredState extends PackageState {
  public update(): void {
    console.log("Package has been delivered. No further updates.")
  }
  public getDescription(): void {
    console.log("delivered")
  }
}
