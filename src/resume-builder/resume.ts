export class Resume {
  constructor(
    public name: string,
    public contactDetails: string,
    public experience: string[],
    public education: string[]
  ) {}

  public viewResume(): void {
    console.log("----- Resume -----")
    console.log(`Name: ${this.name}`)
    console.log(`Contact Details: ${this.contactDetails}`)
    this.experience.forEach((exp, index, arr) => {
      if (index === 0) console.log("----- Experience Details -----")
      console.log(`Experience ${index + 1}: ${exp}`)
    })
    this.education.forEach((edu, index, arr) => {
      if (index === 0) console.log("----- Education Details -----")
      console.log(`Education ${index + 1}: ${edu}`)
    })
    console.log("------------------")
  }
}
