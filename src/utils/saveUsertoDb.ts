import axios from "axios";
import { showErrorMessage, showSuccessMessage } from "./NotifyToast";

interface IRestData {
    address: string;
    gender: string;
    phone: number;
    role: string;
}

const saveUserToDb = async (
    name: string,
    email: string,
    photoURL: string,
    ...rest: IRestData[]
) => {
    const user = {
        name,
        email,
        img: photoURL,
        address: rest[0]?.address || null,
        gender: rest[0]?.gender || null,
        phone: rest[0]?.phone || null,
        role: rest[0]?.role || "user",
    };

    await axios
        .get(`http://localhost:8000/api/v1/users/${email}`)
        .then((res) => {
            if (res?.data?.email !== email) {
                axios
                    .post(`http://localhost:8000/api/v1/users`, user)
                    .then((res) => {
                        if (res?.data.insertedId) {
                            showSuccessMessage(
                                "🦸 User Data Saved in Database Successfully!"
                            );
                        }
                    })
                    .catch((err) => {
                        showErrorMessage(err.message);
                    });
            }
        })
        .catch((err) => {
            showErrorMessage(err.message);
        });
};

export default saveUserToDb;
