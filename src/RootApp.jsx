import './assets/style/main.css'
import { Route, Routes } from 'react-router-dom'

// import { AppHeader } from './cmps/AppHeader.jsx'
// import { AppFooter } from './cmps/AppFooter.jsx'

// import { HomePage } from './pages/HomePage.jsx'
// import { AboutUs } from './pages/AboutUs.jsx'
// import { ToyIndex } from './pages/ToyIndex.jsx'

// import { ToyEdit } from './pages/ToyEdit.jsx'
// import { ToyDetails } from './pages/ToyDetails.jsx'
// import { UserDetails } from './pages/UserDetails.jsx'


export function RootApp() {

    return (
        <section className="app">
            {/* <AppHeader /> */}
            <main className='main-layout'>
                <Routes>
                    {/* <Route element={<HomePage />} path="/" /> */}
                    {/* <Route element={<AboutUs />} path="/about" /> */}
                    {/* <Route element={<ToyIndex />} path="/Toy" /> */}
                    {/* <Route element={<ToyEdit />} path="/Toy/edit" /> */}
                    {/* <Route element={<ToyEdit />} path="/Toy/edit/:toyId" /> */}
                    {/* <Route element={<ToyDetails />} path="/Toy/:toyId" /> */}
                    {/* <Route element={<UserDetails />} path="/user/:userId" /> */}
                </Routes>
            </main>
            {/* <AppFooter /> */}
        </section>
    )
}