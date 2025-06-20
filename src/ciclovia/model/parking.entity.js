export class Parking {
    constructor({
                    id = "",
                    name = "",
                    total_spaces = 0,
                    available_spaces = 0,
                })
    {
        this.id = id;
        this.name = name;
        this.total_spaces = total_spaces;
        this.available_spaces = available_spaces;
    }
}