import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  blob?: string | null;
  age?: number | null;
  cls?: string | null;
};
