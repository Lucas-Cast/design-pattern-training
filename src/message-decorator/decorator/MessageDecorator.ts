import { Message } from "../message"

export class MessageDecorator implements Message {
  protected wrappee: Message
  static instance: MessageDecorator

  private constructor(wrappee: Message) {
    this.wrappee = wrappee
  }

  send(message: string): string {
    return this.wrappee.send(message)
  }

  changeWrappee(wrappee: Message): void {
    this.wrappee = wrappee
  }

  static getInstance(wrappee: Message): MessageDecorator {
    if (!MessageDecorator.instance) {
      MessageDecorator.instance = new MessageDecorator(wrappee)
    }
    return MessageDecorator.instance
  }
}
