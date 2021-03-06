import query from './categoryQuery';
import db from '../db';

async function getCategory(data: Array<any>) {
  try {
    const [rows, fields] = await db.connection.promise().query(query.searchCategory, data);
    return rows;
  } catch (e) {
    console.log('dao: getCategory error\n' + e);
  }
}

async function createCategory(data: Array<any>) {
  try {
    const [rows, fields] = await db.connection.promise().query(query.createCategory, data);
    return rows;
  } catch (e) {
    console.log('dao: createCategory error\n' + e);
    throw e;
  }
}

async function deleteCategory(data: Array<any>) {
  try {
    const [rows, fields] = await db.connection.promise().query(query.deleteCategory, data);
    if (rows.affectedRows === 0) {
      throw 'cannot find';
    }
    return rows;
  } catch (e) {
    console.log('dao: deleteCategory error\n' + e);
    throw e;
  }
}

export default {
  getCategory, createCategory, deleteCategory
}