import mysql = require("mysql");

export default class MySQL {
    private static _instance: MySQL;

    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor(){
        console.log("Clase inicializada");

        this.cnn = mysql.createConnection({
            host     : 'localhost',
            user     : 'node_db',
            password : '123456',
            database : 'node_db'
          });

        this.conectarDB();

    }; // end constructor

    public static get instance(){
        return this._instance || ( this._instance  = new MySQL() ) ;
        // return this._instance || ( this._instance  = new this() ) ;
    };

    static ejecutarQuery(query:string, callback: Function){
        this.instance.cnn.query( query, (err, results: Object[], fields ) => {
            if( err ){
                console.log("Hay un error en la query\n", err);
                return callback( err );
            };
            if(results.length === 0){
                console.log("No se encuentra el registro con el id solicitado");
            } else{
                callback (null, results);
            }
        });
    };



    private conectarDB( ){
        this.cnn.connect( (err)=> {
            if(err){
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log("Base  de datos online");

        });
    }; // end conectarDB


};