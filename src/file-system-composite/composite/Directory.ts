import { mkdirSync, writeFileSync } from "fs"
import { FileSystemComponent } from "./FileSystemComponent"

export class Directory extends FileSystemComponent {
  private readonly children: FileSystemComponent[] = []
  private currentDirectory: Directory
  private parent?: Directory
  constructor(public name: string) {
    super()
    this.currentDirectory = this
  }

  add(child: FileSystemComponent): void {
    this.children.push(child)
    const basePath = this.isRootFolder(this.currentDirectory, child)
      ? ""
      : this.getFullPath(this.currentDirectory)

    console.log("basePath", basePath)
    if (child instanceof Directory) {
      mkdirSync(`src/file-system-composite/${basePath}${child.name}`, {
        recursive: true,
      })

      if (this.isRootFolder(this.currentDirectory, child)) {
        child.parent = undefined
        this.currentDirectory = this.openDirectory(child.name)
        return
      }

      child.parent = this.currentDirectory

      return
    }
    writeFileSync(`src/file-system-composite/${basePath}/${child.name}`, "")
    this.currentDirectory?.children.push(child)
  }

  openDirectory(name: string): Directory {
    const dir = this.children.find(
      (child) => child instanceof Directory && child.name === name
    ) as Directory

    return dir || this
  }

  getFullPath(currentDir: Directory): string {
    let pathParts = currentDir?.name ? [currentDir.name] : []
    while (currentDir?.parent) {
      let parentDir = currentDir.parent
      pathParts.unshift(parentDir.name)
      currentDir = parentDir.parent ?? parentDir
    }

    return pathParts.length > 0 ? pathParts.join("/") + "/" : ""
  }

  private isRootFolder(
    currentDirectory: Directory,
    child: FileSystemComponent
  ): boolean {
    return currentDirectory === child
  }

  getParent(): Directory | undefined {
    return this.parent
  }
}
