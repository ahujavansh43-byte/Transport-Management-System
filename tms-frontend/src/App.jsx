import AppRouter from "./routes/AppRouter";

function App() {
  return <AppRouter />;
}

export default App;


// import useAuth from "./features/auth/hooks/useAuth";

// function App() {

//   const { user, loading } = useAuth();

//   console.log(user);
//   console.log(loading);

//   return (
//     <>
//       Your Existing App
//     </>
//   );
// }

// export default App;