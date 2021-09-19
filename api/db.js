const mongoose = require('mongoose');

// 데이터 베이스 연결
mongoose.connect(process.env.MONGODB_CONNECTION || 'mongodb://172.22.0.2:27016', { useNewUrlParser: true })

// 이벤트 이미터 생성
const db = mongoose.connection

// 에러, 연결 시 처리
db.on('error', err => console.error(`Error on connection:\n${err.message}`));
db.once('open', () => console.log('Database connected.'));

module.exports = db;