import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AdvanceFormValidation from "./components/AdvanceFormValidation";

function App() {
  return (
    <div className="App">
      {/** 
      
      https://gist.github.com/toofaniCoder/567ba64b9d8422b765b2a73cafb8157b
      https://www.youtube.com/watch?v=J6Enwuf6vBA&list=PLgzD0aHYwynIkIUlk6BqqNlPgH25vLjPJ&index=1
      
      <BasicForm></BasicForm> */}

      {/**
      
      Dunamic Form : https://www.youtube.com/watch?v=7fupPfocNy4&list=PLgzD0aHYwynIkIUlk6BqqNlPgH25vLjPJ&index=2
      
     
      <DynamicForm></DynamicForm>

       */}

      {/** 
        
        Form Validation : https://www.youtube.com/watch?v=AOqPM_c94PQ&list=PLgzD0aHYwynIkIUlk6BqqNlPgH25vLjPJ&index=3 
      
      <FormValidation></FormValidation>
      


      {/** 
        Form Advacne Validation Passowrd Match
        https://www.youtube.com/watch?v=VzrAbENZeRM&list=PLgzD0aHYwynIkIUlk6BqqNlPgH25vLjPJ&index=4
*/}
      <AdvanceFormValidation></AdvanceFormValidation>
    </div>
  );
}

export default App;
