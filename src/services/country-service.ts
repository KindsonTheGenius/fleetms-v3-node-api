import  {db} from '../connection'

export const getCountries = async () => {
    return await db.query('SELECT * FROM Country')
}

export async function getCountryById(id: number) {
    return await db.any('SELECT * FROM Country WHERE id = $1', [id])
}

export const saveCountry = async (country: any) => {
    return await db.one('INSERT INTO Country(capital, code, continent, description, nationality) ' +
        'VALUES ($1, $2, $3, $4, $5)',
        [country.capital, country.code, country.continent, country.description, country.nationality])
}

export const updateCountry = async (id:number, country: any) => {
    return await db.one('UPDATE Country SET capital = $1, code = $2, continent = $3, description = $4, nationality = $5 ' +
        'WHERE id = $6',
        [country.capital, country.code, country.continent, country.description, country.nationality, id])
}

export const deleteCountry = async (id:number) => {
    return await db.any('DELETE FROM Country WHERE id = $1', [id])
}
