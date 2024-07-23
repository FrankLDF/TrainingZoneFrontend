import AdminPage from "../layouts/AdminPage";
import { useContext } from "react"
import ContextData from "../../context/ContextData"
import NotFound from "../pages/NotFound"

export default function HomePage() {
  const { userData } = useContext(ContextData)
  return (
    <main>
      {userData.tipo_usuario === 1 ?
        <AdminPage />
        : userData.tipo_usuario === 2 ?
          <AdminPage/>:<NotFound/>
      }
    </main>
  )
}
