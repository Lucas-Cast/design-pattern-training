import { ask, closeReadline } from "../questions"
import { VideoLoaderProxy } from "./proxy"

type VideoIds =
  keyof (typeof VideoLoaderProxy.prototype)["videoLoader"]["videos"]

async function run() {
  let exit = false
  while (!exit) {
    const isPremium =
      (await ask("Are you a premium user? (y/n): ")) === "y" ? true : false
    const videoId = await ask(
      "Enter video ID to load (video1, video2, video3): "
    )
    const videoProxy = new VideoLoaderProxy(isPremium, videoId as VideoIds)
    videoProxy.loadVideo()

    const continueChoice = await ask(
      "Do you want to load another video? (y/n): "
    )
    if (continueChoice !== "y") {
      exit = true
      closeReadline()
    }
  }
}

run()
