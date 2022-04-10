export class Quotes {
    constructor(public quote: string,public author: string, public upvote:number, public downvote:number, public datePast: Date){
        this.quote = quote
        this.author = author
        this.upvote = upvote
        this.downvote = downvote
        this.datePast = datePast
    }
}
