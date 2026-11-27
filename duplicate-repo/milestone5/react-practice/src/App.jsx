import HelloWorld from './HelloWorld';
import Counter from './Counter';
import Form from './Form';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[lightyellow] py-8">
        <div className="flex flex-col items-center text-xl">
          <nav className="flex gap-10 font-bold text-orange-600">
            <Link to="/" className="hover:underline"> Home</Link>
            <Link to="/profile" className="hover:underline"> Profile</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <div className="flex flex-col items-center gap-4 mt-70">
          <HelloWorld name="Focus Bear" />
          <div className="text-center [&_button]:bg-orange-500 [&_button]:text-white [&_button]:px-4 [&_button]:py-2 [&_button]:rounded-lg [&_button]:mt-4">
            <Counter />
          </div>
        </div>
        <Form />
      </div>
    </BrowserRouter>
  );
}

export default App;
