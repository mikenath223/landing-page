import queryApiReducer, { loadData } from '../../store/slices/queryApiSlice';

describe('queryApi reducer', () => {
  const initialState = { questions: [] }

  it('should return initial state by default', () => {
    expect(queryApiReducer(undefined, {})).toEqual(initialState)
  })

  const data = [{
    options: [],
    question: 'Hello?',
    type: 'ChoiceType'
  }];
  it('should handle loadData when object has a particluar value', () => {
    expect(
      queryApiReducer(initialState, {
        type: loadData.type,
        payload: data
      }
      )
    ).toEqual({ questions: data })
  })


  it('should handle loadData if object contains different value', () => {
    const newData = [{
      options: [{ 'Yes': true, 'No': false }],
      question: 'Hey there?',
      ...data
    }];
    expect(
      queryApiReducer({ questions: [] }, {
        type: loadData.type,
        payload: newData
      }
      )
    ).toEqual({ questions: newData })
  })
})

