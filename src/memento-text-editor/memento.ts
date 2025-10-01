export interface Memento {
  getState(): string
  getName(): string
  getDate(): string
}
export class ConcreteMemento implements Memento {
  private date: string
  constructor(private state: string) {
    this.date = new Date().toISOString().slice(0, 19).replace("T", " ")
  }
  getState(): string {
    return this.state
  }
  getName(): string {
    return `${this.date} / (${this.state.substring(0, 9)}...)`
  }
  getDate(): string {
    return this.date
  }
}
