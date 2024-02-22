type UserData = {
    email: string;
    username: string;
    password: string;
}

const CreateUser = async (data: UserData) => {
    const {email,username,password} = data
    const response = await fetch("/api/customer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email,username,password}),
    });
    const res = await response.json();
    return res;
}

export default CreateUser;
