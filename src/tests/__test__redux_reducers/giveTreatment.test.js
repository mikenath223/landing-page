import giveTreatmentReducer, { updateTreatment } from '../../store/slices/giveTreatmentSlice';

describe('giveTreatment reducer', () => {
  const initialState = { treatment: { value: 'treat', check: false } }

  it('should return initial state by default', () => {
    expect(giveTreatmentReducer(undefined, {})).toEqual(initialState)
  })

  const data = {
    value: 'dont-treat',
    check: true
  }
  it('should handle updateTreatment when data has a certain value', () => {
    expect(
      giveTreatmentReducer(initialState, {
        type: updateTreatment.type,
        payload: data
      })
    ).toEqual({ treatment: data })
  })

  it('should handle updateTreatment if data has different value', () => {
    const newData = {
      value: 'treat',
      check: true,
    };

    expect(
      giveTreatmentReducer(initialState, {
        type: updateTreatment.type,
        payload: newData
      }
      )
    ).toEqual({ treatment: newData })
  })
})

