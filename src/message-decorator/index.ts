import { ask, closeReadline } from "../questions"
import { MessageDecorator } from "./decorator/MessageDecorator"
import { PriorityDecorator } from "./decorator/PriorityDecorator"
import { TimestampDecorator } from "./decorator/TimestampDecorator"
import { UpperCaseDecorator } from "./decorator/UpperCaseDecorator"
import { SimpleMessage } from "./message"

async function run() {
  const messageDecorator = MessageDecorator.getInstance(new SimpleMessage())
  let message = await ask("Enter your message: ")
  messageDecorator.send(message)

  const addTimestamp = await ask("Do you want to add a timestamp? (y/n): ")
  if (addTimestamp === "y") {
    messageDecorator.changeWrappee(new TimestampDecorator())
    message = messageDecorator.send(message)
  }
  const addUpperCase = await ask("Do you want to convert to uppercase? (y/n): ")
  if (addUpperCase === "y") {
    messageDecorator.changeWrappee(new UpperCaseDecorator())
    message = messageDecorator.send(message)
  }
  const addPriority = await ask("Do you want to add priority? (y/n): ")
  if (addPriority === "y") {
    messageDecorator.changeWrappee(new PriorityDecorator())
    message = messageDecorator.send(message)
  }
  closeReadline()
}

run()
