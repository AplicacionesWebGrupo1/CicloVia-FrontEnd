export class Review {
    constructor({
                    id = "",
                    title = "",
                    content = "",
                    parkingId = ""
                })
    {
        this.id = id;
        this.title = title;
        this.content = content;
        this.parkingId = parkingId;
    }
}