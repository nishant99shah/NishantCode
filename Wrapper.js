const increment = Wrapper => { 

     const TestComponent = props => {
         const a = props.a+1
         const b = props.b+1
    return (
          <Wrapper a={a} b={b} {...props} />
     );
   }
   
  return TestComponent;
 }
