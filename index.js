const axios = require('axios');

// Bot token ve kendi Telegram kullanıcı ID'n
const BOT_TOKEN = '7974198398:AAFbWqzqQwi6CLZ4yekmj23MFBVOPWyxSLI';
const CHAT_ID = '8010335916';
const MESSAGE = '💧 Su içmeyi unutma!';

// Telegram mesaj gönderme fonksiyonu
const sendMessage = async () => {
  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    await axios.post(url, {
      chat_id: CHAT_ID,
      text: MESSAGE,
    });
    console.log('✅ Mesaj gönderildi:', new Date().toLocaleTimeString());
  } catch (err) {
    console.error('❌ Mesaj gönderilemedi:', err.response?.data || err.message);
  }
};

// 30 dakikada bir mesaj gönder
console.log('💧 Su hatırlatma botu başlatıldı...');
sendMessage(); // Uygulama başladığında hemen mesaj at
setInterval(sendMessage, 30 * 60 * 1000); // 30 dakika = 1800000 ms
