export class Review {
    constructor({
                    id = "",
                    title = "",
                    content = "",
                    parkingId = 0
                })
    {
        this.id = id;
        this.title = title;
        this.content = content;
        this.parkingId = parkingId;
    }
}