import headlinesReducer from "../../reducers/headlines-reducer";
import * as c from "./../../actions/ActionTypes"

describe('headlinesReducer', () => {
  const defaultState = {
    isLoading: false,
    headlines: [],
    error: null
  }
  
  const loadingState = {
    isLoading: false,
    headlines: [],
    error: null
  };

  let action;

  test('returns default if no action is passed', () => {
    expect(headlinesReducer(defaultState, {type:null})).toEqual(
      {
        isLoading: false,
        headlines: [],
        error: null
      }
    )
  })

  test('request headlines to change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_HEADLINES
    };
    expect(headlinesReducer(defaultState, action)).toEqual(
      {
        isLoading: true,
        headlines: [],
        error: null
      }
    )
  })

  test('successfully getting headlines should change isLoading to false and update headlines', () => {
    const headlines = "A headline";
    action = {
      type: c.GET_HEADLINES_SUCCESS,
      headlines
    };

    expect(headlinesReducer(loadingState, action)).toEqual({
      isLoading: false,
      headlines: "A headline",
      error: null
    });
  });

  test('failing to get headlines changes isLoading to false and adds an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_HEADLINES_FAILURE,
      error
    };

    expect(headlinesReducer(loadingState, action)).toEqual({
      isLoading: false,
      headlines: [],
      error: "An error"
    })
  })
});