import RegisterForm from "./pages/RegisterForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        
        <h2 className="text-xl font-semibold mb-4 text-center">
          Register
        </h2>

        <RegisterForm />
        
      </div>
    </div>
  );
}

export default App;