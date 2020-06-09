import { loginSuccess, LOGIN_SUCCESS,  } from './actions'

test('see if user is logged in succesfully',()=>{

  const expectedOutput = {
      type: LOGIN_SUCCESS,
      payload: 'user',
  }

  const action = loginSuccess('user')

  expect(expectedOutput).toEqual(action);

})


import { tokenStillValid, TOKEN_STILL_VALID,  } from './actions'


describe('function that accepts a token and checks if its valid',()=>{

    test('returns a object with a type and payload',()=>{

        const expectedObject = {
            type: TOKEN_STILL_VALID,
            payload: 'dummyToken',
        }

        const action = tokenStillValid('dummyToken')

        expect(action).toEqual(expectedObject)



    })



})