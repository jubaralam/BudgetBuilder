// import { auth } from "./services/config";
// import { onAuthStateChanged } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { setUser, clearUser } from "./store/authSlice";
import { useEffect } from "react";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthListener from "./services/AuthListener";
import { Provider } from "./components/ui/provider";
const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) dispatch(setUser(user));
  //     else dispatch(clearUser());
  //   });
  //   return () => unsubscribe();
  // }, []);

  return (
    <BrowserRouter>
      <Provider>
        <AuthListener />
        <AllRoutes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
