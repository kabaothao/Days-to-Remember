

export const removeEventId = (_Id) => {
    const removeOneEvent = localStorage.getItem('saved_events')
      ? JSON.parse(localStorage.getItem('saved_events'))
      : null;
  
    if (!removeOneEvent) {
      return false;
    }

    //TODO: stuck on here
  
    const updatedSavedEventIds = removeOneEvent?.filter((savedBookId) => savedBookId !== bookId);
    localStorage.setItem('saved_events', JSON.stringify(updatedSavedEventIds));
  
    return true;
  };