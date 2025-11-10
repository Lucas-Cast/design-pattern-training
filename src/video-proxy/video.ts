export interface VideoLoaderOptions {
  loadVideo(): void
}

export class VideoLoader implements VideoLoaderOptions {
  private videos = {
    video1: { title: "Intro to TypeScript", isPremium: false },
    video2: { title: "Advanced TypeScript", isPremium: true },
    video3: { title: "TypeScript Design Patterns", isPremium: true },
  }
  constructor(private videoId: keyof typeof this.videos) {}

  loadVideo(): void {
    this.videos[this.videoId]
      ? console.log(
          `Loading video: ${
            this.videos[this.videoId].title
          } | This is a premium video?: ${this.videos[this.videoId].isPremium}`
        )
      : console.log("Video not found.")
  }

  isPremiumVideo(): boolean {
    return this.videos[this.videoId]?.isPremium
  }
}
