const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});


/*
Exemplo
describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        expect(2 + 2).toBe(4);
    });
});
*/
