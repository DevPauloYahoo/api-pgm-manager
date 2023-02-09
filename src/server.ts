import app from './app';
import { appDatasource } from './data-source';

const main = async () => {
  try {
    await appDatasource.initialize();
    console.info('Database connected successfully');

    app.listen(process.env.SERVER_PORT, () =>
      console.log('Server running in the port', process.env.SERVER_PORT),
    );
  } catch (err) {
    console.error('Erro connected database or running server');
  }
};

main();
