import "dotenv/config";
import { HostConfig } from "./types";

export const PORT = Number(process.env.PORT_API) || 3030;

export const Hosts: Record<string, HostConfig> = {
  gmail: {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
  },
  outlook: {
    host: "smtp.office365.com",
    port: 587,
    secure: false,
  },
};

// export const BASE_URL:string = process.env.BASE_URL || `http://localhost:${PORT}`;
export const BASE_URL: string =
  process.env.BASE_URL || `http://192.168.109.126:${PORT}`;
