import { InTransitState } from "./InTransitState"
import PackageState from "./PackageState"

export class RegisteredState extends PackageState {
  public update(): void {
    this.context.transitionTo(new InTransitState())
  }
  public getDescription(): void {
    console.log("registered")
  }
}
