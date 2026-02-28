import { Pool } from 'pg';
import "dotenv/config";

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});


async function query(sql,values = []) {

 try {
  
  const result = await pool.query(sql,values);
  return result;

 } catch (error) {

  console.error('DB query error: ',{
    message: error.message,
    sql,
    values,
  });

  throw error;

 }

}

async function closePool(){
  try {
    await pool.end();
  } catch (error) {
    console.error('Error closing DB pool: ', error.message);
  }
}

export {query,closePool};