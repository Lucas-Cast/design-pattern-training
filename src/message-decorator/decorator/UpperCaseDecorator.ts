import { Message } from "../message"

export class UpperCaseDecorator implements Message {
  send(message: string): string {
    const upperCasedMessage = message.toUpperCase()
    console.log(`${upperCasedMessage}`)
    return upperCasedMessage
  }
}
