export interface PortfolioJSON {
    longDescription?: string
    highlights?: string[]
    screenshots?: {
        [key: string]: string
    }
}