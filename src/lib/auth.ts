type UserData = {
  email: string;
  username: string;
  password: string;
};

export const CreateUser = async (data: UserData) => {
  const { email, username, password } = data;
  const response = await fetch("/api/customer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, password }),
  });
  const res = await response.json();
  return res;
};

export const validateUser = async (value: string, key: string) => {
  const response = await fetch("/api/customer/sameUsername", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value, key }),
  });
  const res = await response.json();
  return res;
};

export const LoginUser = async (data: any): Promise<any> => {
  const response = await fetch("/api/customer", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res;
};
