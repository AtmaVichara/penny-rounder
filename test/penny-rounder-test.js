const PennyRounder = require("../lib/penny-rounder.js")
const assert = require("chai").assert;

describe("Penny Rounder Test", () => {

  describe("Methods", () => {

    describe("totalSplitter() functionality", () => {
      it("should split total into three numbers, and return array of split", () => {
        assert.deepEqual(PennyRounder.totalSplitter(800.00), [266.67, 266.67, 266.67])
        assert.deepEqual(PennyRounder.totalSplitter(850.00), [283.33, 283.33, 283.33])
      })
    })

    describe("verifySplit() functionality", () => {
      it("should add/subtract values until they add up to total, then return", () => {
        assert.deepEqual(PennyRounder.verifySplit([266.67, 266.67, 266.67], 800.00), [266.66, 266.67, 266.67])
        assert.deepEqual(PennyRounder.verifySplit([283.33, 283.33, 283.33], 850.00), [283.34, 283.33, 283.33])
      })
    })

    describe("moneySplitter() functionality", () => {
      it("should split total and return array of split values", () => {
        assert.deepEqual(PennyRounder.moneySplitter(800.00), [266.66, 266.67, 266.67])
        assert.deepEqual(PennyRounder.moneySplitter(850.00), [283.34, 283.33, 283.33])
        assert.deepEqual(PennyRounder.moneySplitter(740.00), [411.33, 411.33, 411.33])
      })
    })
  })

})
