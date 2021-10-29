import { ACT_NAVIGATE } from "./navigation.type";

export function actNavigate(id) {
  return {
    type: ACT_NAVIGATE,
    payload: id,
  };
}
