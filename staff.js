let staffs = [];
class StaffList {
    add = (name, age) => {
        if(age > 20) {
            if(staffs.indexOf(name) === -1) {
                staffs.push(name);
            }
        } else {
            throw new Error('Staff member age must be greater than 20');
        }
    }

    remove = name => {
        if(staffs.indexOf(name) !== -1) {
            staffs = staffs.filter(s=> s !== name);
            return true;
        }
        return false;
    }

    getSize = () => staffs.length
}