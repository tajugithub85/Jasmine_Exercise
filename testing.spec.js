 //TESTING  FUNCTION REPLACE WITH 
 describe("replaceWith", function(){
	it("returns a string with replacement", function() {
	    expect(replaceWith("awesome", "e", "z")).toBe("awzsomz")
	});
 	it('is case sensitive', function() {
	    expect(replaceWith("Foo", "F", "B")).toEqual("Boo")
 	})
  });
 //TESTING FUNCTION EXPAND
describe('expand', () => {
	it('returns copy', () => {
	    expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3])
	})
	it('returns same array if the second argument is 1', () => {
	    expect(expand(["foo", "test"],1)).toEqual(["foo","test"])
 	})
 })
//TESTING FUNCTION ACCEPT NUMBERS ONLY
describe('only numbers', () => {
	it('returns true if all arguments are numbers', () => {
	    expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toEqual(true)
	})
	it('returns false if there is a typeof non number', () => {
 	    expect(acceptNumbersOnly(1,"foo")).toEqual(false)
	})
	it('returns false if NaN is passed as an argument', () => {
 	    expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).toEqual(false)
 	})
  })
 //TESTING FUNCTION MERGE ARRAY
 describe('mergeArrays', () => {
	it('returns a sorted array', () => {
	    expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4])
 	})
  })
//TESTING FUNCTION MERGE OBJECTS
describe('mergeObjects',function ()  {
    it('merges two objects', () => {
        var obj1= {
            name: "Foo",
            num: 33
        }
        var obj2 = {
            test: "thing",
            num: 55
        }        
        expect(mergeObjects(obj1, obj2)).toEqual({
            name: "Foo",
            test: "thing",
            num: 55
        }
        )
    })
})
