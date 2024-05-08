export class LocalStorageAccess {
  static getToken() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  }

  static setToken(token: string) {
    localStorage.setItem("token", token);
  }

  static removeToken() {
    localStorage.removeItem("token");
  }
}
