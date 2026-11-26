import  HelloWorld from './HelloWorld';
import Counter from './Counter';
import Form from './Form';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[lightyellow] text-4xl font-bold text-orange-600">
      <HelloWorld name="Focus Bear" />
      <div className="text-center [&_button]:bg-orange-500 [&_button]:text-white [&_button]:px-4 [&_button]:py-2 [&_button]:rounded-lg [&_button]:mt-4">
        <Counter />
      </div>
      <Form />
    </div>
  );
}

export default App;
