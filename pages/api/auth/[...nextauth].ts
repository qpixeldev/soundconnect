/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NextAuth, {InitOptions} from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import {ConnectionOptions} from "typeorm";
import {NextApiRequest, NextApiResponse} from "next";
import models from "../../../models";

const typeOrmConfig: ConnectionOptions = {
  type: "postgres",
  host: process.env.host,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
}; 

const options: InitOptions = {
  providers: [
    Providers.Spotify({
      clientId: process.env.spotifyCLIENTID!,
      clientSecret: process.env.spotifyCLIENTSECRET!
    }),
    Providers.Twitch({
      clientId: process.env.twitchCLIENTID!,
      clientSecret: process.env.twitchCLIENTSECRET!
    }),
  ],
};

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> => NextAuth(req, res, options);