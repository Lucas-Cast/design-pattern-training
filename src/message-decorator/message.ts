export interface Message {
  send(message: string): string
}

export class SimpleMessage implements Message {
  send(message: string): string {
    console.log(`Message sent: ${message}`)
    return message
  }
}
