import AdminNavbar from "../../adminNavbar/AdminNavbar";
import MembershipForm from "../../MermbershipForm/MembershipForm";
import RegisterForm from "../../registerForm/RegisterForm";
import { useState } from "react";

export default function AdminRegister() {
    const [userPendin, setUserPendin] = useState(null)
    console.log(userPendin)
  return (
    <div style={{ display: "flex", backgroundColor: "rgb(33, 32, 32)" }}>
      <AdminNavbar />
          <section style={{ flexGrow: 1 }}>
              {!userPendin
                  ?
                  <RegisterForm setUserPendin={setUserPendin} />
              :
              <MembershipForm userPendin={userPendin} setUserPendin={setUserPendin}/>
              }
      </section>
    </div>
  );
}
