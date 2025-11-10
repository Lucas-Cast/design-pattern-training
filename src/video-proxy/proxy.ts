import { VideoLoader, VideoLoaderOptions } from "./video"

export class VideoLoaderProxy implements VideoLoaderOptions {
  private videoLoader: VideoLoader
  private log: string[] = []
  private isPremiumUser: boolean = false

  constructor(
    isPremiumUser: boolean,
    videoId: keyof (typeof VideoLoader.prototype)["videos"]
  ) {
    this.videoLoader = new VideoLoader(videoId)
    this.isPremiumUser = isPremiumUser
  }

  loadVideo(): void {
    if (this.checkAccess()) {
      console.log("Access granted to video.")
      this.log.push("Access granted to video.")
      this.videoLoader.loadVideo()
      return
    }
    console.log("Access denied. Upgrade to premium to access this content.")
    this.log.push("Access denied. Upgrade to premium to access this content.")
  }

  checkAccess(): boolean | void {
    const isRequestedVideoPremium = this.videoLoader.isPremiumVideo()
    if (
      (this.isPremiumUser && isRequestedVideoPremium) ||
      !isRequestedVideoPremium
    )
      return true
  }
}
