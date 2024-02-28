import {registerAs} from "@nestjs/config";

export enum ConfigKeys {
  App = "App",
  Db = "Db",
  Jwt = "Jwt",
}

const AppConfig = registerAs(ConfigKeys.App, () => ({
  port: 3000,
}));
const JwtConfig = registerAs(ConfigKeys.Jwt, () => ({
  accessTokenSecret: "86990241c691c00c02fc8383d3ed75117857fbec",
  refreshTokenSecret: "111e8805762331d2b72eeaadea3be3eae513a337",
}));
const DbConfig = registerAs(ConfigKeys.Db, () => ({
  port: 5432,
  host: "localhost",
  username: "postgres",
  password: "root",
  database: "auth-otp",
}));

export const configurations = [AppConfig, DbConfig, JwtConfig];
