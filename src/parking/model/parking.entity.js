export class Parking {
    constructor({
        name = "",
        latitude = 0,
        length = 0,
        total_spaces = 0,
        available_spaces = 0
                })
    {
        this.name = name;
        this.latitude = latitude;
        this.length = length;
        this.total_spaces = total_spaces;
        this.available_spaces = available_spaces;
    }
}