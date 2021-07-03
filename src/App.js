import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ImageFormValidation from "./components/ImageFormValidation";

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
      
*/}

      {/** 
        Form Advacne Validation Passowrd Match
        https://www.youtube.com/watch?v=VzrAbENZeRM&list=PLgzD0aHYwynIkIUlk6BqqNlPgH25vLjPJ&index=4
<AdvanceFormValidation></AdvanceFormValidation>

      */}

      {/**
      
      Form Data Auto Fillup using Api Calling 
      https://youtu.be/zGC0qe27PKs?list=PLgzD0aHYwynIkIUlk6BqqNlPgH25vLjPJ

       <FromReset></FromReset>
      
      */}

      {/** 
      
      Form Context emxample for big form

      https://youtu.be/YKVZvkkfsgc?list=PLgzD0aHYwynIkIUlk6BqqNlPgH25vLjPJ

       <FormProvider {...methods}>
        <div className="container py-4">
          <ContextFormMain methods={methods} />
        </div>
      </FormProvider>
      
      */}

      {/**
      
      File Upload Demo : 
      https://www.youtube.com/watch?v=b9u62SI90ok&list=PLgzD0aHYwynIkIUlk6BqqNlPgH25vLjPJ&index=7
      
      */}

      <ImageFormValidation></ImageFormValidation>
    </div>
  );
}

export default App;
