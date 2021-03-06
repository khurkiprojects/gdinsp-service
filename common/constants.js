
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
            INSERTUSER: "INSERT INTO USER (NAME,TITLE,DESIGNATION,ROLE,LOGIN_ID,PASSWORD,UPDATED_BY,UPDATE_TS,STATE) VALUES (?,?,?,?,?,?,?,NOW(),?)",
            UPDATEUSERBYID: "UPDATE USER SET NAME=?, TITLE=?, DESIGNATION=?, ROLE=?, LOGIN_ID=?,UPDATED_BY=?,UPDATE_TS=NOW(),STATE=? WHERE ID=?",
            CHANGEPWDBYID: "UPDATE USER SET PASSWORD=?,UPDATED_BY=?,UPDATE_TS=NOW() WHERE ID=?",
            DELUSERBYID: "UPDATE USER SET STATE=0 WHERE ID=?"
        },
        VILLAGE:{
            GETVILLAGEBYID: "SELECT * FROM VILLAGE WHERE ID=?",
	        GETVILLAGEBYDISTRICT: "SELECT * FROM VILLAGE WHERE DISTRICT=?",
            GETALLVILLAGES: "SELECT * FROM VILLAGE",
            INSERTVILLAGE: "INSERT INTO VILLAGE (NAME,BLOCK,TEHSIL,DISTRICT,UPDATED_BY,UPDATE_TS,STATE) VALUES (?,?,?,?,?,NOW(),?)",
            UPDATEVILLAGEBYID: "UPDATE VILLAGE SET NAME=?, BLOCK=?,TEHSIL=?,DISTRICT=?,UPDATED_BY=?,UPDATE_TS=NOW(),STATE=? WHERE ID=?",
            DELVILLAGEBYID: "UPDATE VILLAGE SET STATE=0 WHERE ID=?"
        },
        VILLAGE_GROUP:{
            GETVILLAGEGROUPBYID: "SELECT * FROM VILLAGE_GROUP WHERE ID=?",
            GETALLVILLAGEGROUPS: "SELECT * FROM VILLAGE_GROUP",
            INSERTVILLAGEGROUP: "INSERT INTO VILLAGE_GROUP (NAME,OFFICER_ID,UPDATED_BY,UPDATE_TS,STATE) VALUES (?,?,?,NOW(),?)",
            UPDATEVILLAGEGROUPBYID: "UPDATE VILLAGE_GROUP SET NAME=?, OFFICER_ID=?, UPDATED_BY=?,UPDATE_TS=NOW(),STATE=? WHERE ID=?",
            DELVILLAGEGROUPBYID: "UPDATE VILLAGE_GROUP SET STATE=0 WHERE ID=?",
        },
        VILLAGE_GROUP_MAP:{
            GETVGVILLAGESBYID: "SELECT * FROM VILLAGE_GROUP_MAP WHERE ID=?",
            INSERTVGVILLAGE: "INSERT INTO VILLAGE_GROUP_MAP (NAME,VILLAGE_GROUP_ID,VILLAGE_ID,UPDATED_BY,UPDATE_TS,STATE) VALUES (?,?,?,?,NOW(),?)",
            DELVGVILLAGEBYID: "DELETE VILLAGE_GROUP_MAP WHERE VILLAGE_ID=?",
            DELVGVILLAGESBYVGID: "DELETE VILLAGE_GROUP_MAP WHERE VILLAGE_GROUP_ID=?"
        },
        INSTITUTION:{
            GETINSTITUTIONBYID: "SELECT * FROM INSTITUTION WHERE ID=?",
            GETALLINSTITUTIONS: "SELECT * FROM INSTITUTION",
            INSERTINSTITUTION: "INSERT INTO INSTITUTION (NAME,VILLAGE_ID,TYPE,HEAD_NAME,ADDRESS,CONTACT,UPDATED_BY,UPDATE_TS,STATE) VALUES (?,?,?,?,?,?,?,NOW(),?)",
            UPDATEINSTITUTIONBYID: "UPDATE INSTITUTION SET NAME=?, VILLAGE_ID=?,TYPE=?,HEAD_NAME=?,ADDRESS=?,CONTACT=?,UPDATED_BY=?,UPDATE_TS=NOW(),STATE=? WHERE ID=?",
            DELINSTITUTIONBYID: "UPDATE INSTITUTION SET STATE=0 WHERE ID=?"
        },
        CHECKLIST:{
            GETCHECKLISTBYID: "SELECT * FROM CHECKLIST WHERE ID=?",
            GETALLCHECKLISTS: "SELECT * FROM CHECKLIST",
            INSERTCHECKLIST: "INSERT INTO CHECKLIST (NAME,TITLE, DESIGNATION, ROLE, LOGIN_ID, PASSWORD, UPDATED_BY, UPDATE_TS, STATE) VALUES (?,?,?,?,?,?,NOW(),?)",
            UPDATECHECKLISTBYID: "UPDATE CHECKLIST SET NAME=?, TITLE=?, DESIGNATION=?, ROLE=?, LOGIN_ID=?,PASSWORD=?,UPDATED_BY=?,UPDATE_TS=NOW(),STATE=? WHERE ID=?",
            DELCHECKLISTBYID: "UPDATE CHECKLIST SET STATE=0 WHERE ID=?"
        },
        CHECKPOINT:{
            GETCHECKPOINTBYID: "SELECT * FROM CHECKPOINT WHERE ID=?",
            GETALLCHECKPOINTS: "SELECT * FROM CHECKPOINT",
            INSERTCHECKPOINT: "INSERT INTO CHECKPOINT (NAME,DESC,INST_TYPE,UPDATED_BY,UPDATE_TS,STATE) VALUES (?,?,?,?,NOW(),?)",
            UPDATECHECKPOINTBYID: "UPDATE CHECKPOINT SET NAME=?, DESC=?, INST_TYPE=?,UPDATED_BY=?,UPDATE_TS=NOW(),STATE=? WHERE ID=?",
            DELCHECKPOINTBYID: "DELETE CHECKPOINT WHERE ID=?",
            DELCHECKPOINTBYCHECKLISTID: "DELETE CHECKPOINT WHERE CHECKLIST_ID=?"
        },
        INSPECTION:{
            GETINSPECTIONBYID: "SELECT * FROM INSPECTION WHERE ID=?",
            GETALLINSPECTIONS: "SELECT * FROM INSPECTION",
            GETALLINSPECTIONSBYVG: "SELECT * FROM INSPECTION WHERE VILLAGE_GROUP_ID=?",
            INSERTINSPECTION: "INSERT INTO INSPECTION (NAME,VILLAGE_GROUP_ID,START_DATE,END_DATE, STATUS, UPDATED_BY,UPDATE_TS,STATE) VALUES (?,?,?,?,?,?,?,NOW(),?)",
            UPDATEINSPECTIONBYID: "UPDATE INSPECTION SET NAME=?, VILLAGE_GROUP_ID=?,START_DATE=?,END_DATE=?, STATUS=?,UPDATE_TS=NOW(),STATE=? WHERE ID=?",
            DELINSPECTIONBYID: "DELETE INSPECTION WHERE ID=?"
        },
        INSPECTION_INSTITUTIONS:{
            GETINSPINSTITUTIONSBYID: "SELECT * FROM INSPECTION_INSTITUTIONS WHERE ID=?",
            GETALLINSPINSTITUTIONSS: "SELECT * FROM INSPECTION_INSTITUTIONS",
            INSERTINSPINSTITUTIONS: "INSERT INTO INSPECTION_INSTITUTIONS (INSPECTION_ID,INSTITUTION_ID,VILLAGE_ID, OFFICER_ID, CHECKLIST_ID,STATUS,UPDATED_BY,UPDATE_TS) VALUES (?,?,?,?,?,?,?,NOW())",
            DELINSPINSTITUTIONBYID: "DELETE INSPECTION_INSTITUTIONS WHERE ID=?",
			DELINSPINSTITUTIONSBYINSPID: "DELETE INSPECTION_INSTITUTIONS WHERE INSPECTION_ID=?",
        },
        INSPECTION_CHECKPOINTS:{
            GETINSPCHECKPOINTSBYID: "SELECT * FROM INSPECTION_CHECKPOINTS WHERE ID=?",
            GETALLINSPCHECKPOINTSS: "SELECT * FROM INSPECTION_CHECKPOINTS",
            INSERTINSPCHECKPOINTS: "INSERT INTO INSPECTION_CHECKPOINTS (INSPECTION_ID,INSTITUTION_ID,CHECKPOINT_ID, CHECKPOINT_DATA_TYPE, IS_ADHERED,COUNTER,REMARKS,UPDATED_BY,UPDATE_TS) VALUES (?,?,?,?,?,?,?,?,NOW())",
			UPDATEINSPCHECKPOINTYID: "UPDATE INSPECTION_CHECKPOINTS SET INSPECTION_ID=?,INSTITUTION_ID=?,CHECKPOINT_ID=?, CHECKPOINT_DATA_TYPE=?, IS_ADHERED=?,COUNTER=?,REMARKS=?,UPDATE_TS=NOW(),STATE=? WHERE ID=?",
            DELINSPCHECKPOINTBYID: "DELETE INSPECTION_CHECKPOINTS WHERE ID=?",
			DELINSPCHECKPOINTSBYINSPID: "DELETE INSPECTION_CHECKPOINTS WHERE INSPECTION_ID=?",
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
        REQ_PARAM_MISSING:404,
        SQL_QUERY_ERROR:405
    }

}