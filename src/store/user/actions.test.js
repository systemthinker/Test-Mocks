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


import { storyPostSuccess, STORY_POST_SUCCESS } from './actions'

test('action creater that accepts a story and returns a type and story',()=>{



    const expected = {
        type: STORY_POST_SUCCESS,
        payload: {
            title : 'introduction to Jest',
            desc : 'Welcome to this story about Jest',
        }
    }

    const actionCall = storyPostSuccess({
        title : 'introduction to Jest',
        desc : 'Welcome to this story about Jest',
    })

    expect(actionCall).toEqual(expected);
})