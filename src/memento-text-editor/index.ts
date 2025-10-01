import { ask, closeReadline } from "../questions"
import { Caretaker } from "./caretaker"
import { Originator } from "./originator"

const originator = new Originator()
const caretaker = new Caretaker(originator)

async function run() {
  let stop = false
  while (!stop) {
    console.log("1. Write message\n2. Undo\n3. Show history\n4. Exit\n")
    const userAction = (await ask("Choose an option: ")) as string

    switch (userAction) {
      case "1":
        await originator.getUserInput()
        caretaker.backup()
        break
      case "2":
        caretaker.undo()
        break
      case "3":
        caretaker.showHistory()
        break
      case "4":
        stop = true
        closeReadline()
        break
      default:
        console.log("Invalid choice. Please try again.")
    }
  }
}

run()
