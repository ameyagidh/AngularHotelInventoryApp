export interface hotelroomsInterface{
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface roomlist{
    roomNumber?:string,
    roomType: string,
    amentites: string,
    price: number,
    photo: string,
    checkinTime: Date,
    checkoutTime: Date,
    rating:  number,
}


