class Cache{
    constructor() {
        this.cache = new Map();
    }

    set(key, value, accesses = 1) {
        this.cache.set(key, { value, accesses });
    }

    get(key) {
        const entry = this.cache.get(key);
    
        // if (!entry || entry.accessCount === 0) {
        //     this.cacheMap.delete(key);
        //     return null;
        // }

        // entry.accessCount--;
        // return entry.value;
        return entry && entry.accesses > 0 ? (entry.accesses--, entry.value) : null; // interesting using of ternary op
    }

    stats(){ 
        return Array.from(this.cache, ([key, entry]) => ({
            key,
            value: entry.value,
            remainAccesses: entry.accesses,
        }));
    }
}
export {Cache}