
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
        USER:{
            GETUSERBYID: "SELECT * FROM USER WHERE ID=?",
            GETUSERBYLOGINID: "SELECT * FROM USER WHERE LOGIN_ID=?",
            GETALLUSERS: "SELECT * FROM USER",
            INSERTUSER: "INSERT INTO USER (NAME,TITLE,DESIGNATION,ROLE,LOGIN_ID,PASSWORD,UPDATED_BY,UPDATE_TS,STATE) VALUES (?,?,?,?,?,?,?,?,?)",
            UPDATEUSERBYID: "UPDATE USER SET NAME=?, TITLE=?, DESIGNATION=?, ROLE=?, LOGIN_ID=?,PASSWORD=?,UPDATED_BY=?,UPDATE_TS=?,STATE=? WHERE ID=?",
            DELUSERBYID: "UPDATE USER SET STATE=0 WHERE ID=?"
        },
        CONFIG:{
            GETCONFIGBYKEYVAL:"SELECT * FROM CONFIG WHERE CONFIG_KEY=? and CONFIG_VALUE=?"
        }
    },
    DB_QUERY_TYPES:{
        INSERT:"I", UPDATE:"U",LIST:"L",DELETE:"D"
    },
    DBCONFIG:{CLIENTKEY:"CLIENTKEY"},
    ERRORS:{
        REQ_PARAM_MISSING:404
    }

}