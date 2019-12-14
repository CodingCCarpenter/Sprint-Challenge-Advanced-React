- [ ] Why would you use class component over function components (removing hooks from the question)?

    Before hooks, class components were the way to implement stateful logic by extending the Compoennt class in React. 
    Since class components were the only way to handle state for so long, they may be encountered often in the workforce.

- [ ] Name three lifecycle methods and their purposes.

    1. constructor()- This method is called before mounting the component to the DOM. You initialize state and add event handlers in the cunstructor function.
    2. render()- This method is called when you want to Render the JSX from the components to the DOM. 
    3. componentDidMount()- This function is invoked when (immediately after, to be specific) the component is mounted to the DOM. 
    4.componentWillUnmount()- This method is invoked right before the component is unmounted and destroyed. Use this method to perform any cleanup like clearing timers, cancelling network requests, or cleaning any subscriptions created in componentDidMount();

- [ ] What is the purpose of a custom hook?

    The purpose of a custom hook is to give us a way to reuse stateful logic. With custom hooks, we are able to isolate all state and effect changes.

- [ ] Why is it important to test our apps?

    Testing is a vital factor in the development process. It allows us to ensure that we are shipping working code that will work consistently for all users.