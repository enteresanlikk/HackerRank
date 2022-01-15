class ParkingLot {
    constructor(slotCount) {
        let retVal = [];
        for(let i=1; i<= slotCount; i++) {
            retVal.push({
                id: i,
                carId: null
            });
        }
        this.slots = retVal;
    }
    
    park(carId) {
        const emptyIndex = this.slots.findIndex(s => s.carId === null);
        if(emptyIndex !== -1) {
            this.slots[emptyIndex].carId = carId;
            return true;
        } else {
            return false;
        }
    }
    
    remove(carId) {
        const emptyIndex = this.slots.findIndex(s => s.carId === carId);
        if(emptyIndex !== -1) {
            this.slots[emptyIndex].carId = null;
            return true;
        } else {
            return false;
        }
    }
    
    getSlots() {
        return this.slots.map(s => s.carId);
    }
}

const lot = new ParkingLot(5);
console.log(lot.park('bilal'));
console.log(lot.park('dfdf'));
console.log(lot.park('212'));
console.log(lot.park('23s1df32'));
console.log(lot.park('sdfdsf21sd2fs'));
console.log(lot.park('son'));

console.log(lot.getSlots());
console.log(lot.remove('212'));
console.log(lot.getSlots());