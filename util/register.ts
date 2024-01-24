import { generateRandomString } from "./randomString";
import { Auth } from "aws-amplify";

export const AuthRegistration = async ({
  email,
  password,
  given_name,
  family_name,
  birthdate,
  phone_number,
  website,
  address,
}) => {
  try {
    const register = await Auth.signUp({
      username: email,
      password,
      attributes: {
        given_name,
        family_name,
        birthdate,
        phone_number,
        website,
        address,
        zoneinfo: generateRandomString(10),
      },
      autoSignIn: {
        enabled: true,
      },
    });

    return register;
  } catch (error) {
    throw error;
  }
};
