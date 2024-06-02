import { queriesDb } from '../../utils/queriesDb';

const queryUpdateSyncDatabase = `UPDATE sync_database SET sync = 1 WHERE id = ?`;

const getRemoteQueries = async () => {
    const query = `SELECT * FROM sync_database WHERE sync = 0`;
    const rows = await queriesDb(query);
    return rows;
}

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

export default { updateRempoteQueries };