import {
  ARRIVALS_LOAD_START,
  ARRIVALS_LOAD_SUCCESS,
  ARRIVALS_LOAD_FAILURE,
  STOP_INFO_LOAD_START,
  STOP_INFO_LOAD_SUCCESS,
  STOP_INFO_LOAD_FAILURE
} from './actionTypes.js'

export const loadArrivalsStart = () => {
  return { type: ARRIVALS_LOAD_START }
}

export const loadArrivalsSuccess = (arrivals) => {
  return { type: ARRIVALS_LOAD_SUCCESS, arrivals }
}

export const loadArrivalsFailure = (errors) => {
  return { type: ARRIVALS_LOAD_FAILURE, errors }
}
 d
export const loadStopInfoStart = () => {
  return { type: STOP_INFO_LOAD_START }
}

export const loadStopInfoSuccess = (stopInfo) => {
  return { type: STOP_INFO_LOAD_SUCCESS, stopInfo }
}

export const loadStopInfoFailure = (errors) => {
  return { type: STOP_INFO_LOAD_FAILURE, errors }
}
