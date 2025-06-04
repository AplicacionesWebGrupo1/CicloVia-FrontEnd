export class Parking {
    constructor({
                    id = "",
                    name = "",
                    image = "",
                    total_spaces = 0,
                    available_spaces = 0,
                })
    {
        this.id = id;
        this.name = name;
        this.image = image;
        this.total_spaces = total_spaces;
        this.available_spaces = available_spaces;
    }
}