import "./style.css"
import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}


const Main: FC<Props> = ({ children}) => {

    return (
        <>
            <main>
                {children}
            </main>
        </>
    )

}

export { Main }

/*const Main = () => {
    return <main>
      
    </main>
}

export { Main };*/