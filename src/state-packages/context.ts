import PackageState from "./state/PackageState"

export class PackageContext {
  private state: PackageState
  constructor(state: PackageState) {
    this.state = state
    this.state.setContext(this)
  }

  public transitionTo(state: PackageState) {
    console.log(
      `PackageContext: Transition to ${(<any>state).constructor.name}.`
    )
    this.state = state
    this.state.setContext(this)
  }
  public update() {
    this.state.update()
  }
  public getDescription() {
    this.state.getDescription()
  }
}
