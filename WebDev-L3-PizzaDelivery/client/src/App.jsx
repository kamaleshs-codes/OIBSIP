function App() {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center p-6'>
      <div className='bg-surface rounded-2xl shadow-lg p-10 text-center'>
        <h1 className='text-4xl font-bold text-primary'>Pizza Delivery</h1>

        <p className='mt-4 text-text text-lg'>
          Tailwind CSS is configured successfully!
        </p>

        <button className='mt-6 rounded-lg bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-dark transition'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
