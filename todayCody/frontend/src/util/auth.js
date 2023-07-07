import { redirect } from "react-router-dom";
import jwt from "jsonwebtoken";

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  //로컬스토리지에 저장된 만료 시간을 ms로 환산한 시간에서 현재시간을 ms로 환산한 시간을 뺌
  const duration = expirationDate.getTime() - now.getTime(); //단위 ms
  console.log(duration);
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  //남은 시간뿐 아니라 토큰의 유무도 확인해야한다.
  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  //만약 duration이 음수이면 이미 만료 되었으므로 token에 "EXPIRED"을 return함
  //로그아웃을 트리거 할 수 있음
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function tokenLoader() {
  console.log("이것저것 만지는중");
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/signin");
  }

  return null;
}

export function decodeToken(token) {
  const id = jwt.decode(token);
  return id;
}
