import { ask } from "../questions"
import { ConcreteMemento, Memento } from "./memento"

export class Originator {
  constructor(private state: string = "") {
    this.state = state
    console.log(`\nOriginator: Current state is "${this.state}"`)
  }
  async getUserInput(): Promise<void> {
    const message = await ask("\nEnter new message: ")
    this.state = message
  }
  save(): Memento {
    return new ConcreteMemento(this.state)
  }

  restore(memento: Memento): void {
    this.state = memento.getState()
  }
}
