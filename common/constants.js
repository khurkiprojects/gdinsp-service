
module.exports = {
    RESULTS:{
        SUCCESS:"SUCCESS",
        FAILURE:"FAILURE"    
    },
    DB:{
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'db_gdinsp'
    },
    DB_QUERIES:{
        GETUSERBYID: "SELECT * FROM USER WHERE ID=?",
        GETUSERBYLOGINID: "SELECT * FROM USER WHERE LOGIN_ID=?",
        GETALLUSERS: "SELECT * FROM USER",
    }

}