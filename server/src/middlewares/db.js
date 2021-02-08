import mongoose from 'mongoose';

const dbConn = () => {
  mongoose.connect(
    `${process.env.DB_URI}/${process.env.DB_NAME}`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) console.error(err);
      console.log('DB CONNECTED');
    },
  );
};

export default dbConn;
