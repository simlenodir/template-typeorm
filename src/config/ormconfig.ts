import path from "path"
import { DataSource } from "typeorm"

const dataSource = new DataSource({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    database: 'test',
    username: 'postgres',
    password: 'nodir',
    entities: [path.resolve(__dirname, '..', "entities", "*.entity.{ts,js}")],
    migrations: [path.resolve(__dirname, '..', "migrations", "**/*.{ts,js}")],
    logging: true,  
    synchronize: false
})

export default dataSource