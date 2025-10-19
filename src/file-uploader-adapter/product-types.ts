export interface Product {
  id: number
  name: string
  price: number
}
export abstract class AbstractProductProvider {
  protected filePath: string
  constructor(filePath: string) {
    this.filePath = filePath
  }
  abstract load(): Product[]
}
