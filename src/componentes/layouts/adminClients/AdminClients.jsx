import AdminNavbar from "../../adminNavbar/AdminNavbar";
import UserListComponent from "../../UserList/UserListComponent";


export default function AdminClients() {
  return (
      <div style={{display:"flex", backgroundColor: "rgb(33, 32, 32)"}}>
          <AdminNavbar />
          <section>
              <UserListComponent/>
          </section>
    </div>
  )
}
