const connection = require('../configs/database');
module.exports = {
    onProvinces(){
        return new Promise((resolve, reject)=>{
           
            connection.query('SELECT * FROM provinces', (error, result) => {
                if (error) reject(error);
                resolve(result);

            })
        });
    },
    onDistricts(districts){
        return new Promise((resolve, reject)=>{
           
            connection.query('SELECT * FROM districts where province_id = '+districts, (error, result) => {
                if (error) reject(error);
                resolve(result);

            })
        });
    },
    onSubdistricts(subdistricts){
        return new Promise((resolve, reject)=>{
           
            connection.query('SELECT * FROM subdistricts where district_id = '+subdistricts, (error, result) => {
                if (error) reject(error);
                resolve(result);

            })
        });
    }
}
