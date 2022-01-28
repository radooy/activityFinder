module.exports = {
    PORT: process.env.PORT || 5000,
    LOCAL_DB_URI: "mongodb://localhost:27017/activityFinder",
    ATLAS_DB_URI: "mongodb+srv://test:test1234@cluster0.izxkx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    SALT_ROUNDS: 9,
    SECRET: "VeryBigSecret12321ImTellingYou9876543TryToFindMeOut8282215"
}