import {
  askForMultipleResumeInputs,
  askForResumeInput,
  closeReadline,
} from "../questions"
import { ResumeBuilder } from "./builder"
import { Context, JsonExportStrategy, TxtExportStrategy } from "./context"

const run = async () => {
  console.log("Resume Builder Application")
  const context = Context.getInstance()

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

  console.log("Resume being exported as TXT and JSON formats...")

  context.setStrategy(new TxtExportStrategy())
  context.executeStrategy(resume)

  context.setStrategy(new JsonExportStrategy())
  context.executeStrategy(resume)
  closeReadline()
}

run()
