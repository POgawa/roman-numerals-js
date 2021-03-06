describe("romanNumerals", function() {
  it("takes a number and returns its Roman numeral equivlent", function(){
    expect(romanNumerals(901)).to.equal("CMI")
    expect(romanNumerals(400)).to.equal("DM")
    expect(romanNumerals(1)).to.equal("I")
    expect(romanNumerals(3)).to.equal("III")
    expect(romanNumerals(10)).to.equal("X")
    expect(romanNumerals(937)).to.equal("CMXXXVII")
    expect(romanNumerals(1238)).to.equal("MCCXXXVIII")
    expect(romanNumerals(49)).to.equal("XLIX")
    // expect(romanNumerals(3090)).to.equal("MMMCMXCIX")
    expect(romanNumerals(3999)).to.equal("MMMCMXCIX")

  })


});
