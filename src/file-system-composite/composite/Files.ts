import { FileSystemComponent } from "./FileSystemComponent"

export class FileLeaf extends FileSystemComponent {
  constructor(public name: string) {
    super()
  }

  getCurrentPath(): string {
    return this.name
  }
}
