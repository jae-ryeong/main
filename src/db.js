require('dotenv').config();
const mongoose = require('mongoose');

// 데이터 베이스 연결
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true });

// 이벤트 이미터 생성
const db = mongoose.connection;

// 에러, 연결 시 처리
db.on('error', err => console.log('Error on connection:\n', err.message));
db.on('open', () => console.log('Connected to mongoose.'));

module.exports = db;