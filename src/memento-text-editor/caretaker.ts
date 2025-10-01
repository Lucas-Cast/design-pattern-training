import { Memento } from "./memento"
import { Originator } from "./originator"

export class Caretaker {
  private mementos: Memento[] = []

  constructor(private originator: Originator) {}

  backup() {
    console.log("\nCaretaker: Saving Originator's state...")
    this.mementos.push(this.originator.save())
  }

  undo() {
    if (this.mementos.length === 0) {
      console.log("\nCaretaker: No mementos to undo.")
      return
    }
    const memento = this.mementos.pop()!
    console.log(`\nCaretaker: Removing state: ${memento.getName()}`)
    this.originator.restore(memento)
  }

  showHistory() {
    console.log("\nCaretaker: Here's the list of mementos:")
    this.mementos.forEach((memento) => console.log(` - ${memento.getName()}`))
  }
}
