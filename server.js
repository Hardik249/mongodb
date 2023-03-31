// const { MongoClient } = require('mongodb');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('test', '', '', {
  dialect: 'mongodb',
  dialectOptions: {
    // Your mariadb options here
    // connectTimeout: 1000
  }
});