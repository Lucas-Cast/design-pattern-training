import { Message } from "../message"

export class PriorityDecorator implements Message {
  send(message: string): string {
    const priorityMessage = `[PRIORITY] ${message}`
    console.log(`${priorityMessage}`)
    return priorityMessage
  }
}
