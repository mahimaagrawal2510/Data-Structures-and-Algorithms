function deepEqualJSON(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }

    // Arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        return obj1.every((ele, index) => deepEqualJSON(ele, obj2[index]));
    }

    // Objects
    if (!Array.isArray(obj1) && !Array.isArray(obj2)) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) return false;

        return keys1.every(key => deepEqualJSON(obj1[key], obj2[key]));
    }

    return false; 
}

// ✅ Tests
deepEqualJSON({ y: 2, x: 1 }, { x: 1, y: 2 })
