
export default class stockListPageUtilities {

    static parseStockData(allStockData: Object): string {
        let numberOfStockSources = Object.keys(allStockData).length
        let htmlString = ""
        for (let i = 0; i < numberOfStockSources; i++) {
            htmlString += this.generateHtmlStockSection(allStockData, i)
        }
        return htmlString
    }

    static generateHtmlStockSection(allStockData: Object, i: number): string {
        let stocks = this.getStocks(allStockData, i)
        let companyName = this.grabCompanyStockValue(stocks, "companyName")
        let latestPrice = this.grabCompanyStockValue(stocks, "latestPrice")
        let change = this.grabCompanyStockValue(stocks, "change")
        let previousClose = this.grabCompanyStockValue(stocks, "previousClose")
        let volumeTraded = this.grabCompanyStockValue(stocks, "volume")

        return "<h6><strong>" + companyName + "</strong></h6>" +
            "<p>Latest Price: " + latestPrice + "</p>" +
            "<p>Change: " + change + "</p>" +
            "<p>Previous Close: " + previousClose + "</p>" +
            "<p>Volume Traded: " + volumeTraded + "</p>";
    }

    static getStocks(stockData: Object, index: number): Array<Array<any>> {
        let arrayedQuoteObjects = Object.values(stockData)
        let companyQuoteValues: Object = this.grabCompanyQuoteObject(arrayedQuoteObjects, index)
        return [Object.keys(companyQuoteValues), Object.values(companyQuoteValues)]
    }

    static grabCompanyQuoteObject(arrayedQuoteObjects: Object, companyInt: number): Object {
        return arrayedQuoteObjects[companyInt]["quote"] as Object
    }


    static grabCompanyStockValue(stocks: Array<Array<any>>, param: string): string {
        let stockIndex = stocks[0].indexOf(param);
        let stockValue = stocks[1][stockIndex];
        return stockValue == null ? "" : stockValue
    }
}