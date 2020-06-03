import path from 'path'

export const client = 'sqlite3'
export const connection = { filename: path.resolve(__dirname, 'database.sqlite') }
export const migrations = { directory: path.resolve(__dirname, 'src', 'database', 'migrations') }
export const seeds = { directory: path.resolve(__dirname, 'src', 'database', 'seeds') }
export const useNullAsDefault = true

export default { client, connection, migrations, seeds, useNullAsDefault }
