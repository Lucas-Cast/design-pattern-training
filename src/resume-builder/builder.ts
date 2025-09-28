import { Resume } from "./resume"

export class ResumeBuilder {
  private static instance: ResumeBuilder
  private resume!: Resume
  private constructor() {
    this.reset()
  }

  public static getInstance(): ResumeBuilder {
    if (!ResumeBuilder.instance) {
      ResumeBuilder.instance = new ResumeBuilder()
    }
    return ResumeBuilder.instance
  }

  public reset() {
    this.resume = new Resume("", "", [], [])
  }

  public withName(name: string): ResumeBuilder {
    this.resume.name = name
    return this
  }
  public withContactDetails(contactDetails: string): ResumeBuilder {
    this.resume.contactDetails = contactDetails
    return this
  }
  public withExperience(experience: string | string[]): ResumeBuilder {
    if (Array.isArray(experience)) {
      this.resume.experience.push(...experience)
      return this
    }
    this.resume.experience.push(experience)

    return this
  }
  public withEducation(education: string | string[]): ResumeBuilder {
    if (Array.isArray(education)) {
      this.resume.education.push(...education)
      return this
    }
    this.resume.education.push(education)

    return this
  }

  public getResume(): Resume {
    const result = this.resume
    this.reset()
    return result
  }
}
