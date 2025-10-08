# TvTrivia
## Pages
-   Auth (login, signUp)
-   Homepage/Leaderboard/Instructions
-   Profile / admin dashboard
    - user your scores
    - admin, categories, questions
-   Question Form Page creating/editing questions
-   Game Page

### Auth Tools:
-   createContext
-   useContext
-   react-cookie
-   axios
-   useMemo


### Auth Steps:
1.  ✅Create Context folders & files
    -   import react-cookie
    -   import createContext, useContext, useMemo
    -   import axios
2.  ✅Created Context
3.  ✅Create AuthProvider Compoment (will be wrapped around main.jsx (or if other context around main provider component))
    -   set up useCookies()
    -   create login, signUp, logout functions
    -   create value with useMemo
    -   Provide value in Context.Provider component
4.  ✅Opt: create optional function for useContext
5.  ✅Wrap App in AuthProvider
6.  In Forms: Handle State, handleChange, handleSubmit, handle navigate
7.  Create Protected Routes component