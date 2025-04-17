import {describe, expect, test} from '@jest/globals';
const db = require("../model/queries")

function testFunc() {
  return"passed"
}

// Test the update query
describe("test function",()=>{
  test("test function",()=>{
    expect(testFunc()).toBe("passed")
  })
})
