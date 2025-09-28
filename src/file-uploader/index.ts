import { CsvAdapter, XmlAdapter, JsonAdapter } from "./adapters"
import { parseFileInput } from "./parse-input"
import { AbstractProductProvider, Product } from "./product-types"

const { filePath, fileExtension } = parseFileInput()

const providers: Record<
  string,
  new (filePath: string) => AbstractProductProvider
> = {
  csv: CsvAdapter,
  xml: XmlAdapter,
  json: JsonAdapter,
}

const Provider = providers[fileExtension] ?? JsonAdapter
const provider = new Provider(filePath)
const products: Product[] = provider.load()
console.log(JSON.stringify(products, null, 2))
