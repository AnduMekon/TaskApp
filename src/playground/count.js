let count = 0; 
const addOne = () => {
    count++;
    renderCounterApp();

 
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
 renderCounterApp();
}

var appRoot = document.getElementById('app');

const renderCounterApp = () => {
 var templateTwo = (
     <div>
     <h1>Count: {count}</h1>
     <button onClick={addOne}> +1</button>
     <button onClick={minusOne}> -1</button>
     <button onClick={reset}> reset</button>
 
     
 
     </div>
 
 );
ReactDOM.render(templateTwo, appRoot)
};
renderCounterApp();
