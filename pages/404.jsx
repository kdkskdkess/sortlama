import { useRouter } from "next/router";

export default function App() {
    const router = useRouter()
    React.useEffect(() => {
        router.push("/")
    }, [])
    return ( <> </> )
}