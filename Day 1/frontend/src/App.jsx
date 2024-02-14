import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/Contact";
import AdminDash from "./Pages/AdminDash/Dashboard";
import UserDash from "./Pages/UserDash/Dashboard";
import UsersAdmin from "./Pages/AdminDash/Users";
import CreateAcademy from "./Pages/AdminDash/CreateAcademy";
import AddCourse from "./Pages/AdminDash/AddCourse";
import Academy from "./Pages/AdminDash/Academy";
import Course from "./Pages/AdminDash/Course";
import Profile from "./Pages/AdminDash/Profile";
import UserProfile from "./Pages/UserDash/Profile";
import UserBrowseCourses from "./Pages/UserDash/Course";
import UserBrowseAcademy from "./Pages/UserDash/Academy";
import { useState } from "react";
import UserProvider from "./Components/Context/UserProvider";
import Logout from "./Pages/Logout";
import EditAcademy from "./Pages/AdminDash/AcademyEdit";
import CourseEdit from "./Pages/AdminDash/CourseEdit";
import AcademyCourses from "./Pages/AdminDash/AcademyCourses";
import UserAcademyCourses from "./Pages/UserDash/AcademyCourses";
import CourseUsers from "./Pages/AdminDash/CourseUsers";

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          {user ? (
            <>
              <>
                <Route path="/dashboard/user" element={<UserDash />} />
                <Route
                  path="/dashboard/user/profile"
                  element={<UserProfile />}
                />
                <Route
                  path="/dashboard/user/courses"
                  element={<UserBrowseCourses />}
                />
                <Route
                  path="/dashboard/user/academies"
                  element={<UserBrowseAcademy />}
                />
                <Route
                  path="/dashboard/user/academy/courses"
                  element={<UserAcademyCourses />}
                />
              </>
              <>
                <Route path="/dashboard/admin" element={<AdminDash />} />
                <Route
                  path="/dashboard/admin/create-academy"
                  element={<CreateAcademy />}
                />
                <Route
                  path="/dashboard/admin/courses/users"
                  element={<CourseUsers />}
                />
                <Route
                  path="/dashboard/admin/academy/edit"
                  element={<EditAcademy />}
                />
                <Route
                  path="/dashboard/admin/academy/courses"
                  element={<AcademyCourses />}
                />
                <Route
                  path="/dashboard/admin/course/edit"
                  element={<CourseEdit />}
                />
                <Route
                  path="/dashboard/admin/add-course"
                  element={<AddCourse />}
                />
                <Route path="/dashboard/admin/users" element={<UsersAdmin />} />

                <Route path="/dashboard/admin/profile" element={<Profile />} />
                <Route
                  path="/dashboard/admin/academies"
                  element={<Academy />}
                />
                <Route path="/dashboard/admin/courses" element={<Course />} />
              </>
              <Route path="/logout" element={<Logout />} />
            </>
          ) : (
            <></>
          )}
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
