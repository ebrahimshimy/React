import logo from './logo.svg';
import './App.css';
import FunctionalProps from './component/FunctionalProps';
import ParentComponent from './component/FunctionalProps';
import QuantityComponent from './component/QuantityComponent';
import Products from './component/Products';
import SubscrComponent from './component/SubscrComponent';
function App() {
  return (
    <div className="App">
     {/* <FunctionalProps
       name="Ebrahim elshimy"
       age={33}
       location="6 October- Down Town"
       occupation="Mechanical Engineer"
     >
       <p>Here is a child element passed from parent component.</p>
      </FunctionalProps> */}
      {/* {<ClassProps id={1} product="One" />} */}
      {/* <QuantityComponent/> */}
      {/* <Products/> */}
      <SubscrComponent/>
    </div>
  );
}

export default App;
