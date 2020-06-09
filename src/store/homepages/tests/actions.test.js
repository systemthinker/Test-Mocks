import { FETCH_HOMEPAGES_SUCCESS, fetchHomepagesSuccess } from "../actions";
import axios from "axios";


describe("#fetchHomepagesSuccess", () => {
  describe("if given an array of homepages", () => {
    test("should return an action object", () => {
        // test data simulating homepages
        const homepages = null;
        // build action we expect to get back
        const expected = {
          type: FETCH_HOMEPAGES_SUCCESS,
          payload: null,
        };
        // call function
        const action = fetchHomepagesSuccess(homepages);
        // do assertion on function return
        expect(action).toEqual(expected);
      });
  });
});

describe("#fetchHomepagesSuccess", () => {
    describe("homepages should have the same length as payload", () => {
      test("should return an action object", () => {
          // test data simulating homepages
          const homepages = null;
          // build action we expect to get back
          const expected = {
            type: FETCH_HOMEPAGES_SUCCESS,
            payload: null,
          };
          // call function
          const action = fetchHomepagesSuccess(homepages);
          console.log(action.payload)
          if(action.payload !== null){
          expect(action.payload.length).toEqual(expected.payload.length)};
        });
    });
  });


  jest.mock("axios");

// Inside our test case we can define what we want this mock to return:
const response = { data: { hi: "Im a fake response!" } };
axios.get.mockImplementationOnce(() => Promise.resolve(response));