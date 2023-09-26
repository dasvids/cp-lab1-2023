import {Cache} from "../src/cache";

// test('it fails', () => {
//     expect(false).toBe(true);
// }); что то что хочется стереть 

describe('Cache', () => {
    // крч он жалуется на русский, так что резко english language 
    it('Should store and retrieve values with default access count', () => { 
        const cache = new Cache(); //creating
        cache.set('key1', 'value1'); // setting key and value (imagine)
        cache.set('key2', 'value2'); // imagine one more time 
        expect(cache.get('key1')).toBe('value1'); // all logically
        expect(cache.get('key2')).toBe('value2'); // imagine otherwise -_-
    });

    it('Should store and retrieve values with specified access count', () => { 
        const cache = new Cache();
        cache.set('key1', 'value1', 2); // im tired writting comments, anyway here with +- english knowledge all understandable
        expect(cache.get('key1')).toBe('value1');
        expect(cache.get('key1')).toBe('value1');
        expect(cache.get('key1')).toBe(null);
    });

    it('Should return null for no exist keys', () => {
        const cache = new Cache();
        expect(cache.get('nonExistentKey')).toBe(null);
    });

    it('Should return null when access count is lesser or equal zero', () => {
        const cache = new Cache();
        cache.set('key1', 'value1', 1); 
        expect(cache.get('key1')).toBe('value1');
        expect(cache.get('key1')).toBe(null); 
    });

    it('should give statistics for cache', () => {
        const cache = new Cache();
        cache.set('key1', 'value1', 3);
        cache.set('key2', 'value2', 1);
        cache.get('key1');
        cache.get('key2');
        cache.get('key1');
        const stats = cache.stats();
        expect(stats).toEqual([
          { key: 'key1', value: 'value1', remainAccesses: 1 },
          { key: 'key2', value: 'value2', remainAccesses: 0 },
        ]);
    });
});