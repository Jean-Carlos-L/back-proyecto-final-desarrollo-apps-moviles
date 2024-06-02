import { queriesDb } from '../../utils/queriesDb';
import { Sync } from '../models/syc.model';

const queryUpdateSyncDatabase = `UPDATE sync_database SET sync = 1 WHERE id = ?`;

const getRemoteQueries = async () => {
    const query = `SELECT * FROM sync_database WHERE sync = 0`;
    const rows = await queriesDb(query);
    return rows;
}

// Actualiza las queries que se encuentran en la base de datos remota
const updateRempoteQueries = async () => {
    const queries = await getRemoteQueries();
    if (queries.length === 0) {
        return;
    }
    for (const query of queries) {
        await queriesDb(queryUpdateSyncDatabase, [query.id]);
    }

    return queries;
}


// Ejecuta las queries locales en la base de datos remota
const updateRemoteWithLocalQueries = async (queries: Sync[]) => {
    if (queries.length === 0) {
        return;
    }
    for (const query of queries) {
        await queriesDb(query.query);
    }
    return queries;

}

export default { updateRempoteQueries, updateRemoteWithLocalQueries };