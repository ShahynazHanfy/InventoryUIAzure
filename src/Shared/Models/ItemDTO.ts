export class Item {
  id: number
  itemName!: string
  subGroupId: number
  subGroupName: string
  groupName: string // to store the name of category when get it by id
  photo: string
  serialNumber: string
  brand: string
  bar_code: string
  description: string
  price: number
}