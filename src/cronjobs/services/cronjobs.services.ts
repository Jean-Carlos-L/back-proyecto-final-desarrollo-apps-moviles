import { queriesDb } from '../../utils/queriesDb';
import { queriesRemoteDb } from '../../utils/queriesRemoteDb';

const queryGetQueries = `SELECT * FROM sync_database WHERE sync = 0`;
const queryUpdateSyncDatabase = `UPDATE sync_database SET sync = 1 WHERE id = ?`;

const getQueriesDb = async () => {
    const rows = await queriesDb(queryGetQueries);
    return rows;
}

const getQueriesRemoteDb = async () => {
    const rows = await queriesRemoteDb(queryGetQueries);
    return rows;
}

const updateDb = async () => {
    const queries = await getQueriesRemoteDb();
    if (queries.length === 0) {
        return;
    }
    for (const query of queries) {
        await queriesDb(query.query);
        await queriesRemoteDb(queryUpdateSyncDatabase, [query.id]);
    }
}


const updateRemoteDb = async () => {
    const queries = await getQueriesDb();
    if (queries.length === 0) {
        return;
    }
    for (const query of queries) {
        await queriesRemoteDb(query.query);
        await queriesDb(queryUpdateSyncDatabase, [query.id]);
    }
}


export default { getQueriesDb, getQueriesRemoteDb, updateDb, updateRemoteDb };