const ignoreActions = ['DEMO_ACTION_IGNORED', 'DEMO_ACTION_IGNORED_1'];

const actionIgnored = actionType => {
  let isIgnored = false;
  ignoreActions.forEach(ignoreAction => {
    if (~actionType.indexOf(ignoreAction)) isIgnored = true;
  });
  return isIgnored;
};

export const loader = (state = { count: 0 }, { type }) => {
  if (actionIgnored(type)) return state;
  const { count } = state;
  const requestStatus = type.split('_').reverse()[0];
  switch (requestStatus) {
    case 'PENDING':
      return { count: count + 1 };
    case 'FULFILLED':
      return { count: count - 1 };
    case 'REJECTED':
      return { count: count - 1 };
    default:
      return state;
  }
};
