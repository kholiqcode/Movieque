const inititalStateBooking = {
  booking: [],
};

export const bookingReducer = (state = inititalStateBooking, action: any) => {
  switch (action.type) {
    case 'SET_BOOKING':
      return {
        ...state,
        booking: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
