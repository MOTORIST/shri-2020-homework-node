const initialState = {
  isSetSettings: false,
};

export function common(state = initialState, action) {
  const { type } = action;

  switch (type) {
    default:
      return initialState;
  }
}
