export class Quotes {
    constructor(public statement: string,public author: string, public upvote:number, public downvote:number, public datePast: Date){
        this.statement = statement
        this.author = author
        this.upvote = upvote
        this.downvote = downvote
        this.datePast = datePast
    }
}
