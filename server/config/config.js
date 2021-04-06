module.exports = {
    PORT: process.env.PORT || 5000,
    LOCAL_DB_URI: "mongodb://localhost:27017/activityFinder",
    ATLAS_DB_URI: "mongodb+srv://testuser:test123123@my-cluster.d6gp1.mongodb.net/activityFinder?retryWrites=true&w=majority",
    SALT_ROUNDS: 9,
    SECRET: "VeryBigSecret12321ImTellingYou9876543TryToFindMeOut8282215"
}