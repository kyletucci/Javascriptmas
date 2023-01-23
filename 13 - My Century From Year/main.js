function centuryFromYear(num) {
    return ~~((num + 99) / 100);
}


console.log(centuryFromYear(1905));
console.log(centuryFromYear(1699));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1701));


/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});