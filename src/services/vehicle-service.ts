import  {db} from '../connection'

export const getCountries = async () => {
    return await db.query('SELECT * FROM Vehicle')
}

export async function getVehicleById(id: number) {
    return await db.any('SELECT * FROM Vehicle WHERE id = $1', [id])
}

export const saveVehicle = async (country: any) => {
    return await db.one('INSERT INTO Vehicle(' +
        'capital, ' +
        'code, ' +
        'continent, ' +
        'description, ' +
        'nationality) ' +
        'VALUES ($1, $2, $3, $4, $5)',
        [country.capital, country.code, country.continent, country.description, country.nationality])
}

export const updateVehicle = async (id:number, country: any) => {
    return await db.one('UPDATE Vehicle SET capital = $1, code = $2, continent = $3, description = $4, nationality = $5 ' +
        'WHERE id = $6',
        [country.capital, country.code, country.continent, country.description, country.nationality, id])
}

export const deleteVehicle = async (id:number) => {
    return await db.any('DELETE FROM Vehicle WHERE id = $1', [id])
}
