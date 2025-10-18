import { DeliveredState } from "./DeliveredState"
import PackageState from "./PackageState"

export class DistributionCenterState extends PackageState {
  public update(): void {
    this.context.transitionTo(new DeliveredState())
  }
  public getDescription(): void {
    console.log("distribution center")
  }
}
