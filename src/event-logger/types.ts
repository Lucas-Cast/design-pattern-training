export interface Command {
  execute(): void
}

export interface Strategy {
  execute(events: string[]): void
}
