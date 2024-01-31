import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Contact from "./Pages/Contact";
import AdminDash from "./Pages/AdminDash/Dashboard";
import UserDash from "./Pages/UserDash/Dashboard";
import UsersAdmin from "./Pages/AdminDash/Users";
import UsersAdminEdit from "./Pages/AdminDash/UsersEdit";
import CreateAcademy from "./Pages/AdminDash/CreateAcademy";
import AddCourse from "./Pages/AdminDash/AddCourse";
import Academy from "./Pages/AdminDash/Academy";
import Course from "./Pages/AdminDash/Course";
import Profile from "./Pages/AdminDash/Profile";
import UserProfile from "./Pages/UserDash/Profile";
import UserBrowseCourses from "./Pages/UserDash/Course";
import UserBrowseAcademy from "./Pages/UserDash/Academy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard/admin" element={<AdminDash />} />
        <Route
          path="/dashboard/admin/create-academy"
          element={<CreateAcademy />}
        />
        <Route path="/dashboard/admin/add-course" element={<AddCourse />} />
        <Route path="/dashboard/admin/users" element={<UsersAdmin />} />
        <Route
          path="/dashboard/admin/users/edit"
          element={<UsersAdminEdit />}
        />
        <Route path="/dashboard/admin/profile" element={<Profile />} />
        <Route path="/dashboard/admin/academies" element={<Academy />} />
        <Route path="/dashboard/admin/courses" element={<Course />} />
        <Route path="/dashboard/user" element={<UserDash />} />
        <Route path="/dashboard/user/profile" element={<UserProfile />} />
        <Route path="/dashboard/user/courses" element={<UserBrowseCourses />} />
        <Route
          path="/dashboard/user/academies"
          element={<UserBrowseAcademy />}
        />
      </Routes>
    </Router>
  );
}

export default App;
