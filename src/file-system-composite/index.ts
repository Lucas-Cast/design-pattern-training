import { ask } from "../questions"
import { Directory } from "./composite/Directory"
import { FileLeaf } from "./composite/Files"

async function run() {
  let stop = false
  let currentFolder = new Directory("output")
  currentFolder.add(currentFolder)
  while (!stop) {
    const input = await ask(
      "Choose an action ( mkdir <name> / newfile <name> / open <name> / back / exit): "
    )
    const [action, name] = input.split(" ")
    switch (action) {
      case "mkdir":
        if (!name) break
        currentFolder.add(new Directory(name))
        console.log("folder added")
        break
      case "newfile":
        if (!name) break
        currentFolder.add(new FileLeaf(name))
        console.log("file added")
        break
      case "open":
        if (!name) break
        console.log(`Opening directory: ${name}`)
        currentFolder = currentFolder.openDirectory(name)
        console.log(
          "Current directory:",
          currentFolder.getFullPath(currentFolder)
        )
        break
      case "back":
        console.log("Going back to parent directory")
        currentFolder = currentFolder.getParent() ?? currentFolder
        console.log(
          "Current directory:",
          currentFolder.getFullPath(currentFolder)
        )
        break
      case "exit":
        console.log("Exiting file system")
        stop = true
        break
      default:
        console.log("Invalid action. Please try again.")
    }
  }
}
run()
