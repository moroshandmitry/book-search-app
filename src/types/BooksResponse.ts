export interface BooksResponse {
  items: BookResponse[]
}

export interface BookResponse {
  id: string
  etag: string
  kind: string
  selfLink: string
  saleInfo: SaleInfo
  volumeInfo: VolumeInfo
  accessInfo: AccessInfo
  searchInfo: SearchInfo
}

interface SaleInfo {
  country: string
  isEbook: boolean
  saleability: string
}

interface VolumeInfo {
  title: string
  language: string
  infoLink: string
  pageCount: number
  subtitle?: string
  printType: string
  publisher?: string
  authors?: string[]
  categories: string[]
  previewLink: string
  description?: string
  publishedDate?: string
  contentVersion: string
  imageLinks: ImageLinks
  maturityRating: string
  allowAnonLogging: boolean
  readingModes: ReadingModes
  canonicalVolumeLink: string
  panelizationSummary: PanelizationSummary
  industryIdentifiers: IndustryIdentifier[]
}

interface ImageLinks {
  thumbnail: string
  smallThumbnail: string
}

interface ReadingModes {
  text: boolean
  image: boolean
}

interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

interface IndustryIdentifier {
  type: string
  identifier: string
}

interface AccessInfo {
  pdf?: Pdf
  epub?: Epub
  country: string
  embeddable: boolean
  viewability: string
  publicDomain: boolean
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
  textToSpeechPermission: string
}

interface Epub {
  isAvailable: boolean
  acsTokenLink: string
}

interface Pdf {
  isAvailable: boolean
  acsTokenLink: string
}

interface SearchInfo {
  textSnippet: string
}
