export default function verifyAction(predicate = () => true, strict = false) {
  return () => next => (action) => {
    if(typeof action === 'object' || strict) {
      if(predicate(action)) return next(action);
      console.error(
        `redux-action-validator: attempting to use non-standard-compliant Redux action: ${JSON.stringify(action)}`
      );
      return null;
    }
    console.log(
      `redux-action-validator: could not validate action (not an object), skipping: ${JSON.stringify(action)}`);
    return next(action);
  };
}
