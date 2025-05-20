const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://kylahkerr34:pdk54M3dnANjHG6S@cluster0.t9nxgoz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

const databaseConnection = {
    client: client,
    run: async function() {
        try {
            await client.connect();
            db = client.db('ancestorsArchive');
            console.log("✅ Connected to MongoDB");
        } catch (error) {
            console.error("❌ Database connection failed:", error);
        }
    },
    getDb: function() {
        return db;
    }
};

module.exports = databaseConnection;
