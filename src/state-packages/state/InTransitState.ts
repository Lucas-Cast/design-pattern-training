import { DistributionCenterState } from "./DistributionCenterState"
import PackageState from "./PackageState"

export class InTransitState extends PackageState {
  private counter: number = 1
  public update(): void {
    if (this.counter < 2) {
      this.counter++
      return
    }
    this.context.transitionTo(new DistributionCenterState())
  }
  public getDescription(): void {
    console.log("in transit ", this.counter)
  }
}
