import { fireBase } from "../components/utils/axios";
import {User} from "../type"

const add = async (serviceUser: User) => {
    const user = {
        name: "Julieta",
        lastname: "Maldonado"
    }

    const response = await fireBase.post('/user.json', user)
    console.log(response)

}

const get = async () => {
    const response = await fireBase.get('/users.json')
return response.data
}


export const serviceUser = {add, get}