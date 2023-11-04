type ServerConsts = {
  PORT: string;
  HOST: string;
};

const SERVER_CONSTS: ServerConsts = {
  PORT: process.env.PORT!,
  HOST: process.env.HOST!,
};

export { SERVER_CONSTS };
