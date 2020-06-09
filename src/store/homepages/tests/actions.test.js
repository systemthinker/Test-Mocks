import { FETCH_HOMEPAGES_SUCCESS, fetchHomepagesSuccess } from "../actions";


// A A A 

test('Action creator that returns an action',()=>{

    const expectedReturn = {
        type: FETCH_HOMEPAGES_SUCCESS,
        payload: [],
    }

    const action = fetchHomepagesSuccess([]);

    expect(action).toEqual(expectedReturn)



})
