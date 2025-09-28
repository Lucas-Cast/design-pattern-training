import { AbstractProductProvider, Product } from "./product-types"
import * as fs from "fs"

export class CsvAdapter extends AbstractProductProvider {
  constructor(filePath: string) {
    super(filePath)
  }
  load(): Product[] {
    console.log("Loading products from CSV file...")
    const data = fs.readFileSync(this.filePath, "utf-8")
    return data
      .split("\n")
      .slice(1)
      .map((line) => {
        const [id, name, price] = line.split(",")
        return { id: Number(id), name: name ?? "", price: Number(price) }
      })
  }
}

export class JsonAdapter extends AbstractProductProvider {
  constructor(filePath: string) {
    super(filePath)
  }
  load(): Product[] {
    console.log("Loading products from JSON file...")
    const data = fs.readFileSync(this.filePath, "utf-8")
    const products = JSON.parse(data)
    return products.map((product: any) => ({
      id: product.id,
      name: product.name,
      price: Number(product.price),
    }))
  }
}

export class XmlAdapter extends AbstractProductProvider {
  constructor(filePath: string) {
    super(filePath)
  }
  load(): Product[] {
    console.log("Loading products from XML file...")
    const data = fs.readFileSync(this.filePath, "utf-8")
    const regex =
      /<product>\s*<id>(.*?)<\/id>\s*<name>(.*?)<\/name>\s*<price>(.*?)<\/price>\s*<\/product>/g
    const products: Product[] = []
    let match
    while ((match = regex.exec(data)) !== null) {
      const [, id, name, price] = match
      products.push({
        id: Number(id),
        name: name ?? "",
        price: Number(price),
      })
    }
    return products
  }
}
