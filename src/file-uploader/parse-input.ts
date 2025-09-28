export const ALLOWED_EXTENSIONS = ["csv", "json", "xml"]

export const parseFileInput = () => {
  const input = process.argv.slice(2)
  if (!input[0]?.startsWith("--input"))
    throw new Error("The request is invalid. Use --input foo.csv|json|xml")

  const filePath = input[1]
  if (!filePath) throw new Error("File path is required after --input")

  const fileExtension = filePath.split(".").pop()!
  if (fileExtension && !ALLOWED_EXTENSIONS.includes(fileExtension))
    throw new Error(
      `Invalid file type. Allowed types are: ${ALLOWED_EXTENSIONS.join(", ")}`
    )

  return { filePath, fileExtension }
}
