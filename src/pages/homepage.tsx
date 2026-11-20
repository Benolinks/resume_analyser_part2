import Header  from "../components/header.tsx"
import Home  from "../components/home.tsx"
import Uploads from "../components/uploads.tsx"
const Homepage = () => {
  return (
    <main>
      <div>
        <Header/>
        <Home/>
        <Uploads/>
      </div>
    </main>
  )
}

export default Homepage
