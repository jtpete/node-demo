describe("multiply function", function(){

  it("2x2=4", function(){
    expect(multiply(2,2)).toEqual(4);
  });
  it("4x4=16", function(){
    expect(multiply(4,4)).toEqual(16);
  });
});

describe("Add function", function(){

  it("5+5=10", function(){
    expect(add(5,5)).toEqual(10);
  });
  it("4+4=8", function(){
    expect(add(4,4)).toEqual(8);
  });
});
