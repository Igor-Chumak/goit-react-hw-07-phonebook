export const handleGetContacts = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

export const handleAddContact = (state, action) => {
  state.isLoading = false;
  state.items.unshift(action.payload);
};

export const handleDeleteContact = (state, action) => {
  state.isLoading = false;
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleFulfilled = state => {
  state.isLoading = false;
};
