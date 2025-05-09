import React from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import NavBar from "./containers/NavBar/NavBar";
import PostsPage from "./pages/PostPage/PostsPage";
import PostDetailPage from "./pages/PostDetailPage/PostDetailPage";
import InteractedPostPage from "./pages/InteractedPostPage/InteractedPostPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "./components/ui/sonner";

function App() {
    const UseNavBar = ({ children }: { children: React.ReactNode }) => {
        return (
            <div className="root-container relative w-full min-h-screen h-full bg-theme-primary place-items-center">
                <NavBar />
                <div className="content-container py-12 px-10 w-full place-items-center">
                    {children}
                </div>
                <Toaster />
            </div>
        );
    };

    return (
        <>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/posts"
                            element={
                                <UseNavBar>
                                    <PostsPage />
                                </UseNavBar>
                            }
                        />
                        <Route
                            path="/post/detail/:id"
                            element={<PostDetailPage />}
                        />
                        <Route
                            path="/add-new-post"
                            element={
                                <UseNavBar>
                                    <InteractedPostPage />
                                </UseNavBar>
                            }
                        />
                        <Route
                            path="/edit-post/:id"
                            element={
                                <UseNavBar>
                                    <InteractedPostPage />
                                </UseNavBar>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
