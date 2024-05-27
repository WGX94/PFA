import "./dashboard.scss"
import { useAuth } from "../../components/contexts/authContext"


const Dashboard = () => {
    const { currentUser } = useAuth()
    return (
        <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
    )
}

export default Dashboard