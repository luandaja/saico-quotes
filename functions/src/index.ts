import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
// const serviceAccount = require('../credentials.json');
admin.initializeApp();

const whitelist = [
  'http://localhost:4200',
  'https://saico-quotes.firebaseapp.com'
];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const corsHandler = cors(corsOptions);

export const getRandomQuote = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    try {
      const db = admin.firestore();
      const quotes = (await db.doc('general-info/quotes').get()).data().quotes;
      const quoteId = quotes[getRandomInt(1, quotes.length + 1)];
      const quote = await db.doc(`quotes/${quoteId}`).get();
      const quoteRespose = { ...quote.data(), id: quoteId };
      return response.json(quoteRespose);
    } catch (err) {
      return response.send(err);
    }
  });
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// export const addQuoteId = functions.firestore
//   .document('quotes/{quoteId}')
//   .onCreate(async (data, context) => {
//     const quoteId = context.params.quoteId;

//     const db = admin.firestore();
//     const quotesInfoRef = db.doc('general-info/quotes');
//     const quotes = (await quotesInfoRef.get()).data().quotes || [];

//     quotes.push(quoteId);

//     return quotesInfoRef.update({ quotes: quotes });
//   });

export const removeQuoteId = functions.firestore
  .document('quotes/{quoteId}')
  .onDelete(async (data, context) => {
    const quoteId = context.params.quoteId;

    const db = admin.firestore();
    const quotesInfoRef = db.doc('general-info/quotes');
    let quotes = (await quotesInfoRef.get()).data().quotes || [];

    quotes = quotes.filter(q => q !== quoteId);

    return quotesInfoRef.update({ quotes: quotes });
  });

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
