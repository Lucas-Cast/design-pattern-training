import {
  askForMultipleResumeInputs,
  askForResumeInput,
  closeReadline,
} from "../questions"
import { ResumeBuilder } from "./builder"

const run = async () => {
  console.log("Resume Builder Application")

  const name = await askForResumeInput("Name")
  const contactDetails = await askForResumeInput("Contact Details")
  const experience = await askForMultipleResumeInputs("Experience")
  const education = await askForMultipleResumeInputs("Education")

  const resumeBuilder = ResumeBuilder.getInstance()
  resumeBuilder
    .withName(name)
    .withContactDetails(contactDetails)
    .withExperience(experience)
    .withEducation(education)

  const resume = resumeBuilder.getResume()
  resume.viewResume()
  closeReadline()
}

run()
