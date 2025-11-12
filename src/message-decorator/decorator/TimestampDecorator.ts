import { Message } from "../message"

export class TimestampDecorator implements Message {
  send(message: string): string {
    const timestamp = new Date().toISOString()
    const timestampedMessage = `[${timestamp}] ${message}`
    console.log(`${timestampedMessage}`)
    return timestampedMessage
  }
}
