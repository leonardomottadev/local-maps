import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    "type":"sqlite",
    "database":"database/app.sqlite",
    "synchronize": true,
    "logging": true,
    "entities": ["src/entity/**/*.ts"],
    "migrations": ["src/migration/**/*.ts"],
    "subscribers": ["src/subscriber/**/*.ts"]
})